import React, { useEffect, useState } from 'react';
import './App.css';
import Recipie from './Recipie'

const App = () => {

  const APP_ID = '862e916f';
  const API_KEY = '385d4dcea1a8b099eaa73a170b39de89';

  const [recipies, setRecipies] = useState([])
  const [search, setSearch] = useState('')
  const [query, setQuery] = useState('Dosa')

  useEffect(() => {
    getRecipies();
  }, [query]);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${API_KEY}`)
    const data = await response.json()
    setRecipies(data.hits)
    console.log(data)
  }

  const updateSearch = e => {
    setSearch(e.target.value)
  }
  
  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch('')
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipies">
      {
        recipies.map(recipie => (
          <Recipie 
            key={recipie.recipe.label}
            title={recipie.recipe.label}
            calories={recipie.recipe.calories}
            img={recipie.recipe.image}
            ingredients={recipie.recipe.ingredients}
            desc={recipie.recipe.url}
          />
        ))
      }
      </div>
    </div>
  )
}

export default App;
