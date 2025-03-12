import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const ReviewCard = (props) => {
    const { name, vote, text } = props.reviewProp
    return (
        <div className="review">
            <div className="">
                <p className="">
                {text}
                </p>
                <strong>
                Vote: 
                <span>
                    {vote >= 1 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                    {vote >= 2 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                    {vote >= 3 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                    {vote >= 4 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                    {vote >= 5 ? <FontAwesomeIcon className="star" icon={faStar} /> : <FontAwesomeIcon className="star2" icon={faStar} />}
                </span>
                </strong>
                <address>
                    <i>
                    by {name}
                    </i>
                </address>
            </div>
        </div>
    )
}

export default ReviewCard