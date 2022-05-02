import React, {useState, useEffect} from 'react'
import { Section } from '../components/section/Section';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const [loaded, setLoaded] = useState(false)
  
    const fetchData = async () => {
      const url = 'http://www.omdbapi.com/?s="star wars"&apikey=e0aa87ec&'
      const response = await fetch(url)
      const resJson = await response.json()
      setMovies(resJson.Search)
      setLoaded(true)
      console.log(movies)
    }
    useEffect(()=>{
      fetchData()
    },[])
  return (
    <div>{loaded?<Section dataArray={movies} header='Movie-Doo' />:"loading..."}</div>
  )
}
