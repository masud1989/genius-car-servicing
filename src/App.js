import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/service/:serviceId" element={<ServiceDetails></ServiceDetails>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
