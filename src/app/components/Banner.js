import backgound_img from '../../assets/coast-background.webp'
import "../../sass/components/Banner.scss"

function Banner() {
    return <section className="banner">
        <img 
            src={backgound_img} 
            className='banner__background' 
            alt="fond pour le titre de la page représentant une côte maritime" 
        />
        <h1 
            className="banner__title">
            Chez vous, partout et ailleurs
        </h1>
    </section>
}

export default Banner