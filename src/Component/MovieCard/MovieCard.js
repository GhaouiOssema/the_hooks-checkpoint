import React from 'react'
import MovieList from '../MovieList/MovieList'
import './MovieCard.css';


const MovieCard = (props) => {
    return (
        <div className="movieCARD">
               {props.filteredMovies.map((MovieData, index) => { return <MovieList key={index} MovieData={MovieData}/> })}
        </div>
    )
}

export default MovieCard
