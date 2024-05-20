import '../src/index.css';
import Landing from "../src/pages/Landing.jsx"
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import About from './pages/About.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Team from './pages/Team.jsx';
import Services from './pages/Services.jsx';
import Login from './pages/Login.jsx';
import Admin from './pages/Admin.jsx';
import EditUserInfo from './pages/EditUserInfo.jsx';
import UserPage from './pages/UserPage.jsx';
import Productspage from './pages/Productspage.jsx';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <div>
        <Routes>
          <Route path="/" exact element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/service" element={<Services />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/admin/page" element={<Admin />} />
          <Route path="/admin/page/user/:id" element={<EditUserInfo />} />
          <Route path="/team/:id" element={<UserPage />} />
          <Route path="/products" element={<Productspage />} />
        </Routes>
      </div>  
      <Footer />
    </BrowserRouter>
  );
}

export default App;
