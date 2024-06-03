import "../../sass/components/Thumbs.scss"

function Thumb({title, pictures, id}) {
    return <>
            <a href={`/fiche-logement/${id}`} className="thumb" aria-label={`fiche du logement ${title}`}>
                <img className="thumb__image" src={pictures[0]} alt={`aperçu de ${title}`} />
                <h3 className="thumb__title">{title}</h3>
            </a>
        </>
}

export default Thumb