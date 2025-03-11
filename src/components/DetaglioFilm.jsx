// importiamo parte LInk del modulo react-router
import { Link } from "react-router-dom"
 
// import del componente di listato
import ReviewCard from './ReviewCard';

export default function DetaglioFilm() {
    return (
        <>
            <div className="">
                 <div className="">
                     <img className=""
                         src="http://localhost:4000/img/movies_img/inception.jpg"
                         alt="descrizione img" />
                     <div>
                         <h1>Titolo libro</h1>
                         <h3 className="">
                             <i>
                                 By Nome autore
                             </i>
                         </h3>
                         <p>
                             Abscract lorem ipsm dolor sit amet...
                         </p>
                     </div>
                 </div>
 
             </div>
 
             <section id="reviews">
                 <div className="">
                     <h4>Our community reviews</h4>
                 </div>
                 {/* Reviews qui */}
                 <ReviewCard />
                 <ReviewCard />
                 <ReviewCard />
             </section>
 
             <div className="">
                 <Link className="" to="/">Back to home</Link>
             </div>
        </>
    );
}