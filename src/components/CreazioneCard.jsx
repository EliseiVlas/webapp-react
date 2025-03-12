import { Link } from "react-router-dom"

export default function CreazioneCard(props) {

    const {id, title, director, abstract, image } = props.movieProp
    return (
    <div className="card">
        <img className="img"
            src={image}
            alt={title} />
        <div className="card-body">
            <h2 className="card-title">
                {title}
            </h2>
            <address><i>
                {director}
            </i></address>
            <p className="card-text">
                {abstract}
            </p>
            <Link to={`/movie/${id}`}><h3>See more</h3></Link>
        </div>
    </div>
    );
}