import './App.css';
import './style/style.css';
import Navbar from './components/navbar';
import Home from './pages/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Browse from './components/browse';
import Library from './components/library/library';
import Favourites from './components/favourites';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className='App'>
          <div className='App-nav'>
            <Navbar />
          </div>
          <div className='App-routes'>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/browse' element={<Browse />} />
              <Route path='/favourites' element={<Favourites />} />
              <Route path='/library' element={<Library />} />
            </Routes>
          </div>

        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
