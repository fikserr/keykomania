import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from "./pages/main";
import Portfolio from './pages/portfolio';
import SignUp from './pages/signUp';
import Services from './pages/services';
import HomeLayout from './layout/homeLayout';
import Courses from './pages/courses';
import Reviews from './pages/reviews';
import Login from './pages/login';
import Deatil from './pages/deatil';
import Billing from './pages/billing';
import Stream from './pages/stream';
import AdminStream from './pages/adminStream';

function App() {
  return (
    <BrowserRouter future={{ v7_relativeSplatPaths: true }}> {/* Flag to'g'ri joyda */}
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Main />} /> 
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="courses" element={<Courses />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="billing" element={<Billing/>} />
          <Route path="detail/:id" element={<Deatil />} />
        </Route>
        <Route path="stream" element={<Stream/>} />
        <Route path="signUp" element={<SignUp />} />
        <Route path="login" element={<Login />} />
        <Route path="adminStream" element={<AdminStream/>} />
       
      </Routes>
    </BrowserRouter>
  );
}

export default App;
