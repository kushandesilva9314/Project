import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Login from './Pages/login';
import Home from './Pages/home';
import Admin from './Pages/admin';
import First from './Pages/start';
import U_Reg from './Pages/u_reg';
import C_Reg from './Pages/c_reg';
import I_Admin from './Pages/a_inv';
import CPY_Admin from './Pages/a_company';
import ChatBot from './Pages/chatbot';
import CON_Admin from './Pages/a_content';
import About from './Pages/about';
import News from './Pages/news';
import Profile from './Pages/profile';
import Company from './Pages/company';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/start" element={<First />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/user-registration" element={<U_Reg />} />
          <Route path="/company-registration" element={<C_Reg />} />
          <Route path="/investor-admin" element={<I_Admin />} />
          <Route path="/company-admin" element={<CPY_Admin />} />
          <Route path="/chatbot" element={<ChatBot />} />
          <Route path="/content-admin" element={<CON_Admin />} />
          <Route path="/about" element={<About />} />
          <Route path="/news" element={<News />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/company" element={<Company />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
