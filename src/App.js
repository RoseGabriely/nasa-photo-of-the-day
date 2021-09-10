import axios from "axios";
import React, {useState, useEffect} from "react";
import { BASE_URL, API_KEY } from "./constants";
import "./App.css";
import Header from './components/Header'
import Title from './components/Title'
import Image from './components/Image'
import Caption from './components/Caption'

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}`)
    .then(res => {
      setData(res.data)
    })
    .catch(err => {
      console.error(err)
    })
  }, [])

  return (
    <div className="App">
      <Header data={data}/>
      <Title data={data}/>
      <Image data={data}/>
      <Caption data={data}/>
    </div>
  );
}

export default App;
