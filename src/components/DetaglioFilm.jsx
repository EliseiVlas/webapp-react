
 
// import del componente di listato
import ReviewCard from './ReviewCard';
import FormCard from './FormCard';
import MovieCard from './MovieCard';

export default function DetaglioFilm() {
    return (
        <div className="detail">
            <MovieCard />
 
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