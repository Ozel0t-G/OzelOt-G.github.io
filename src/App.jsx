import { Navigate, Route, Routes, useParams } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import About from './pages/About.jsx';
import NotePage from './pages/NotePage.jsx';
import Notes from './pages/Notes.jsx';
import Home from './pages/Home.jsx';
import Impressum from './pages/Impressum.jsx';
import NotFound from './pages/NotFound.jsx';
import Work from './pages/Work.jsx';

function LegacyNotesRedirect() {
  const { slug } = useParams();

  return <Navigate to={`/notes/${slug}`} replace />;
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/notes/:slug" element={<NotePage />} />
        <Route path="/articles" element={<Navigate to="/notes" replace />} />
        <Route path="/articles/:slug" element={<LegacyNotesRedirect />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
