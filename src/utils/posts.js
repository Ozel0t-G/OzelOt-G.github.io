const postModules = import.meta.glob('../content/posts/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
});

const postImageModules = import.meta.glob('../content/posts/*.{avif,gif,jpeg,jpg,png,webp}', {
  query: '?url',
  import: 'default',
  eager: true,
});

const dateFormatter = new Intl.DateTimeFormat('en', {
  month: 'short',
  day: 'numeric',
  year: 'numeric',
});

function createSlug(path) {
  return path
    .split('/')
    .pop()
    .replace(/\.md$/, '')
    .replace(/^\d{4}-\d{2}-\d{2}-/, '');
}

function parseValue(value) {
  const trimmed = value.trim();

  if (trimmed.startsWith('[')) {
    return trimmed
      .replace(/^\[/, '')
      .replace(/\]$/, '')
      .split(',')
      .map((item) => item.trim().replace(/^"|"$/g, ''))
      .filter(Boolean);
  }

  return trimmed.replace(/^"|"$/g, '');
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);

  if (!match) {
    return { metadata: {}, content: raw };
  }

  const metadata = match[1].split('\n').reduce((acc, line) => {
    const separator = line.indexOf(':');

    if (separator === -1) {
      return acc;
    }

    const key = line.slice(0, separator).trim();
    const value = line.slice(separator + 1);

    acc[key] = parseValue(value);
    return acc;
  }, {});

  return { metadata, content: match[2].trim() };
}

function resolveMarkdownImages(content, postPath) {
  const basePath = postPath.slice(0, postPath.lastIndexOf('/') + 1);

  return content.replace(/!\[([^\]]*)\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g, (match, alt, src) => {
    if (/^(?:https?:)?\/\//.test(src) || src.startsWith('/') || src.startsWith('#')) {
      return match;
    }

    const imageUrl = postImageModules[`${basePath}${src}`];

    if (!imageUrl) {
      return match;
    }

    return `![${alt}](${imageUrl})`;
  });
}

export function getPosts() {
  return Object.entries(postModules)
    .map(([path, raw]) => {
      const { metadata, content } = parseFrontmatter(raw);
      const date = metadata.date || '';

      return {
        slug: createSlug(path),
        title: metadata.title || 'Untitled',
        date,
        formattedDate: date ? dateFormatter.format(new Date(`${date}T00:00:00`)) : '',
        description: metadata.description || '',
        tags: Array.isArray(metadata.tags) ? metadata.tags : [],
        readingTime: metadata.readingTime || '',
        content: resolveMarkdownImages(content, path),
      };
    })
    .sort((a, b) => new Date(`${b.date}T00:00:00`) - new Date(`${a.date}T00:00:00`));
}

export function getPostBySlug(slug) {
  return getPosts().find((post) => post.slug === slug);
}
