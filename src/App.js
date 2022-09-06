import logo from './logo.svg';
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
 const [data, setData] = useState([])
 const [personas, setPersonas] = useState([])
  const obtenerData = async () => {
    let resp = await fetch("https://reqres.in/api/users")
    resp = await resp.json()

    setData(resp)

  }
  useEffect(() => {
    obtenerData()
    var data_array = data.data
    
    if (data_array !== undefined) {
      let personas = []
      data_array.map((x) => {
        let persona = {
          email: x.email,
          last_name: x.last_name,
          first_name: x.first_name,
          avatar: x.avatar
        }
        personas.push(persona)
        console.log(x.last_name)
      })
      setPersonas(personas)
      console.log(personas)
    }

  });
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {personas.map(persona => <li><img src={persona.avatar} />{persona.first_name} ,{persona.last_name} ,{persona.email}</li>)}
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
