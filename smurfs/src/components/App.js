import React, { useState, useEffect } from "react";
import axios from 'axios'
import "./App.css";

import SmurfList from './SmurfList'

const App = () => {

  const [getSmurf, setGetSmurf] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
          console.log(res.data)
          setGetSmurf(res.data)
      })
      .catch(err => err)
  }, [])

    return (
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <div>Welcome to your state management version of Smurfs!</div>
        <div>Start inside of your `src/index.js` file!</div>
        <div>Have fun!</div>
        {getSmurf.map(list => {
          return <SmurfList key={list.id} list={list}/>
        })

        }
      </div>
    );

}

export default App;
