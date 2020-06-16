import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import { Button, Header } from 'semantic-ui-react';
import ReactGA from 'react-ga';


function App() {

  ReactGA.initialize('UA-169628228-01');
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <div className="App">
      <header className="App-header">
        <Header size='huge' color="blue">Raj Parekh</Header>

        <p>
          This portfolio is under construction
        </p>
       
        <p class="App-link">Meanwhile visit,</p>  

        <Button.Group>
            <Button secondary as='a' href="https://docs.google.com/document/d/1-iLJ-8OZnjc51iMDdemKqGuc1gKxEq6OGvdC3zfcbj4/export?format=pdf">Resume</Button>

            <Button.Or />
            <Button primary as='a' href="https://devdb.io/parekhraj">Profile</Button>
            
            <Button.Or />
            <Button secondary as='a' href="https://in.linkedin.com/in/rajparekh07">LinkedIn</Button>

          </Button.Group>
       
      </header>
    </div>
  );
}

export default App;
