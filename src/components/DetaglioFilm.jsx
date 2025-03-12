import axios from "axios";
import { useState, useEffect } from 'react';
// import della parte di ritorno parametro rotta FE
import { useParams, useNavigate } from "react-router-dom";
 
// import del componente di listato
import ReviewCard from './ReviewCard';
import FormCard from './FormCard';
import MovieCard from './MovieCard';

export default function DetaglioFilm() {

     // destructuring per ritornare l'id (proprietà id dell'oggetto param)
     const { id } = useParams();

    //  richiamo use navigate
    const redirect = useNavigate();

     //  settaggio dello stato del componente
     const [movie, setMovie] = useState({});

      // funzione di chiamata verso la rotta store
    function fetchMovie() {
        axios.get(`http://localhost:4000/movie/${id}`)
            .then(res => setMovie(res.data))
            .catch(err => {
                console.log(err);
                if (err.status === 404) redirect("/404")
                })
    }

    useEffect(fetchMovie, []);
    
    const renderReviews = () => {
        return movie.reviews?.map(
            review => <ReviewCard key={review.id} reviewProp={review} />
        )
    }

    return (
        <div className="detail">
            <h2>Dettaglio del film: {movie.title}</h2>
            <MovieCard movieProp={movie}/>
 
             <section id="reviews">
                 <div className="stars">
                     <h4>Our community reviews</h4>
                     <span>VOTO GENERALE:</span>
                 </div>
                 {/* Reviews qui */}
                 {renderReviews()}
             </section>
             <FormCard />
        </div>
    );
}