import React,{useEffect,useState} from 'react';
import Recipe from './Recipe';
import Header from './Header';
import './App.css';

function App() {

  const APP_ID='ed885aad';
  const App_Key='341525543f3828d8e25e3c688f7b3f32';

  const [recipes,setRecipes]=useState([]);
  const [search,setSearch]=useState("");
  const [query,setQuery]=useState('banana')

  useEffect(()=>{
    getRecipes();
  },[query])


  const getRecipes=async ()=>{
    const response=await fetch(`https://api.edamam.com/search?q=${query}&app_id=${ APP_ID}&app_key=${App_Key}`)
    const data=await response.json();
    setRecipes(data.hits)

  }

  const searchUpdate=(e)=>{
    setSearch(e.target.value);
  }

  const getSearch=(e)=>{
    e.preventDefault();
    setQuery(search);
  }
  
  return (
    <div className="App">
      <Header/>
      <form className="search-form" onSubmit={getSearch}>
        <input className="search-bar" type="text" value={search} onChange={searchUpdate}/>
        <button className="search-button" type="submit">search</button>
      </form>
      <div className="recipes">
      {
        recipes.map((recipe)=>(
          <Recipe key={recipe.recipe.label}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredients}/>
        ))
      }
      </div>
    </div>
  );
}

export default App;
