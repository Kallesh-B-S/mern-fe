import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import LandingPage from "./components/landing-page"
import Login from "./components/login-and-register-page/Login";
import Register from "./components/login-and-register-page/Register";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
