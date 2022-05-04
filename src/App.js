import './App.css';
import { Navbar } from './components/navbar/Navbar';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
//Routing
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    <Navbar />
    
  </div>
  );
}

export default App;
