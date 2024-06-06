import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";

function Rating({ rate }) {
    const stars = [];
  
    for (let i = 0; i < 5; i++) {
        stars.push(
        <FontAwesomeIcon
            key={i}
            icon={faStar}
            className={i < rate ? "container-stars__stars--orange" : "container-stars__stars--grey" }
        />
        );
    }

    return <div className="container-stars">{stars}</div>
}

export default Rating