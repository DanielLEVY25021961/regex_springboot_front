import * as React from 'react';
import { Container } from 'semantic-ui-react';

import './../styles/App.css';

import Accueil from './Accueil';

export default class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <Container>
          <Accueil message='Accueil'/>
        </Container>
      </div>
    );
  }
}
