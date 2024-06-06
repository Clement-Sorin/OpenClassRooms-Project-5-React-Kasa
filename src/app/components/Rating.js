import starActive from "../../assets/star-active 3.png"
import starInactive from "../../assets/star-inactive 2.png"

function Rating({ rate }) {
    const stars = [];
  
    for (let i = 0; i < 5; i++) {
        stars.push(
        <img 
            key={i}
            src={i < rate ? starActive : starInactive} 
            alt={i < rate ? "Étoile pleine" : "Étoile vide"}
            className="container-stars__stars" 
        />
        );
    }

    return <div className="container-stars">{stars}</div>
}

export default Rating