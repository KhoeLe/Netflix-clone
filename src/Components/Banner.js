import React, {useState, useEffect} from 'react'
import axios from "../axios"
import requests from "../requests"
import "./Styles/Banner.css"

function Banner() {
    const [movie, setMovies] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests.fetchNetflixOriginals);
            setMovies(
                request.data.results[
                Math.floor(Math.random() * request.data.results.length -1 )
            ]
            )
            return request;
            // console.log('THIS REQUEST',request.data.results[
            //     Math.floor(Math.random() * request.results.length -1 )
            // ]);
            
        }
        fetchData();
    }, [])
    
    console.log(movie);
    function catngan(str, n) {
        return str?.length > n ? str.substr(0, n-1) + "....":str;
        //fun truncate
    }
    return (
        <header  className="banner"
        style={{
            backgroundSize: "cover",
            backgroundImage: `url(
                "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
            )`,
            backgroundPosition:"center center",
        }}
        >
            <div className="banner__contens">
                <h1 className="banner__title">{movie?.title || movie?.name || movie?.original_name}</h1>
                
                <div className="banner__buttons">
                    <button className="banner__button">Play</button>
                    <button className="banner__button">My List</button>
                </div>
                <h1 className="banner__description">
                    { catngan(movie?.overview, 149 ) }
                </h1>
            </div>
            <div className="banner--fadeBottom"></div>
        </header>
    )
}

export default Banner
