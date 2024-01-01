import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Navbar } from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Login } from "./pages/Login";
import { CreateAcc } from "./pages/CreateAcc";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<><Navbar/><Header/><Hero/><Footer/></>}/>
          <Route path='/login' element={<><Login/><Footer/></>}/>
          <Route path='/sign-up' element={<><CreateAcc/><Footer/></>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
