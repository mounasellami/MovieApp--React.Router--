import React, { useState } from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import {moviesData} from './Components/MoviesData';
import MoviesList from './Components/MoviesList/MoviesList';
import Footer from './Components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Trailers from './Components/Trailers/Trailers';

function App() {
  const [moviesList, setMoviesList]=useState(moviesData);
  const [filterByName, setFilterByName]=useState('');
  const [filterByRate, setFilterByRate]=useState(1);

  const addMovie = (newMovie) => setMoviesList([...moviesList, newMovie]);
  return (
    <div className="App">
      <NavBar
        setFilterByName={setFilterByName}
        filterByRate={filterByRate}   setFilterByRate={setFilterByRate}
      />

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/Series' element={ }/> */}
        <Route path='/Movies' 
               element={ <MoviesList
                         moviesList={moviesList}
                         filterByName={filterByName}
                         filterByRate={filterByRate} 
                         addMovie={addMovie}
                         />
                        }
        /> 
        <Route path='/Movies/:name' element={<Trailers moviesData={moviesData} />}/> 
        {/* <Route path='/Latest' element={ }/>
        <Route path='/Mylist' element={ }/> */}
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

// Objective:
// In this checkpoint, we are going to use the movie app we have created in the previous checkpoint and afterward, we will use the router library to route our views.

// Instructions:
// We will add a description and the trailer link (embed video link) to the object movie.
// Every time I click on a movie card, it will take me to the movie description and trailer page.
// In the description page, I can navigate back to the home page.