import axios from 'axios';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navs from '../../layouts/Navs';
import './Register.css';

function Register() {

  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post('http://ec2-3-129-61-255.us-east-2.compute.amazonaws.com:8082/auth/register', user)
      .then((response) => {
        console.log(response.data);
        // alert("LoginId created");
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Great!',
          text: 'You have been registered successfully!',
          showConfirmButton: true,
          timer: 10000
        })
        // Handle success response here
        navigate('/');

      })
      .catch((error) => {
        console.error(error.response.data);
        // Handle error here
        // alert("Login ID is already taken");
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Oops! Something went wrong!',
          text: 'This email already registered!',
          showConfirmButton: true,
          timer: 10000
        })
      });
  };
  return (
    <>
    <Navs />
    <div class="header">
        <h1 class="display-5">Hurry! Register now. Seats filling up fast!</h1>
        </div>
    <div>
    <div className='register-container' style={{marginLeft:400,marginTop:30}}>
      <div className='register-form'>
      <h5 className='text-center' style={{ marginButton: "40px" }}>Registration Form</h5>
      <form className="user-registration-form" onSubmit={handleSubmit}>
        <div className='row'>
          <div className='col-sm'>
            <div className="form-group">
              {/* <label htmlFor="firstName" style={{ fontWeight: "normal" }}>First Name</label> */}
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                placeholder='Enter First Name'
                value={user.firstName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <div className='col-sm'>
            <div className="form-group">
              {/* <label htmlFor="LastName" style={{ fontWeight: "normal" }}>Last Name</label> */}
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                placeholder='Enter Last Name'
                value={user.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-sm'>
            <div className="form-group">
              {/* <label htmlFor="email" style={{ fontWeight: "normal" }}>Email</label> */}
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder='Enter Email Address'
                value={user.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>
        <div className="form-group">
          {/* <label htmlFor="password" style={{ fontWeight: "normal" }}>Password</label> */}
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            placeholder='Enter Password'
            value={user.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Register</button>
        <label htmlFor="login">Already account?  <Link to="/">Login</Link></label>
      </form>
      </div>
      </div>
      </div>
    </>
  );
}

export default Register;