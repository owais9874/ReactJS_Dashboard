import "./App.css";
import { Navbar, Sidebar } from "./Components";
import { LoginForm, SignUp } from "./Components/AllForm";
import MainPage from "./Pages/Main/MainPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="demos/react_js/Dashboard-owais" element={<MainPage />} />
        <Route path="/demos/react_js/Dashboard-owais" element={<MainPage />} />
        <Route path="/demos/react_js/Dashboard-owais/login" element={<LoginForm />} />
        <Route path="/demos/react_js/Dashboard-owais/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
