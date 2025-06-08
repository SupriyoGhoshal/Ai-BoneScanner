import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Signup() {
  const [firstname, setFirstName] = useState("");
  const [firstnameErr, setFirstNameErr] = useState("");

  const [lastname, setLastName] = useState("");
  const [lastnameErr, setLastNameErr] = useState("");

  const [email, setEmail] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const [password, setPassword] = useState("");
  const [passerr, setPassErr] = useState("");

  const [age, setAge] = useState("");
  const [ageerr, setAgeerr] = useState("");

  const [gender, setGender] = useState("");
  const [genderErr, setGenderErr] = useState("");

  // Validation functions
  const validName = (value) => {
    setFirstName(value);
    const nameRegex = /^[A-Za-z]+$/;
    setFirstNameErr(!nameRegex.test(value) ? "Please enter a valid name" : "");
  };

  const validLastName = (value) => {
    setLastName(value);
    const nameRegex = /^[A-Za-z]+$/;
    setLastNameErr(!nameRegex.test(value) ? "Please enter a valid name" : "");
  };

  const validEmail = (value) => {
    setEmail(value);
    const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    setEmailErr(!gmailRegex.test(value) ? "Invalid email. Please use @gmail.com" : "");
  };

  const validPassword = (value) => {
    setPassword(value);
    setPassErr(value.length < 8 ? "Please enter at least 8 characters!" : "");
  };

  const validAge = (value) => {
    setAge(value);
    setAgeerr(value <= 0 ? "Age must be a positive number" : "");
  };

  const validGender = (value) => {
    setGender(value);
    const genderRegex = /^(male|female|other)$/i;
    setGenderErr(!genderRegex.test(value) ? "Gender must be Male, Female, or Other" : "");
  };

  const navigate = useNavigate();
  // Form submit
  const handleSignup = async (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password || !age || !gender) {
      alert("Please fill in all the fields.");
      return;
    }

    if (firstnameErr || lastnameErr || emailErr || passerr || ageerr || genderErr) {
      alert("Please correct validation errors before submitting.");
      return;
    }

    try {
      const res = await axios.post("http://localhost:5800/api/register", {
        firstname,
        lastname,
        email,
        password,
        age,
        gender,
      });

      alert("Registration Successful!");
      console.log("✅ Registration Successful:", res.data);

      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setAge("");
      setGender("");

      navigate("/login");
    } catch (err) {
      console.error("❌ Registration failed:", err.response?.data || err.message);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="container my-5" style={{ width: "700px" }}>
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">Sign Up</h3>
        <form onSubmit={handleSignup}>
          {/* First and Last Name */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="firstName" className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                placeholder="Enter First Name"
                value={firstname}
                onChange={(e) => validName(e.target.value)}
              />
              {firstnameErr && <p style={{ color: "red" }}>{firstnameErr}</p>}
            </div>
            <div className="col-md-6">
              <label htmlFor="lastName" className="form-label">Last Name *</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                placeholder="Enter Last Name"
                value={lastname}
                onChange={(e) => validLastName(e.target.value)}
              />
              {lastnameErr && <p style={{ color: "red" }}>{lastnameErr}</p>}
            </div>
          </div>

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

          {/* Age and Gender */}
          <div className="row mb-3">
            <div className="col-md-6">
              <label htmlFor="age" className="form-label">Age</label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="Enter Age"
                value={age}
                onChange={(e) => validAge(e.target.value)}
              />
              {ageerr && <p style={{ color: "red" }}>{ageerr}</p>}
            </div>
            <div className="col-md-6">
              <label htmlFor="gender" className="form-label">Gender</label>
              <select
                className="form-control"
                id="gender"
                value={gender}
                onChange={(e) => validGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {genderErr && <p style={{ color: "red" }}>{genderErr}</p>}
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button type="submit" className="btn btn-primary px-5">Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
