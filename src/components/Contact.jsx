import React from 'react'
import NavBar from './Navbar'

const Contact = () => {
    return(
        <div>
            <NavBar/>
            <div className="contact-us-main-section">
                <div className="contact-us-main-section-left">
                    <h6>Contact Us</h6>
                    <div className="contact-support">
                        <div className="contact-support-left">
                            <i class="fas fa-envelope"></i>
                        </div>
                        <div className="contact-support-right">
                            <span>support-mail@email.com</span>
                        </div>
                    </div>
                </div>
                <div className="contact-us-main-section-right"></div>
            </div>
        </div>
    )
}

export default Contact;