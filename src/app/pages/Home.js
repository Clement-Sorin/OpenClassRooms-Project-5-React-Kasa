import backgound_img from '../../assets/coast-background.webp'
import '../../sass/pages/Home.scss'

function Home() {
  return (
    <main className="main">
      <div className="section1">
        <img src={backgound_img} className='section1__background' />
        <h1 className="section1__title">Chez vous, partout et ailleurs</h1>
      </div>
    </main>
  );
}

export default Home;
