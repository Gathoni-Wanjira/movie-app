import React , { useState} from "react";
import { useContext } from "react";
import { MovieContext } from "./MovieContext";


const AddMovie = () => {
    const [name, setName] = useState('');
    const [price , setPrice] = useState ('');
    const [movies, Setmovies] = useContext(MovieContext);


    // Creating a new function to update the price and name empty strings above.

    const updateName = (e) => {
        setName(e.target.value);

    } 

    const updatePrice = (e) => {
        setPrice(e.target.value);

    }

    // Add a function to enable the addmovies to refresh on click.

    const addMovie = (e) => {
        e.preventDefault ();
        Setmovies(prevMovies => [...prevMovies , {name: name, price: price}])
        setName('');
        setPrice('');

    }


    return (
        <form onSubmit={addMovie}>
            <input Type = 'text' name = 'name' value = {name} onChange = {updateName}/>
            <input Type = 'text' name = 'price' value = {price} onChange = {updatePrice}/>
            <button type="submit">Submit</button>

        </form>
    );
}

export default AddMovie;