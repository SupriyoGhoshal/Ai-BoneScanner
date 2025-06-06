import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [password, setPassword] = useState("");
  const [passerr, setPasserr] = useState("");

  const navigate = useNavigate();

  const validEmail = (value) => {
    setEmail(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    setEmailErr(!emailRegex.test(value) ? "Invalid email. Use @gmail.com" : "");
  };

  const validPassword = (value) => {
    setPassword(value);
    setPasserr(value.length < 8 ? "Please enter at least 8 characters" : "");
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (emailErr || passerr) {
      alert("Please enter valid info.");
      return;
    }

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5800/api/login", {
        email,
        password,
      });

      alert("Login successful!");
      console.log("✅ Login response:", res.data);
      navigate("/"); // Navigate to homepage or dashboard
    } catch (err) {
      console.error("❌ Login failed:", err.response?.data || err.message);
      alert("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="login container my-5" style={{ maxWidth: "500px" }}>
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Login Here</h3>
        <form onSubmit={handleLogin}>
          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email *</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => validEmail(e.target.value)}
            />
            {emailErr && <p style={{ color: "red" }}>{emailErr}</p>}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password *</label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => validPassword(e.target.value)}
            />
            {passerr && <p style={{ color: "red" }}>{passerr}</p>}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5">Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
