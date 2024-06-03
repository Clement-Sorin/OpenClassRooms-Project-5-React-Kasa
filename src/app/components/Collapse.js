import "../../sass/components/Collapse.scss"
import arrow from "../../assets/arrow_back_ios-24px 2.png"

function Collapse({title, content}) {
    return <div>
        <div className="collapse-bar">
            <h2 className="collapse-bar__title">{title}</h2>
            <img className="collapse-bar__arrow" src={arrow} />
        </div>
        <div className="collapse-content">
            <p className="collapse-content__text">{content}</p>
        </div>
    </div>
}

export default Collapse