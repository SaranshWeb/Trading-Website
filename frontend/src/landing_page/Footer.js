
import React from 'react';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-dark text-white mt-5 p-4 text-center">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About TradeClick</h5>
                        <p>
                            TradeClick is a leading trading platform, providing you with real-time market data and analytics.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white">Home</Link></li>
                            <li><Link to="/signup" className="text-white">Sign up</Link></li>
                            <li><Link to="/about" className="text-white">About</Link></li>
                            <li><Link to="/support" className="text-white">Support</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>
                            Email: support@tradeclick.com<br />
                            Phone: +1 234 567 8901
                        </p>
                        <div className="social-icons">
                            <a href="#" className="text-white me-3"><i className="bi bi-facebook"></i></a>
                            <a href="#" className="text-white me-3"><i className="bi bi-twitter"></i></a>
                            <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
                        </div>
                    </div>
                </div>
                <hr />
                <p className="mb-0">© 2024 TradeClick. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
