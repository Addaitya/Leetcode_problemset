/* eslint-disable react/prop-types */
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import ShowQuestions from './components/ShowQuestions';
import Buttons from './components/Buttons';

function App() {
  const [noOfsets, setNoOfSets] = useState(0) 
  const [currentSet, setCurrentSet] = useState([])
  const [currentIndex, setCurrentIndex] = useState(0)

  const p = () => {
    axios
      .get(`http://localhost:3000/No-of-sets`)
      .then(response => {
        // console.log(response.data[0]);
        setNoOfSets(response.data[0]);
      })

    axios.get(`http://localhost:3000/problem-sets/${currentIndex}`)
    .then(response =>{
      //  console.log(response.data);
       setCurrentSet(response.data["problem-set"])
    })
  }

  useEffect(p, [currentIndex]);

  const changeProblemSet = (index) => setCurrentIndex(index)

  return (
    <>
    <Buttons noOfButtons={noOfsets} changeProblemSet={changeProblemSet} selectedSet={currentIndex}/>
    <ShowQuestions questions={currentSet} />
    </>
  )
}

export default App
