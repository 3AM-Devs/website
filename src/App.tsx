import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./pages/About.tsx";
import Home from "./pages/Home.tsx";
import Team from "./pages/Team.tsx";
import Projects from './pages/Projects.tsx';


function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/projects" element={<Projects />} />

        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
