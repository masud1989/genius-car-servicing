import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home/>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
