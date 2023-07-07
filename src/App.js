import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Persons from './components/Persons/Persons';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Persons></Persons>
      <Countries></Countries>
      <footer>@Copyright</footer>

    </div>
  );
}

// rest countries data load
function Countries() {
  const [countries, setCountries] = useState([])
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data => setCountries(data));
  }, [])
  return (

    <div>
      <h1>Explore All Countries!!</h1>
      <h4>Available Countries: {countries.length}</h4>
      {
        countries.map(country => <DisplayCountry name={country.name.common} population={country.population} image={country.flags.png} key={country.cca3}></DisplayCountry>)
      }

    </div>
  )
}

function DisplayCountry(props) {
  return (
    <div className='country'>
      <h1>{props.name}</h1>
      <p>Population: {props.population}</p>
      <img src={props.image} alt="" />
    </div>
  )
}
export default App;
