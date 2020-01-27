import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component{

render(){

    const movies = this.props.data.map(movie => {
        return(
            <>
            <Movie data={movie.url} key={movie.id}>{movie.name}</Movie>
            </>
            )
    })

    return(
        <ul>
            {movies}
        </ul>
    )
}

    
}

export default MovieList;