import React, {useState,useEffect} from 'react'
import axios from "../axios"
import './Styles/Row.css'
import YouTube from 'react-youtube';
import movieTrailer from "movie-trailer"


const base_url = "https://image.tmdb.org/t/p/original/"
function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl) 
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);
    // console.log('THIS',movies);
    // console.table(movies);
    
    //if [], thi run row khi loads, hoac nguoc lai
    const  _onReady = (e) => {
        // access to player in all event handlers via event.target
        e.target.pauseVideo();
    }
    const opts ={
        height: "390",
        width: "100%",
        playerVars:{
             // https://developers.google.com/youtube/player_parameters
            autoplay: 1 ,
        },
    };
    const handleClick = (newMovie) => {
        if(trailerUrl){
            setTrailerUrl("Null");
        }else{
            movieTrailer(newMovie?.name || "")
            .then((url) => {
                // https://www.youtube.com/watch?v=XtMThy8QKqU&t=4376s
                const urlParmas = new URLSearchParams(new URL(url).search);
                setTrailerUrl(urlParmas.get('v')) ;
                console.log('URL Youtube',url)
            })
            .catch((error) => console.log(error));
        }
    }
    console.log('this trailer',trailerUrl );
    return (
        <div className="row">
            <h3>{title}</h3>
            {/* container --> fosters */}

            <div className="row__posters">
                {movies.map(newMovie  =>
                    <img 
                        key={newMovie.id}
                        onClick={() => handleClick(newMovie)}
                        className={`row__poster ${isLargeRow && "row__posterLarge"} `}
                        src={`${base_url}${
                            isLargeRow ? newMovie.poster_path : newMovie.backdrop_path
                            }`} 
                        alt={newMovie.name}
                        />
                )}
            </div>
            {trailerUrl &&  <YouTube videoID={trailerUrl} opts={opts} onReady={_onReady}/> }
                

        </div>
    )
}

export default Row
