import React, { useState, useEffect } from "react";
import {Link} from 'react-router-dom'
import axios from 'axios';
import "../styles/Signin.scss";

const SignUp = props => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState(false);

    useEffect(() => {
        const userToken = window.localStorage.getItem('userToken');
        if(userToken) {
            props.history.push('/dashboard')
        }
    },[])
    const handleName = e => {
        setName(e.target.value)
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        const user = {
            name,
            email,
            password
        }
        axios.post('/user/signup', user)
            .then((res) => {
                window.localStorage.setItem('userToken', res.data.token)
                window.localStorage.setItem('userName', res.data.user.name)
                props.history.push('/dashboard');
            }).catch((err) => {
                setErr(true)
            })
    }
  return (
    <div>
      <div className="bg">
        <div className="signin_container">
          <div
            className="card"
            style={{ width: "30rem", marginRight: 10, marginLeft: 10 }}
          >
            <div className="card-header">Sign Up</div>
            <div className="card-body">
              {err && <div style={{ color: "red" }}>Credentials did not match</div>}
              <form onSubmit={handleSubmit} action="">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputText1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                    value={name}
                    onChange={handleName}
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    value={email}
                    onChange={handleEmail}
                    required
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your emclassNameail with anyone else.
                  </small>
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputPassword1">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    value={password}
                    onChange={handlePassword}
                    required
                  />
                </div>
                <div>already have account, Click <Link to='/signin'>Here </Link>to Sign in</div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SignUp;
