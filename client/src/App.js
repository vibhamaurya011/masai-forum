import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Feeds from './pages/Feeds';
import FeedsDetails from './pages/FeedsDetails';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className='px-10 py-4 bg-gray-600'>
      <Header/>
      <Routes>
        <Route path="/" element={<Feeds/>}/>
        <Route path="/feeds" element={<Feeds/>}/>
        <Route path="/feeds/:id" element={<FeedsDetails/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
