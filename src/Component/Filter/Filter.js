import React, {useState , useEffect} from 'react'
import {Form , FormControl } from 'react-bootstrap'
import "./Filter.css"
// import ReactStars from 'react-stars'

// component
import MovieCard from '../MovieCard/MovieCard'
import StarRatingComponent from "react-star-rating-component";


function Filter({ MovieData , rate ,searchTerm , setSearchTerm , setRate }) {

    // function to get the current value
    const handleChange = event => {
       setSearchTerm(event.target.value);
     };
    
    const filteredMovies = MovieData.filter((movie) =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())  && movie.rating >= rate
    );

    return (
        <div>
          <div>
          <Form className="search-field">
                <input 
                type="text" 
                placeholder="Search" 
                className="mr-sm-2" 
                value={searchTerm}onChange={handleChange} 
                className="search-input" 
                />
                <StarRatingComponent
                    name="rate"
                    className="starts"
                    starCount={5}
                    value={rate}
                    color2={"#fafa48"}
                    onStarClick={(nextValue, prevValue) =>
                        setRate(nextValue, prevValue)
                    }
                />
            </Form>
          </div>
                <MovieCard filteredMovies={filteredMovies} />

        </div>
    )
}

export default Filter