// App.js

import React, { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';

const API_URL = 'https://omdbapi.com?apikey=fe2f6c44';
const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }
    useEffect(() => {
        searchMovies('Runner');
    }, []);
    return (
        <div className="app">
            
            <div className="search">
                <input
                    placeholder="Search for Movies"
                    value={searchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
                <img
                    src="https://png.pngtree.com/png-vector/20190321/ourmid/pngtree-vector-find-icon-png-image_854997.jpg"
                    alt="search icon"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>

            {
                movies?.length > 0
                    ? (<div className="container">
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>) : (
                        <div className="empty">
                            <h2>No Movies found</h2>
                        </div>
                    )
            }
            <footer>
              <p>&copy; 2023 Movie App</p>
            </footer>
        </div>

    );
}
export default App;
