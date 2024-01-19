import Nav from "./components/Nav"
import { Routes, Route } from 'react-router-dom';
import Home from "./pages/Home";
import Login from "./pages/login";
import About from "./pages/About";
import SignUp from "./pages/SignUp";

function App() {

  return (
    <>
      <Nav />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/About" element={<About />} />
          <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </>
  )
}

export default App
