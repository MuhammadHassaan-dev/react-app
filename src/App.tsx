import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import Posts from "./Posts";
// import ProtectedRoute from "./ProtectedRoute";



import "./App.css";
import Login from "./Login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout />} />
        {/* <ProtectedRoute path="/posts" element={<Posts/>} auth={true}/> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
