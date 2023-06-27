import React from "react";

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
        </form>
      </div>
    </div>
  );
}
