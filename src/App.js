
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Pages/Home';
import Watchlist from './Pages/Watchlist';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
     <Header/>
     <Routes>
       
       <Route path='/' element={<Home/>}/>
      <Route path='/watchlist' element={<Watchlist/>}/>
       
     </Routes>
     <Footer/>
    </div>
  );
}

export default App;
