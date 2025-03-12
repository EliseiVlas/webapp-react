const MovieCard = (props) => {
    const {id, title, director, abstract, image } = props.movieProp
    return (
    <div className="">
        <div className="card-review">
            <img className=""
                src={image}
                alt={title} />
            <div>
                <h1>{title}</h1>
                <h3 className="">
                    <i>
                    {director}
                    </i>
                </h3>
                <p>
                {abstract}
                </p>
            </div>
        </div>

    </div>
    )
}

export default MovieCard