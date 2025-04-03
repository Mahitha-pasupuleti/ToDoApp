import { Routes, Route, Navigate } from "react-router-dom";
import SignUp from "./pages/Registration/SignUp.jsx";
import Login from "./pages/Registration/Login.jsx";
import Logout from "./pages/Registration/Logout.jsx";
import Navbar from "./pages/NavigationBeforeLogin/Navbar.jsx";
import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";
import Dashboard from "./pages/Tasks/Dashboard.jsx";
import "./App.css"

function App() {
  const showNavbar = location.pathname === "/signup" || location.pathname === "/login";
  return (
    <>
    <Routes>
      <Route path="/" element={<Navigate to="/signup" />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route element={<ProtectedRoutes />} >
        <Route path="/logout" element={<Logout />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
