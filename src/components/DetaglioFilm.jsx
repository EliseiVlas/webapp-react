import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

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
    const renderReviews1 = () => {
        if (!movie.reviews || movie.reviews.length === 0) return <span>Nessuna recensione</span>;
        const total = movie.reviews.reduce((sum, review) => sum + review.vote, 0);
        const average = total / movie.reviews.length;
        const media = average.toFixed(1); // Arrotonda a una cifra decimale

        return  <span>
                    {media >= 1 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                    {media >= 1.5 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                    {media >= 2.5 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                    {media > 3.5 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                    {media > 4.5 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                </span>        
    }


    return (
        <div className="detail">
            <h2>Dettaglio del film: {movie.title}</h2>
            <MovieCard movieProp={movie}/>
 
             <section id="reviews">
                 <div className="stars">
                     <h1>Our community reviews</h1>
                     <span>VOTO GENERALE: {renderReviews1()}</span>
                 </div>
                 {/* Reviews qui */}
                 {renderReviews()}
             </section>
             <FormCard movie_id={movie.id} realoadReview={fetchMovie}/>
        </div>
    );
}