import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <div className="text-center">
        <h1 className="display-1 fw-bold text-danger">404</h1>
        <p className="lead">
          Oops! The page you're looking for could not be found.
        </p>
        <p className="mb-4">
          It might have been removed, had its name changed, or is temporarily
          unavailable.
        </p>
        {/* If you are using React Router for navigation */}
        <Link to="/myapps" className="btn btn-primary">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
