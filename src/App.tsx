import React from 'react';
import './App.css';
import {Person, PersonProps} from './Person'

function App() {
  var data = require('./people.json')

  return (
    <div className="App">
      {data.map((x:PersonProps) => 
        <Person
          name={x.name}
          birthDate={x.birthDate}
          birthLoc={x.birthLoc}
        />
      )}
    </div>
  );
}

export default App;