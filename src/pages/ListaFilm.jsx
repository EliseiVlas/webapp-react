import { useState, useEffect } from 'react';
import axios from 'axios';
import CreazioneCard from './../components/CreazioneCard';

export default function ListaFilm() {

    const [movie, setMovie] = useState([]);
    // FUNZIONE DI FETCHING DEI DATI LISTA MOVIE
    const fetchMovie = () => {
        axios.get("http://localhost:4000/movie")
        .then(
            res => {
               setMovie(res.data)
            }
        )
        .catch(err => console.log(err)
        )
    }
    const renderMovie = () =>{
        return movie.map(
            movie => {
                return(
                        <CreazioneCard movieProp={movie}  key={movie.id}/>
                )
            }
        )
    }
    useEffect(fetchMovie, []);
    return (
        <main>
           <h1>Detagio tutti i film</h1>

           <div className='lista'>
                {renderMovie()}
           </div>
        </main>
    );
}