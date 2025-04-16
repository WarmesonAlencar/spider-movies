import axios from 'axios';
import './index.scss';

export default function MovieList(){
    const[movies, setMovies] = useState([]);

    const getMovies = () => {
        axios({
            method: 'get',
            url:'https://api.themoviedb.org/3/discover/movie',
            params: {
                api_key:'b224536c0803f50498a7118ee808a91e'
            }
        })
    }
    return (
        <ul className="movie-list">
            <li></li>
        </ul>
    )
}