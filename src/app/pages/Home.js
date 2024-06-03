import backgound_img from '../../assets/coast-background.webp'
import accomodations from "../../datas/accomodations.json"
import Thumb from '../components/Thumbs';
import '../../sass/pages/Home.scss'

function Home() {
  return (
    <main className="main">
      <section className="section1">
        <img src={backgound_img} className='section1__background' alt="fond pour le titre de la page représentant une côte maritime" />
        <h1 className="section1__title">Chez vous, partout et ailleurs</h1>
      </section>
      <section className="gallery">
        {accomodations.map(({title, pictures, id}) =>
          <Thumb 
            title={title}
            pictures={pictures}
            id={id}
            />
        )}
      </section>
    </main>
  );
}

export default Home;
