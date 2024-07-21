import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/landing-page"
import Login from "./components/login-and-register-page/Login";
import Register from "./components/login-and-register-page/Register";


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/mern-fe/" element={<LandingPage />} />
          <Route path="/mern-fe/login" element={<Login />} />
          <Route path="/mern-fe/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
