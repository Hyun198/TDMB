import React, { useState } from 'react'
import { useEffect } from 'react'

function Movie() {

    const [movieList, setMoiveList] = useState([]);

    const fetchData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=86df90b295448ab242f77216635cf4c1&language=ko-KR')
        const data = await response.json();
        setMoiveList(data.results);

    }

    useEffect(() => {
        fetchData()
    }, []);




    return (
        <div>
            <h1>Popular Movies</h1>
            {movieList.map((movie, idx) => (
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            ))}

        </div>
    )
}

export default Movie