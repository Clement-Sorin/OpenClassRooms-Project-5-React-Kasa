import { useState } from "react"
import arrow from "../../assets/arrow_back_ios-24px 2.png"

function Collapse({title, content}) {
    const [isDropdownOpen, setDropdownOpen] = useState(false)
    function toggleDropdown() {
        setDropdownOpen(!isDropdownOpen)
    }

    let collapseContentClass = "collapse-content"
    let collapseArrowClass = "collapse-bar__arrow"
    if (isDropdownOpen) {
        collapseContentClass += " is-open"
        collapseArrowClass += " collapse-bar__arrow--open"
    }

    return <>
        <div className="collapse-bar" onClick={toggleDropdown}>
            <h2 className={`collapse-bar__title`}>{title}</h2>
            <img 
                className= {collapseArrowClass}
                src={arrow} 
                alt="flèche pour ouvrir ou fermer le contenu du texte" 
            />
        </div>
        <div className={collapseContentClass}>
            <p className={`collapse-content__text`}>{content}</p>
        </div>
    </>
}

export default Collapse