import React, { useState,useEffect } from 'react';
import requests from '../api/requests';
import axios from 'axios';


const Banner = () => {
    const [movie,setmovie] = useState([]);

    const fetchdata = async () => {
        const request = await axios.get(requests.fetchNowPlaying);

        const movieid = request.data.results[Math.floor(Math.random() * request.data.results.length)].id;

        const { data: movieDetail } = await axios.get(`movie/${movieid}`,{
            params: { append_to_response: "videos" }
        });

        setmovie(movieDetail);

    }

    useEffect(()=>{fetchdata();})

    return (
       <header className="banner" style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie.backdroppath}')`,
                                          backgroundPosition: "top center",
                                          backgroundSize: "cover"}}>
           <div id="bannercontents">
                <h1 className="ban_tit">{movie.title || movie.name || movie.original_name}</h1>
                <div className="ban_btn"><button>{}</button></div>
           </div>                                     
       </header>
    );
};

export default Banner;