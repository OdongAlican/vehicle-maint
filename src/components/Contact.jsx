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
                    <div className="contact-support mt-2">
                        <div className="contact-support-left">
                            <i class="fas fa-mobile-alt"></i>
                        </div>
                        <div className="contact-support-right">
                            <span>0021012895020</span>
                        </div>
                    </div>
                    <div className="contact-support mt-2">
                        <div className="contact-support-left">
                            <i class="fas fa-map-marker-alt"></i>
                        </div>
                        <div className="contact-support-right">
                            <span>Tala Mencfia Egypt 4 Street</span>
                        </div>
                    </div>

                    <div className="contact-support lower-contact-support mt-2">
                        <div className="contact-support-left">
                            <i class="fab fa-facebook-f"></i>
                        </div>
                        <div className="contact-support-left">
                            <i class="fab fa-twitter"></i>
                        </div>
                        <div className="contact-support-left">
                            <i class="fab fa-linkedin-in"></i>
                        </div>
                        <div className="contact-support-left">
                            <i class="fab fa-instagram"></i>
                        </div>
                    </div>
                </div>
                <div className="contact-us-main-section-right">
                    <div className="top-name-email">
                        <div className="top-name-email-left">
                            <div className="top-name-email-span">
                                <span>Name</span>
                            </div>
                            <div className="top-name-email-input">
                                <input type="text"/>
                            </div>
                        </div>
                        <div className="top-name-email-right">
                            <div className="top-name-email-span">
                                <span>Email</span>
                            </div>
                            <div className="top-name-email-input">
                                <input type="email"/>
                            </div>
                        </div>
                    </div>
                    <div className="top-name-email">
                        <div className="top-name-email-left">
                            <div className="top-name-email-span">
                                <span>Phone</span>
                            </div>
                            <div className="top-name-email-input">
                                <input type="number"/>
                            </div>
                        </div>
                        <div className="top-name-email-right">
                            <div className="top-name-email-span">
                                <span>Subject</span>
                            </div>
                            <div className="top-name-email-input">
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="top-name-email">
                        <div className="top-name-email-left">
                            <div className="top-name-email-span">
                                <span>Address</span>
                            </div>
                            <div className="top-name-email-input">
                                <input type="text"/>
                            </div>
                        </div>
                    </div>
                    <div className="top-name-email-span">
                        <span>Message</span>
                    </div>
                    <div className="top-name-email top-name-email-text-area">
                        <textarea
                        placeholder="Leave a message..."
                         name="" id="" cols="30" rows="3"></textarea>
                    </div>
                    <div className="top-name-email top-lower-email">
                        <button>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;