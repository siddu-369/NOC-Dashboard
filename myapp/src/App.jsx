import "./App.css";
import Nav from "./components/Nav";

import { Routes, Route, useLocation } from "react-router-dom";
import ConditionGenerator from "./components/ConditionGenerator";
import Login from "./components/LoginPage";
import ProtectedRoute from "./components/ProtecedRoute";

import CardsGallery from "./components/CardsNew";
import Todo from "./components/Todos";

import About from "./components/About";
import NotFound from "./components/NotFound";
import Notes from "./components/Notes";

function App() {
  const location = useLocation();
  const isAuthenticated = localStorage.getItem("isAuthenticated"); // Check if user is logged in
  const hideNavbar = location.pathname === "/login" && !isAuthenticated; // Hides Navbar on Login Page if not logged in
  return (
    <>
      {!hideNavbar && <Nav />} {/* Show Navbar only after login */}
      <Routes>
        <Route
          path="/conditionGenerator"
          element={
            <ProtectedRoute>
              <ConditionGenerator />
            </ProtectedRoute>
          }
        />

        <Route
          path="/myapps"
          element={
            <ProtectedRoute>
              <CardsGallery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <CardsGallery />
            </ProtectedRoute>
          }
        />
        <Route
          path="/todos"
          element={
            <ProtectedRoute>
              <Todo />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/notes" element={<Notes />} />
      </Routes>
    </>
  );
}

export default App;
