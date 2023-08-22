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
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
