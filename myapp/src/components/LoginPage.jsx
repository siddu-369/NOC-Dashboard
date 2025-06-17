import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import WMLogo from "../assets/WM_Logo.png";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   if (userId === "NOC" && password === "SysCode") {
  //     localStorage.setItem("isAuthenticated", true);
  //     navigate("/myapps");
  //   } else {
  //     setError("Invalid credentials. Please try again.");
  //   }
  // };
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(""); // Clear previous errors
    try {
      const response = await fetch("https://noc-dashboard-test.onrender.com/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, password }),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem("isAuthenticated", "true");
        navigate("/myapps");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundColor: '#f8f9fa', // Or any desired background color
        backgroundImage: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)', // Optional: add a gradient
      }}
    >
      {/* Removed original container classes for centering */}
      <div className="row justify-content-center w-100"> {/* Added w-100 to the row */}

        <div className="col-md-4">
          <div className="card p-4 shadow">
            <div>
              <img src={WMLogo} alt="WMLogo" />
            </div>
            <h2 className="text-center mb-3">Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleLogin}>
              <div className="mb-3">
                <label className="form-label">User ID</label>
                <input
                  type="text"
                  className="form-control"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary w-100"
                disabled={loading}
              >
                {loading ? (
                  <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                ) : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
