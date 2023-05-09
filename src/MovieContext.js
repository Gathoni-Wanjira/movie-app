import React , { useState ,createContext } from "react";


export const MovieContext = createContext ();
export const MovieProvider = props => {

    const [movies, setmovies] = useState([

        {
            name: 'Harry potter',
            price: '$45',
            id: 123
        },

        {
            name: 'Titanic ',
            price: '$32',
            id: 456
        },

        {
            name: 'Me before You',
            price: '$21',
            id: 789,
        }


    ])

    return(
    //    Rendering the movie context
    <MovieContext.Provider value={"hello"}>
        {props.children}
    </MovieContext.Provider>
    );
};
  

