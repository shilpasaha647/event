import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import "./Login.css";
import Navs from "../../layouts/Navs";

const LoginPage = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = credentials;
    axios
      .post("http://ec2-3-129-61-255.us-east-2.compute.amazonaws.com:8082/auth/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response.data);
        // Handle success response here
        localStorage.setItem("token", response.data.jwtToken);
        localStorage.setItem("email", response.data.username);
        // Redirect to the HomePage page
        navigate("/home");
      })
      .catch((error) => {
        console.error(error.response.data);
        // Handle error here
        //alert('Invalid login credentials');
        Swal.fire({
          position: "center",
          icon: "error",
          title: "Oops! Something went wrong!",
          text: "Invalid Login Credentials!",
          showConfirmButton: true,
          timer: 10000,
        });
      });
  };

  return (
    <>
    <Navs />
      <div className="contaoner-fluid">
        <div className="login-container">
          <div className="login-form">
            <form onSubmit={handleSubmit}>
              <h5 className="text-center" style={{ marginBottom: "20px" }}>
                Login Please!
              </h5>
              <div className="form-group">
                <input
                  type="text"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  value={credentials.email}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Enter Password"
                  value={credentials.password}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Continue
              </button>
              <div style={{ marginTop: 10 }}>
                <label htmlFor="register">
                  Don't have an account? <Link to="/register">Register</Link>
                </label>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
