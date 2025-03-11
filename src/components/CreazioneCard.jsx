import { Link } from "react-router-dom"

export default function CreazioneCard() {
    return (
    <div className="card">
        <img className="img"
            src="http://localhost:4000/img/movies_img/inception.jpg"
            alt="descrizione img" />
        <div className="card-body">
            <h2 className="card-title">
                Titolo del libro
            </h2>
            <address><i>
                By nome autore
            </i></address>
            <p className="card-text">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto labore ad sapiente animi incidunt. Sit nihil sed, aliquam rerum ipsam illo optio impedit aperiam molestiae.
            </p>
            <Link to={"/movie/2"}><h3>See more</h3></Link>
        </div>
    </div>
    );
}