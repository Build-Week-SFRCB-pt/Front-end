import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

const Login = props => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  })

  const handleChange = e => {
    return setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    axiosWithAuth()
      .post('/auth/login', values)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        //redirect to recipe page when you login
        setValues({
          username: "",
          password: ""
        })
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Welcome Back!</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          name="username"
          onChange={handleChange}
          value={values.username}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={values.password}
        />
        <button type="submit">Login!</button>
      </form>
    </div>
  )
}

export default Login
