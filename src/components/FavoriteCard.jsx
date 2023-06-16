import { Link } from "react-router-dom"
import { useRef, useState } from "react";

import "../fav.css";
// import "./fav_fx"
import { cardClick } from "./fav_fx";


const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;


const FavoriteCard = ({movieID, onLiked}) =>{

    // let isFetching = true;
    const [isFetching, setIsFetching] = useState(true)
    const [getMovie, setMovie] = useState([])

    const fav_cad = useRef(null);

    fetch(`${API_URL}&i=${movieID}`)
            .then(res => res.json()).then(data => {
                setIsFetching(false);
                // console.log(data)
                setMovie(data);
            })
    
    
    return(
        isFetching ?
        (
            <div className="favorite-skeleton">
                <img loading="lazy" className="skeleton" alt=" "/>
                <div className="fav_details">
                    <small className="genre skeleton"></small>
                    <small className="type skeleton"></small>
                    <h4 className="title skeleton"> </h4>
                    <p className="year skeleton"></p>
                </div>
            </div>
        )
        :
        <div className="favorite-container">
            <button>
                <Link to={`/info?id=${movieID}`} >
                    More <br /> Info
                </Link>
            </button>
            <div className="favorite-card" ref={fav_cad} onClick={() => cardClick(fav_cad.current)}>
                <img loading="lazy" draggable='false' src={getMovie.Poster !== 'N/A' ? getMovie.Poster : 'https://via.placeholder.com/800x800.png/333&text=Image'} alt={getMovie.Title} />
                <div className="fav_details">
                    <small className="genre">{getMovie.Genre}</small>
                    <small className="type">{getMovie.Type}</small>
                    <h4 className="title">{getMovie.Title}</h4>
                    <p className="year">{getMovie.Year}</p>
                </div>
                <button onClick={() => onLiked(movieID)}>
                    <i className="fi fi-rr-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default FavoriteCard
 