import React from "react";
import { useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
    const value = useContext(MovieContext)
    return (
        <>
            <h1> {value}</h1>
            <div className="Nav">


                <h3>Dev Nonzie</h3>
                <p>List of Movies: </p>

            </div>
        </>
    );
};





export default Nav;