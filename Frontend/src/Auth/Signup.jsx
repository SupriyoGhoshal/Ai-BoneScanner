function Signup() {
    return (
        <>
            <div className="container my-5" style={{width: "700px"}}>
                <div className="card shadow p-4">
                    <h3 className="text-center mb-4">Sign Up</h3>
                    <form>
                        {/* First Name & Last Name */}
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName" className="form-label">First Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="firstName"
                                    placeholder="Enter First Name"
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName" className="form-label">Last Name *</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="lastName"
                                    placeholder="Enter Last Name"
                                />
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
                            />
                        </div>

                        {/* Password */}
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password *</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                placeholder="Enter Password"
                            />
                        </div>

                        {/* Age */}
                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="age"
                                    placeholder="Enter Age"
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="age" className="form-label">Gender</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="age"
                                    placeholder="Enter gender"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="text-center">
                            <button type="submit" className="btn btn-primary px-5">Sign Up</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Signup;
