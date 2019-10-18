import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { Link } from 'react-router-dom';

const Register = props => {
  const [values, setValues] = useState({
    username: "",
    password: ""
  })

  const handleChange = e => {
    return setValues({ ...values, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newUser = {
      username: values.username,
      password: values.password
    }
    axiosWithAuth()
      .post('/auth/register', newUser)
      .then(res => {
        console.log(res)
        localStorage.setItem('token', res.data.token)
        props.history.push('/login')
        setValues({
          username: "",
          password: ""
        })
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
      <h1>Register!</h1>
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
        <button type="submit">Register!</button>
      </form>
      <Link to="login"><p>Already have an account? Login!</p></Link>
    </div>
  )
}

export default Register
