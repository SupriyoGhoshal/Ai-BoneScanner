function Footer() {
    return (
        <>
            <footer className="bg-dark text-white py-4 mt-5">
                <div className="container">
                    <div className="row text-center text-md-start">
                        {/* Creator Section */}
                        <div className="col-md-4 mb-4">
                            <h5 className="text-uppercase mb-3">Creators</h5>
                            <div className="d-flex align-items-center mb-2">
                                <img
                                    src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-male-user-profile-vector-illustration-isolated-background-man-profile-sign-business-concept_157943-38764.jpg?semt=ais_hybrid&w=740"
                                    alt="Supriyo"
                                    className="rounded-circle me-2"
                                    width="40"
                                    height="40"
                                />
                                <span>Supriya Ghoshal</span>
                            </div>
                            <div className="d-flex align-items-center">
                                <img
                                    src="https://img.freepik.com/premium-vector/avatar-profile-icon-flat-style-female-user-profile-vector-illustration-isolated-background-women-profile-sign-business-concept_157943-38866.jpg?semt=ais_hybrid&w=740"
                                    alt="Asmi"
                                    className="rounded-circle me-2"
                                    width="40"
                                    height="40"
                                />
                                <span>Asmi Verma</span>
                            </div>
                        </div>

                        {/* Links Section */}
                        <div className="col-md-4 mb-4">
                            <h5 className="text-uppercase mb-3">Navigation</h5>
                            <ul className="list-unstyled">
                                <li><a href="#" className="text-white text-decoration-none">Home</a></li>
                                <li><a href="#" className="text-white text-decoration-none">About</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Scan</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Summary</a></li>
                                <li><a href="#" className="text-white text-decoration-none">Contact Us</a></li>
                            </ul>
                        </div>

                        {/* Social Media Section */}
                        <div className="col-md-4 mb-4">
                            <h5 className="text-uppercase mb-3">Follow Us</h5>
                            <div className="d-flex justify-content-center justify-content-md-start gap-3">
                                <a href="#" className="text-white fs-4"><i className="fab fa-facebook"></i></a>
                                <a href="#" className="text-white fs-4"><i className="fab fa-instagram"></i></a>
                                <a href="#" className="text-white fs-4"><i className="fab fa-linkedin"></i></a>
                                <a href="#" className="text-white fs-4"><i className="fab fa-twitter"></i></a>
                            </div>
                        </div>
                    </div>

                    <div className="text-center pt-3 border-top mt-3">
                        <small>&copy; {new Date().getFullYear()} All Rights Reserved</small>
                    </div>
                </div>
            </footer>
        </>
    );
}
export default Footer;
