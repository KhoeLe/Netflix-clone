import React from 'react';
import './App.css';
import Row from "./Components/Row"
import Banner from "./Components/Banner"
import Navbar from "./Components/Navbar"
import requests from './requests'
function App() {
  
  return (
    <div className="APP">
                   {/* this nabar */}
      <Navbar />
      <Banner />

                   {/*This banner  */}
      <Row title="NETFLIX ORIGINALS" 
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow={true}
        />
      <Row title="Trending NOW" 
        fetchUrl={requests.fetchTrending}
        />
      <Row title="Top Rated" 
        fetchUrl={requests.fetchTopRated}
        />
      <Row title="Action Movies" 
        fetchUrl={requests.fetchActionMovies}
        />
      <Row title="Comedy Movies" 
        fetchUrl={requests.fetchComedyMovies}
        />
      <Row title="Horror Movies" 
        fetchUrl={requests.fetchHorrorMovies}
        />
      <Row title="Romance Movies" 
        fetchUrl={requests.fetchRomanceMovies}
        />
      <Row title="Documentaries" 
        fetchUrl={requests.fetchDocumentaries}
        />

    </div>
  );
}

export default App;
