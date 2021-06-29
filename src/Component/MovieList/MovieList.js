import React from 'react'
import "./MovieList.css"

const  MovieList = ({MovieData}) =>{
    return (
        // card items
            <div className="movie-item">
                <div className="movie-item-img">
                    <img src={MovieData.posterUrl} alt=""/>
                    <div className="movie-item-description">
                        <span>{MovieData.description}</span>
                    </div>
                </div>
                <div className="movie-item-footer">
                    <div className="movie-item-footer-name">
                    {MovieData.title}  
                    </div>
                    <div className="movie-item-footer-rating">Rate : {MovieData.rating}</div>
                </div>
        </div>
    )
}

export default MovieList
