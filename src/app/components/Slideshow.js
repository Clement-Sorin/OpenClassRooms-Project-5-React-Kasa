import "../../sass/components/Slideshow.scss"
import arrowBack from "../../assets/arrow_back_ios-24px 1.png"
import arrowForward from "../../assets/arrow_forward_ios-24px 1.png"

function Slideshow({pictures}) {
    const length = pictures.length
    let index = 1

    return <div className="slideshow">
        {length > 1 ? (
            <>
            <div className="arrow" >
                <img src={arrowBack} className="arrow__back" />
                <img src={arrowForward} className="arrow__forward" />
            </div>
            <div className="picture-count" >
                <span className="picture-count__text" >{index}/{length}</span>
            </div>
            </>
        ) : null}
    </div>
}

export default Slideshow