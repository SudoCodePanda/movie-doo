import './App.css';
import { useEffect, useState } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/Home';

function App() {

  const [movies, setMovies] = useState([]);
  const [loaded, setLoaded] = useState(false)

  const fetchData = async () => {
    const url = 'http://www.omdbapi.com/?s="star wars"&apikey=e0aa87ec&'
    const response = await fetch(url)
    const resJson = await response.json()
    setMovies(resJson.Search)
    setLoaded(true)
  }
  useEffect(()=>{
    fetchData()
  },[])

  return (
    <div>
    <Navbar />
    <Home />
  </div>
  );
}

export default App;
