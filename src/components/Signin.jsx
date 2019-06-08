import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom'
import axios from 'axios';
import "../styles/Signin.scss";

const Signin = props => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [err, setErr] = useState(false);

  useEffect(() => {
    const userToken = window.localStorage.getItem('userToken');
    if(userToken) {
        props.history.push('/dashboard')
    }
},[])
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }
  const handlePassword = e => {
    setPassword(e.target.value);
  }
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      email,
      password
    }
    axios.post('/user/login', user)
      .then((res) => {
        window.localStorage.setItem('userToken', res.data.token.token)
        window.localStorage.setItem('userName', res.data.user.name)
        props.history.push('/dashboard');
        // console.log(res.data)
      }).catch((err) => {
        setErr(true)
      })
  }
  return (
    <div>
      <div className="bg">
        <div className="signin_container">
          <div className="card" style={{ width: "30rem", marginRight:10,marginLeft:10}}>
            <div className="card-header">Sign In</div>
            <div className="card-body">
              {err && <div style={{color:'red'}}>Credentials did not match</div>}
              <form onSubmit={handleSubmit} action="">
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
                  />
                  <small id="emailHelp" className="form-text text-muted">
                    We'll never share your email with anyone else.
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
                  />
                </div> 
                <div>dont have account, Click <Link to='/signup'>Here</Link> to Sign up</div> 
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
export default Signin;
