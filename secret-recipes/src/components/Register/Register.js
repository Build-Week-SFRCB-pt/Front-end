import React, { useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';

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
        //redirect to login page to login
        setValues({
          username: "",
          password: ""
        })
      })
      .catch(err => console.log(err))
  }

  return (
    <div>
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
    </div>
  )
}

export default Register
