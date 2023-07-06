import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Countries></Countries>
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
      {
        countries.map(country => <DisplayCountry name={country.name.common} population={country.population} image={country.flags.png}></DisplayCountry>)
      }
      <h1>Explore All Countries!!</h1>
      <h4>Available Countries: {countries.length}</h4>
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
