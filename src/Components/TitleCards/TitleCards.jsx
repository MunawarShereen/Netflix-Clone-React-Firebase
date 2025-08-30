import React, { useEffect, useRef, useState } from 'react'
import './TitleCards.css'
import cards_data from '../../assets/cards/Cards_data.js'
import { Link } from 'react-router-dom';


const TitleCards = ({ title, categroy }) => {
  const cardsRef = useRef();
  const [apiData,setApiData] = useState([]);
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMjAyNzEyZmRiYTNlZDU0MmI0OGVlNDY0MjQ1ODhhZSIsIm5iZiI6MTc1NjQ4MDAzNy4wNTIsInN1YiI6IjY4YjFjMjI1MjVlMTAzYjg5ZjM5NzIzZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YDeKKD1T6UleG0ACLO9LTSrzQ0E8-KVT8UbSSmha61E'
    }
  };



  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${categroy}?language=en-US&page=1`, options)
      .then(res => res.json())
      .then(res => setApiData(res.results))
      .catch(err => console.error(err));
    cardsRef.current.addEventListener('wheel', handleWheel);
  }, [])

  return (
    <div className='titlecards'>

      <h1>{title}</h1>
      <div className='card-list' ref={cardsRef}>
        {
          apiData.map((card, index) => (
            <Link to={`/player/${card.id}`} className='card' key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt='' />
              <p>{card.original_title}</p>
            </Link>
          ))
        }
      </div>

    </div>
  )
}

export default TitleCards