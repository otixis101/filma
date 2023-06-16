import React from 'react'
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import FavoriteCard from "../components/FavoriteCard"
// import Favorites from './Favorites';

import empty_illust from "../assets/empty_ilustration.png";


import '../Home.css';
import '../loader.css';
import '../favorite.css';
import '../Home_func'


const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

    // Get the existing data from Local Storage
    const _favoritesData = JSON.parse(localStorage.getItem('favData')) || [];

const Home = () => {
    const [getFavorites, setFavorites] = useState(_favoritesData);
    const [getLoading, setLoading] = useState(false);
    const [getFilter, setFilter] = useState('');
    const [getMovies, setMovies] = useState([]);
    const [getSearchTerm, setSearchTerm] = useState('avengers');

    const onLiked = (id) => {
        getFavorites.filter(fav => fav.movID === id).length > 0 ?
        setFavorites(getFavorites.filter(f => (f.movID !== id))) :
        setFavorites([...getFavorites, {'movID' : id}])

    }
    
    const searchMovies = (title, type) => {
        setLoading(true);
        fetch(`${API_URL}&s=${title}&type=${type}`)
        .then(res => res.json()).then(data => {
            // console.log(data)
            setMovies(data.Search)
            setLoading(false)
        })
    }
    useEffect(() =>{
        // Update the data (e.g. add a new item)
        const newData = [...getFavorites];
        // Save the updated data back to Local Storage
        localStorage.setItem('favData', JSON.stringify(newData));
    }, [getFavorites])

    useEffect(() => {
        searchMovies(getSearchTerm, getFilter)
    }, [getFilter, getSearchTerm])


    return (
        <section>
        <aside className='close'>
            <div className='fav-template'>
                <h3>My Favorties</h3>
                {
                    getFavorites.length > 0 ? (
                    <div className="fav-container">
                        {
                            getFavorites.map((f_id) =>
                            <FavoriteCard key={f_id.movID} movieID={f_id.movID} onLiked={onLiked} />
                            )
                        }
                    </div>
                ) : (
                    <div className='empty'>
                        <p>No Favorites Added Yet..</p>
                    </div>
                    )
                }
            </div>
        </aside>
        <main className="main">
            <h2 className="logo-title">Moviepedia.</h2>

            <div className="search-div">
                <input type="text" placeholder="search by keyword or title of movie/series name e.g Avengers"
                    value={getSearchTerm}
                    onChange={(e) => { setSearchTerm(e.target.value) }}
                />
                    <i className="fi fi-rr-search"></i>
                {/* <button onClick={() => searchMovies(getSearchTerm, getFilter)}>
                </button> */}
            </div>
            <button className='fav-toggle'>
                <i className='fi fi-rr-heart'></i>
                <div className='count'>{getFavorites.length}</div>
            </button>
            <br />
            <div className="filter-div">
                <ul className="filter-ul">
                    <li onClick={() => setFilter("")} className="active">All</li>
                    <li onClick={() => setFilter("movie")}>Movie</li>
                    <li onClick={() => setFilter("series")}>TV Series</li>
                </ul>
            </div>

            {
                getLoading ?
                    (
                        <div className="loader-div">
                            <div className="loader">
                                <div className="square" id="sq1"></div>
                                <div className="square" id="sq2"></div>
                                <div className="square" id="sq3"></div>
                                <div className="square" id="sq4"></div>
                                <div className="square" id="sq5"></div>
                                <div className="square" id="sq6"></div>
                                <div className="square" id="sq7"></div>
                                <div className="square" id="sq8"></div>
                                <div className="square" id="sq9"></div>
                            </div>

                        </div>

                    ) :
                    (
                        getMovies?.length > 0 ? (
                            <div className="container">
                                {
                                    getMovies.map((movie) =>
                                        <MovieCard key={movie.imdbID} onLiked={onLiked} favorites={getFavorites} movie={movie} />
                                    )
                                }
                            </div>
                        ) : (
                            <div className="empty">
                                <img src={empty_illust} alt="empty illustration" />
                                <h2>No Movies Found!</h2>
                            </div>
                        )

                    )




            }

        </main>
        </section>
    )

}

export default Home