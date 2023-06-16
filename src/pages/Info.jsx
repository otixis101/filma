import React from 'react'
import { useState } from 'react'
import { useLocation } from 'react-router-dom'

import Navbar from '../container/Navbar'
import './Info.css'

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

const Info = () => {
  // const movieID = "tt9335498";
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const movID = params.get('id');
  const [getMovie, setMovie] = useState([])

  const [isFetching, setIsFetching] = useState(true)

  fetch(`${API_URL}&i=${movID}`)
            .then(res => res.json()).then(data => {
              setIsFetching(false)
                setMovie(data)
            })
    
  return (
    <main className='info--main'>
      <img className='bg-img skeleton' src={getMovie.Poster} alt="background" />
      <Navbar />
      
      {
        isFetching ?
        (
          <section className='skeletal-rest'>
            <div className='details'>
              <div>
                <img className='skeleton' alt="" />
                <h1 className='title skeleton'> </h1>
              </div>
              <div>
              <div>
                <small>Release Year</small>
                <h3 className='skeleton txt'> </h3>
              </div>
              <div>
                <small>Type</small>
                <h3 className='skeleton txt'> </h3>
              </div>
              <div>
                <small>Genre</small>
                <h3 className='skeleton txt'> </h3>
              </div>
              <div>
                <small>PG Rating</small>
                <h3 className='skeleton txt'> </h3>
              </div>
              <div>
                <small>IMDB Rating</small>
                <h3 className='skeleton txt'> </h3>
              </div>
              <div>
                <small>RunTime</small>
                <h3 className='skeleton txt'> </h3>
              </div>
              <div>
                <small>Cast</small>
                <h3 className='skeleton txt'> </h3>
              </div>

              </div>
              <article>
                <h2>Plot</h2>
                <p className='skeleton txt'></p>
                <p className='skeleton txt'></p>
                <p className='skeleton txt'></p>
              </article>
            </div>
          </section>
        )
        :
        (
        
          <section className='rest'>
            <div className='details'>
              <div>
                <img src={getMovie.Poster} className='' alt="" />
                <h1 className='title'>{getMovie.Title}</h1>
              </div>
              <div>
              <div>
                <small>Release Year</small>
                <h3>{getMovie.Year}</h3>
              </div>
              <div>
                <small>Type</small>
                <h3>{getMovie.Type}</h3>
              </div>
              <div>
                <small>Genre</small>
                <h3>{getMovie.Genre}</h3>
              </div>
              <div>
                <small>PG Rating</small>
                <h3>{getMovie.Rated}</h3>
              </div>
              <div>
                <small>IMDB Rating</small>
                <h3>{getMovie.imdbRating} of 10</h3>
              </div>
              <div>
                <small>RunTime</small>
                <h3>{getMovie.Runtime}</h3>
              </div>
              <div>
                <small>Cast</small>
                <h3>{getMovie.Actors}</h3>
              </div>

              </div>
              <article>
                <h2>Plot</h2>
                <p>{getMovie.Plot}</p>
              </article>
            </div>
          </section>
        )
      }
      
    </main>
  )
}

export default Info