import React from "react";
import { Link } from "react-router-dom";

export default function Register() {
  return (
    <div>
      {" "}
      <div className="login">
        <h2>Register Form </h2>
        <form>
          <div className="form-group">
            <label>Name</label>
            <br />
            <input type="text" className="form-control" />
          </div>
          <div className="form-group">
            <label>email</label> <br />
            <input type="email" className="form-control" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" className="form-control" />
          </div>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
          <p>
            Already Registred ?<Link to="/login"> Signin</Link>
          </p>
        </form>
      </div>
    </div>
  );
}
