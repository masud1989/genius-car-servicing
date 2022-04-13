import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Footer from './pages/Footer/Footer';
import Header from './pages/Header/Header';
import ServiceDetails from './pages/Home/ServiceDetails/ServiceDetails';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route path="/home" element={<Home/>} ></Route>
          <Route path="/service/:serviceId" element={<ServiceDetails></ServiceDetails>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="*" element={<NotFound></NotFound>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
