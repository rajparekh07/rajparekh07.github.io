import React from 'react';
import {
    Button,
    Header
} from 'semantic-ui-react';

const ProductionPlaceholder = () => (
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
)

export default ProductionPlaceholder;