import arrowBack from "../../assets/arrow_back_ios-24px 1.png"
import arrowForward from "../../assets/arrow_forward_ios-24px 1.png"
import { useState } from "react"

function Slideshow({pictures, title}) {
    const length = pictures.length
    const [currentIndex, setCurrentIndex] = useState(0)

    function handlePreviewClick() {
        const newIndex = (currentIndex - 1 + length) % length;
        setCurrentIndex(newIndex);
    }

    function handleForwardClick() {
        const newIndex = (currentIndex + 1 + length) % length;
        setCurrentIndex(newIndex);
    }

    return <div className="slideshow">
        {length > 1 ? (
            <>
            <div className="arrow" >
                <img src={arrowBack} className="arrow__back" onClick={handlePreviewClick} alt="flèche précédente" />
                <img src={arrowForward} className="arrow__forward" onClick={handleForwardClick} alt="flèche suivante" />
            </div>
            <div className="picture-count" >
                <span className="picture-count__text" >{currentIndex +1 }/{length}</span>
            </div>
            </>
        ) : null}
        <img className="slideshow__picture" src={pictures[currentIndex]} alt={`aperçu de ${title} numéro ${currentIndex +1}`} />
    </div>
}

export default Slideshow