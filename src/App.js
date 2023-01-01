import './App.css';
import React from 'react';
import PersonCard from './components/personCard';

class App extends React.Component {
  render() {
    return (
              <div className='margin'>
                <h1>Personas</h1>
                <PersonCard nombre="Doe, Jane" edad={45} cabello="Black" />
                <PersonCard nombre="Smith, John" edad={88} cabello="Brown" />
                <PersonCard nombre="Fillmore, Millard" edad={50} cabello="Brown" />
                <PersonCard nombre="Smith, Maria" edad={62} cabello="Brown" />
              </div>
    )
  }
}

export default App;
