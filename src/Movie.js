import React from "react";

const Movie = ({name ,price, id})=> {
    return (
        <div>
            <h3>{name}</h3>
            <p>{price}</p>
            <h5>{id}</h5>
        </div>
    );
};





export default Movie;