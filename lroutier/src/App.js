import 'semantic-ui-css/semantic.min.css'
import './App.css';

import "./FinkHeavy/FinkHeavy.ttf";

import PortfolioHeader from './components/Header';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <PortfolioHeader />
      <Projects />
    </div>
  );
}

export default App;
