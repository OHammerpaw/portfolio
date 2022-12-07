import 'semantic-ui-css/semantic.min.css'
import './App.css';

import "./FinkHeavy/FinkHeavy.ttf";

import PortfolioHeader from './components/Header';
import Projects from './components/Projects';
import Technology from './components/Technologies';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <PortfolioHeader />
      <AboutMe />
      <Projects />
      <Technology />
    </div>
  );
}

export default App;
