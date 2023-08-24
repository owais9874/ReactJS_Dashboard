import "./App.css";
import { Navbar, Sidebar, UserProfile } from "./Components";
import { LoginForm, SignUp } from "./Components/AllForm";
import MainPage from "./Pages/Main/MainPage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/myProfile" element={<UserProfile />} />
      </Routes>
    </Router>
  );
}

export default App;
