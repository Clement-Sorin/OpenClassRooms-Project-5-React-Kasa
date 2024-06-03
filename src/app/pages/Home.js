import accomodations from "../../datas/accomodations.json"
import Banner from "../components/Banner";
import Card from '../components/Card';
import '../../sass/pages/Home.scss'

function Home() {
  return (
    <main className="main">
      <Banner />
      <section className="gallery">
        {accomodations.map(({title, pictures, id}) =>
          <Card 
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