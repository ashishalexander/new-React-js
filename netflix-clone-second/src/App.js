
import './App.css';
import Row from './components/Row'
import request from './request'
import Banner from './components/Banner'
import Nav from './components/Nav'

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row title ="NETFLIX ORIGINALS" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true}/>
      <Row title ="Trending Now"  fetchUrl={request.fetchTrending} />
      <Row title ="Top Rated"  fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
      <Row title="Romance" fetchUrl={request.fetchRomanceMovies} />

    </div>
  );
}

export default App;
