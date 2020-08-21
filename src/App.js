import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const names = ['Sarwar', 'Mahin', 'Mahdi', 'Tahsin', 'Muslam', 'Heba'];
  const products = [
    {name: 'Photoshop', price:'$99.99'},
    {name: 'Illustrator', price:'$66.99'},
    {name: 'Pdf Reader', price: '6.99'},
    {name: 'Premium', price: '249.99'}
  ];

  const prooductsNames = products.map(product => product.name);
  console.log(prooductsNames);
  return (
    <div className="App">
      <header className="App-header">
        <p>I am a React Person</p>
        <Count></Count>
        <Users></Users>
        <ul>
          {
            names.map(name => <li>{name}</li>)
          }
          {
            products.map(product => <li>{product.name}</li>)
          }
        </ul>
        {
          products.map(pd => <Products product={pd}></Products>)
        }
        {
          names.map((name)=> <Person name={name}></Person>)
        }
      </header>
    </div>
  );
}

function Users(){
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic Users: {users.length}</h3>
      <ol>
        {
          users.map(user => 
          <li>
          <strong>Name: </strong>{user.name} <br/>
          <strong>Email: </strong> {user.email} <br/> <strong>Phone: </strong> {user.phone} <br/>
          </li>)
        }
      </ol>
    </div>
  )
}

function Count(){
  const [count, setCount] = useState(10);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
function Products(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '400px',
    folat: 'left'
  };
  const {name, price} = props.product;
  return (
    <div style={productStyle}>
      <h3>{name}</h3>
      <h5>{price}</h5>
      <button>Buy now</button>
    </div>
  );
}
function Person(props){
  return (
  <div style={{border: '2px solid yellow', margin:'10px', width:'500px'}}>
    <h1>Name: {props.name}</h1>
    <p>23 years old</p>
  </div>
  );
}
export default App;
