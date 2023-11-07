import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/Sidebar';
import Content from './components/content/Content';

import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="main-content">
          <Sidebar />
          <Content />
        </div>
      </div>
    </Router>
  );
}

export default App;
