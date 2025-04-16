'use client';

import { useEffect, useState } from 'react';
import './index.scss';
import axios from 'axios';

export default function MovieList(){
    const[movies, setMovies] = useState([]);

    const getMovies = () => {
        axios({
            method: 'get',
            url:'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key:'b224536c0803f50498a7118ee808a91e',
                language: 'pt-BR'
            }
        }).then(response => {
            console.log(response);
        })
    }

    getMovies();

    return (
        <ul className="movie-list">
            <li></li>
        </ul>
    )
}