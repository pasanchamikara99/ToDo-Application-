import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <div className="login">
        <h2>Login Form </h2>
        <form>
          <div className="form-group">
            <label>Username</label>
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">
            Login
          </button>
          <p>
            Don't have an account ?<Link to="/signin"> Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
