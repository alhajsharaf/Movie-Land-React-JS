import React from "react";
import { useState, useEffect } from "react";

import './App.css';
//import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

// b97f56f3
const API_URL = 'http://www.omdbapi.com?apikey=b97f56f3'

/*const movie1 = {
    "Title": "Amazing Spiderman Syndrome",
    "Year": "2012",
    "imdbID": "tt2586634",
    "Type": "movie",
    "Poster": "N/A"
}*/

const App = () => {
     const [movies, setMovies] = useState ([]);
     const [SearchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json()
        
        setMovies(data.Search);
    }
    useEffect (() => {
        searchMovies('Spiderman');
    }, [])
    return(
        <div className="app">
            <h1> Movie Land</h1>
            <div className="search">
                <input
                placeholder="Search for movies"
                value={SearchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img src="https://raw.githubusercontent.com/gist/adrianhajdin/997a8cdf94234e889fa47be89a4759f1/raw/f13e5a9a0d1e299696aa4a0fe3a0026fa2a387f7/search.svg"
                    alt="search"
                    onClick={() => searchMovies(SearchTerm)}
                />
            </div>
            {
                movies?.length > 0 
                ?(
                <div className="container">
                    {movies.map((movie) => (
                        < MovieCard movie={movie}/>
                    ) )}
                    
                </div>  
                ) : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>

                )
            }

        </div>

    );
}



export default App;