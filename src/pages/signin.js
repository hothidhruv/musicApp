import React, { useState } from "react";
import Link from "next/link";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.length < 1 || password.length < 1) {
      setError(true);
    } else {
      //do api hits and try logins
      setIsLoading(true);
      const response = await fetch(
        "https://academics.newtonschool.co/api/v1/user/login",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            projectID: "l8xp41a6r6rq",
          },
          body: JSON.stringify({ email, password }),
        }
      );
      const json = await response.json();
      setIsLoading(false);
      console.log(json);
    }
  };
  return (
    <>
      <div>
        <h2>Login</h2>
        {error && (
          <p className="error-msg">email and password is not correct</p>
        )}
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="email-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              autoComplete="off"
            />
          </div>
          <div className="password-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePassChange}
              autoComplete="off"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        <div className="signup-signin-toggle">
          Don't have an Account ?
          <Link href="/signup">
            <button>Click Here</button>
          </Link>
        </div>
      </div>
    </>
  );
}
