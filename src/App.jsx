import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import HomeLayout from "./layout/homeLayout";
import Main from "./pages/main";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLayout/>}>
            <Route path="main" element={<Main/>}/>
        
        </Route>
        
      </Routes>
    </Router>
  );
}

export default App;
