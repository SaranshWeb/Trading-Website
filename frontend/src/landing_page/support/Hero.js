
import React from 'react';  
import 'bootstrap/dist/css/bootstrap.min.css';  

const Hero = () => {  
    return (  
        <div className="container mt-5">  
            <h1 className="text-center mb-4">Support Center</h1>  
            
            <section className="mb-5">  
                <h2 className="h4 mb-3">Frequently Asked Questions (FAQs)</h2>  
                <ul className="list-unstyled">  
                    <li className="mb-2"><strong>How do I reset my password?</strong> - You can reset your password by clicking on the 'Forgot Password' link on the login page.</li>  
                    <li className="mb-2"><strong>What payment methods are accepted?</strong> - We accept credit cards, debit cards, and PayPal.</li>  
                    <li className="mb-2"><strong>How can I contact support?</strong> - You can contact support through the form below or email us at support@tradeclick.com.</li>  
                </ul>  
            </section>  

            <section>  
                <h2 className="h4 mb-3">Contact Support</h2>  
                <form className="bg-light p-4 rounded shadow">  
                    <div className="mb-3">  
                        <label htmlFor="name" className="form-label">Name</label>  
                        <input type="text" className="form-control" id="name" required />  
                    </div>  
                    <div className="mb-3">  
                        <label htmlFor="email" className="form-label">Email</label>  
                        <input type="email" className="form-control" id="email" required />  
                    </div>  
                    <div className="mb-3">  
                        <label htmlFor="message" className="form-label">Message</label>  
                        <textarea className="form-control" id="message" rows="4" required></textarea>  
                    </div>  
                    <button type="submit" className="btn btn-primary">Submit</button>  
                </form>  
            </section>  
        </div>  
    );  
};  

export default Hero;