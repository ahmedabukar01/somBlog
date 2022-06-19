import Header from "./components/Header";
import Blogs from "./pages/Blogs";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/main.scss'
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
    <Router>
      <>
        <Header />
        <Routes>
          <Route path="/"  element={
          <>
            <Blogs />
          </>
        }/>
          <Route path="/register" element={<Register />}/>
          <Route path={'/login'} element={<Login />}/>
        </Routes>
      </>
    </Router>
    
  );
}

export default App;
