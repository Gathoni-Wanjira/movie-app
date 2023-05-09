import React from "react";
import { useState } from "react";

// Creating a movie list
// Movies  is a variable with the movies data either from an array or from a fetched API.
// Setmovies however is a function that that updates movies state variable whenever its called with a new value.
const MovieList = () => {
    const [movies, setmovies] = useState ([

        {name: 'Harry potter',
        price: '$45',
        id: 123},

        {name:'Titanic ',
        price: '$32',
        id:456 },

       { name:'Me before You' ,
        price: '$21' ,
        id: 789,}


    ])
    return(
        <div>
        {movies.map((movie) => (
            <li>{movie.name}</li>

        ) )}
        </div>

    );
}





export default MovieList;