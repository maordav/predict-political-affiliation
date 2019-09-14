import React from 'react';
import {useState} from 'react'
import logo from './logo.jpg';
import right from './right.jpg';
import left from './left.jpg';
import axios from 'axios';
import './App.css';

const App = () => { 
  const [tweet,setTweet] = useState('Enter tweet')
  const [affilation, setAffiliation] = useState()
  const predictTweet = ()=>{
    axios.post(`http://localhost:8080/predict`, { tweet })
    .then(res => {
      setAffiliation(res.data.affilation);
      setTimeout(()=>setAffiliation(undefined), 5000 )
    })
}
  
  return (
    <div className="App">

{!affilation ?
      (<div className="App-body">
        <img style={{paddingTop:"20vh"}}src={logo} className="App-logo" alt="logo" />
        <p>
        Enter tweet
        </p>
        <textarea
          className="Text-area"
          value={tweet}
          onChange={(e)=>setTweet(e.target.value)}
        />
              <button style={{marginTop:"10px"}}
              onClick={predictTweet}
              >Predict </button>

      </div>)
:
      (<div className="App-body">
        {affilation}
          <img style={{paddingTop:"20vh"}} src={affilation === 'right' ?
           right : left} className="App-logo" alt="logo" />
    </div>)}
    </div>
  )
}

export default App;
