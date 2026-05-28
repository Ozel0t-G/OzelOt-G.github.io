import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './pages/About.jsx';
import ArticlePage from './pages/ArticlePage.jsx';
import Articles from './pages/Articles.jsx';
import Home from './pages/Home.jsx';
import NotFound from './pages/NotFound.jsx';
import Work from './pages/Work.jsx';

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
