import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Sarwar', 'Mahin', 'Mahdi']
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Person name={names[0]} age="23"></Person>
        <Person name={names[1]} age="24"></Person>
        <Person name={names[2]} age="30"></Person>
      </header>
    </div>
  );
}

function Person(props){
  
  return (
  <div style={{border: '2px solid yellow', margin:'10px', width:'500px'}}>
    <h1>Name: {props.name}</h1>
    <p>{props.age} years old</p>
  </div>
  );
}
export default App;
