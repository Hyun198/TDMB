import React, { useState } from 'react'
import { useEffect } from 'react'

function Movie() {

    const [movieList, setMoiveList] = useState([]);


    const getMovie = () => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=86df90b295448ab242f77216635cf4c1&language=ko-KR')


            .then(res => res.json())
            .then(json => setMoiveList(json.results))
    }
    useEffect(() => {
        getMovie()
    }, [])

    console.log(movieList);

    return (
        <div>
            {movieList.map((movie) => (
                <img style={{ width: "300px", height: "280px", marginLeft: "10px", marginTop: "10px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />


            ))}
        </div>
    )
}

export default Movie