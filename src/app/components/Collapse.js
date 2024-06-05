import { useState } from "react"
import "../../sass/components/Collapse.scss"
import arrow from "../../assets/arrow_back_ios-24px 2.png"

function Collapse({title, content, classTitle, classContent}) {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    function toggleDropdown() {
        setDropdownOpen(!isDropdownOpen)
    }

    let collapseContentClass = "collapse-content"
    let collapseArrowClass = "collapse-bar__arrow"
    if (isDropdownOpen) {
        collapseContentClass = " collapse-content--open"
        collapseArrowClass += " collapse-bar__arrow--open"
    }

    return <div>
        <div className="collapse-bar" onClick={toggleDropdown}>
            <h2 className={`collapse-bar__title ${classTitle}`}>{title}</h2>
            <img 
                className= {collapseArrowClass}
                src={arrow} 
                alt="flèche pour ouvrir ou fermer le contenu du texte" 
            />
        </div>
        <div className={collapseContentClass}>
            <div className={`collapse-content__text ${classContent}`}>{content}</div>
        </div>
    </div>
}

export default Collapse