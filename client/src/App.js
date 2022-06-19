import Header from "./components/Header";
import Blogs from "./pages/Blogs";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './styles/main.scss'

function App() {
  return (
    <>
      <Header />
      <Blogs />
    </>
  );
}

export default App;
