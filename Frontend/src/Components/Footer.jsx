function Footer() {
    return (
        <>
            <footer style={{
                background: "linear-gradient(to right, #e0eafc, #cfdef3)",
                color: "#333"
            }} className="py-4 mt-5">
                <div className="container">
                    <div className="row text-center text-md-start">

                        {/* Creator Section */}
                        <div className="col-md-4 mb-4">
                            <h5 className="text-uppercase mb-3 fw-bold text-primary">Creators</h5>
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid&w=740"
                                    alt="Supriyo"
                                    className="rounded-circle me-2"
                                    width="40"
                                    height="40"
                                />
                                <span className="fw-medium">Supriya Ghoshal</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740"
                                    alt="Asmi"
                                    className="rounded-circle me-2"
                                    width="40"
                                    height="40"
                                />
                                <span className="fw-medium">Asmi Verma</span>
                            </div>
                        </div>

                        {/* Navigation Section */}
                        <div className="col-md-4 mb-4">
                            <h5 className="text-uppercase mb-3 fw-bold text-primary">Navigation</h5>
                            <ul className="list-unstyled ">
                                {["Home", "About", "Scan", "Summary", "Contact Us"].map((item, index) => (
                                    <li key={index}>
                                        <a
                                            href="#"
                                            className="text-decoration-none d-block my-1"
                                            style={{
                                                color: "#444",
                                                transition: "color 0.3s",
                                               
                                            }}
                                            onMouseOver={e => e.target.style.color = "#007BFF"}
                                            onMouseOut={e => e.target.style.color = "#444"}
                                        >
                                            {item}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        
                        {/* Contact Section */}
                        <div className="col-md-3 mb-4">
                            <h5 className="text-uppercase mb-3 fw-bold text-primary">Contact</h5>
                            <p className="mb-1"><i className="fas fa-envelope me-2"></i>nutribone@gmail.com</p>
                            <p className="mb-1"><i className="fas fa-phone me-2"></i> +91 6294769803</p>
                            <p className="mb-1"><i className="fas fa-map-marker-alt me-2"></i> West Bengal, India</p>
                        </div>
                    </div>

                        {/* Social Media Section */}
                        <div className="col-md-4 mb-4">
                            <h5 className="text-uppercase mb-3 fw-bold text-primary">Follow Us</h5>
                            <div className="d-flex justify-content-center justify-content-md-start gap-3 fs-4">
                                {["facebook", "instagram", "linkedin", "twitter"].map((platform, i) => (
                                    <a key={i} href="#" className="text-dark"
                                        style={{
                                            transition: "transform 0.3s ease",
                                        }}
                                        onMouseOver={e => e.target.style.transform = "scale(1.2)"}
                                        onMouseOut={e => e.target.style.transform = "scale(1)"}
                                    >
                                        <i className={`fab fa-${platform}`}></i>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-3 border-top mt-3">
                        <small className="text-secondary">
                            &copy; {new Date().getFullYear()} All Rights Reserved
                        </small>
                    </div>
           
            </footer>
        </>
    );
}
export default Footer;
