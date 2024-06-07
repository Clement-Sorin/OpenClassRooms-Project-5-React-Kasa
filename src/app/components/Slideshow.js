import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
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
                <FontAwesomeIcon icon={faChevronLeft} className="arrow__back" onClick={handlePreviewClick} />
                <FontAwesomeIcon icon={faChevronRight}  className="arrow__forward" onClick={handleForwardClick} />
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