import React, { Component } from 'react';
import MovieList from './MovieList';

class Movie extends Component{

    render() {

        return (
            <li>
                <a href={this.props.data}>{this.props.children}</a>
            </li>
            );
        }
        
}
export default Movie;
