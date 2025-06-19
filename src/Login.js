import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login({ updateUserDetails }) {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let isValid = true;
    let newErrors = {};

    if (formData.username.trim() === '') {
      isValid = false;
      newErrors.username = "Username is mandatory";
    }

    if (formData.password.trim() === '') {
      isValid = false;
      newErrors.password = "Password is mandatory";
    }

    setErrors(newErrors);
    return isValid;
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validate()) {
      if (formData.username === 'admin' && formData.password === 'admin') {
        updateUserDetails({
			name: 'John Cena',
			email: 'john.cena@example.com'

		});
		navigate('/dashboard');
      } else {
        setMessage('❌ Invalid Credentials');
      }
    }
  };

  return (
    <div className="container text-center mt-4">
      <h1>Login Page</h1>
      {message && <p><strong>{message}</strong></p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Username:</label><br />
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
          {errors.username && <div style={{ color: "red" }}>{errors.username}</div>}
        </div>

        <div className="mb-3">
          <label>Password:</label><br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <div style={{ color: "red" }}>{errors.password}</div>}
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
