import logo from './logo.svg';
import './App.css';
import React,{ useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);
  const [control, setControl] = useState(false);
  useEffect(()=>{
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    // api para el proyecto https://bienes-raices-api-msps.onrender.com/bienes-raices  api local http://10.5.110.96:3000/bienes-raices
    fetch("http://localhost:3000/bienes-raices", requestOptions)
      .then(response => response.json())
      .then(result => setData(result))
      .then(()=>{
        console.log(data);
        setControl(true);
      })
      .catch(error => console.log('error', error));
  },[]);
  return (
    <div className="App">
      <ul>
        {control ? data.map((item,index)=>{
          return <li key={index}>{item.description}</li>
        }) : <li>loading...</li>}
       
      </ul>
    </div>
  );
}

export default App;