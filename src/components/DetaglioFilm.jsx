import axios from "axios";
import { useState, useEffect } from 'react';
// import della parte di ritorno parametro rotta FE
import { useParams } from "react-router-dom";
 
// import del componente di listato
import ReviewCard from './ReviewCard';
import FormCard from './FormCard';
import MovieCard from './MovieCard';

export default function DetaglioFilm() {

     // destructuring per ritornare l'id (proprietà id dell'oggetto param)
     const { id } = useParams();

     //  settaggio dello stato del componente
     const [movie, setMovie] = useState({});

      // funzione di chiamata verso la rotta store
    function fetchMovie() {
        axios.get(`http://localhost:4000/movie/${id}`)
            .then(res => setMovie(res.data))
            .catch(err => console.log(err))
    }

    useEffect(fetchMovie, []);

    return (
        <div className="detail">
            <MovieCard movieProp={movie}/>
 
             <section id="reviews">
                 <div className="stars">
                     <h4>Our community reviews</h4>
                     <span>VOTO GENERALE:</span>
                 </div>
                 {/* Reviews qui */}
                 <ReviewCard />
                 <ReviewCard />
                 <ReviewCard />
             </section>
             <FormCard />
        </div>
    );
}