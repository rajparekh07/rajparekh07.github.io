// Raj Parekh Portfolio
// 16-06-2020
// Author: Raj Parekh


// Import React
import React from 'react';

// Import CSS
import './App.css';
import 'semantic-ui-css/semantic.min.css'


// Import Node Modules
import ReactGA from 'react-ga';


// Import project files
import ProductionPlaceholder from './components/ProductionPlaceholder'
import Container from './components/MainContainer'


// Main App()
function App() {

  ReactGA.initialize('UA-169628228-01');
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  return  (!process.env.NODE_ENV || process.env.NODE_ENV === 'development') ?
   (
    <div>
      <Container/>
    </div>
  )
  :(
    <div className="App">
      <ProductionPlaceholder />
    </div>
  );
}

export default App;
