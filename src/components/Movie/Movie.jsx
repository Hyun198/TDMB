import React, { useState, useRef } from 'react'
import { useEffect } from 'react'
import './movie.css'

function Movie() {

    const [movieList, setMoiveList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const inputRef = useRef(null);

    const fetchData = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=86df90b295448ab242f77216635cf4c1&language=ko-KR&page=1')
        const movieData = await response.json();
        const movies = movieData.results;

        const genreResponse = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=86df90b295448ab242f77216635cf4c1&language=ko-KR')
        const genreData = await genreResponse.json();
        const genres = genreData.genres;

        const genreMap = {};
        genres.forEach(genre => {
            genreMap[genre.id] = genre.name;
        });
        const moviesWithGenres = movies.map(movie => ({
            ...movie,
            genre_names: movie.genre_ids.map(genreId => genreMap[genreId])
        }));

        setMoiveList(moviesWithGenres);

    }



    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % movieList.length);
    }

    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex - 1 + movieList.length) % movieList.length);
    }





    useEffect(() => {
        fetchData()
    }, []);





    return (
        <>
            <div className="slider">
                <div className="list">
                    {movieList.map((movie, index) => (
                        <div className={`item ${index === activeIndex ? 'active' : ''}`} key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                            <div className="content">
                                <p> {movie.genre_names.join(', ')}</p>
                                <h2>{movie.title}</h2>
                                <p>{movie.overview}</p>
                                <p>{movie.release_date}</p>
                                <button><i class="fa-brands fa-youtube"></i></button>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='arrows'>
                    <button id="prev" onClick={handlePrev}><i class="fa-solid fa-caret-left"></i></button>
                    <button id="next" onClick={handleNext}><i class="fa-solid fa-caret-right"></i></button>
                </div>

                <div className="thumbnail">
                    {movieList.map((movie, index) => (
                        <div className={`item ${index === activeIndex ? 'active' : ''}`} key={movie.id}>
                            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
                            <div className="content">
                                {movie.title}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </>

    )
}

export default Movie