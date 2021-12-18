import React from 'react'
import './_footer.scss';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineYoutube  } from 'react-icons/ai';

export const Footer = () => {
    return (
        <div className='footer-wrapper'>
            <div className='footer-wrapper-container'>
                <div className='footer-wrapper-container-col1'>
                   <ul>
                       <li>On the Menu</li>
                       <li>Plans</li>
                       <li>High Protein</li>
                       <li>Calorie Conscious</li>
                       <li>Food Ethos</li>
                       <li>FAQ</li>
                   </ul>

                </div>
                <div className='footer-wrapper-container-col2'>
                    <ul>
                        <li>Sign Up</li>
                        <li>Login</li>
                        <li>Blog</li>
                        <li>Delivery</li>
                        <li>Stockits</li>
                    </ul>

                </div>
                <div className='footer-wrapper-container-col3'>
                    <div className='footer-wrapper-container-col3-row1'>
                        <p>Need a help?</p>
                        <p>Email us any time on support@example.com </p>


                    </div>
                    <div className='footer-wrapper-container-col3-row2'>
                    <p>Stay connected</p>
                    <div className='footer-wrapper-container-col3-row2-icons'>
                        <AiOutlineInstagram />
                        <AiOutlineFacebook/>
                        <AiOutlineYoutube/>
                    </div>


                    </div>

                </div>
                <div className='footer-wrapper-container-col4'>
                    <div className='footer-wrapper-container-col4-top'>
                        <p> A weekly dose of inspiration</p>
                        <p>Receive non-spammy news and promos in your inbox.</p>
                    </div>
                    <div className='footer-wrapper-container-col4-bottom'>
                    <div className='footer-wrapper-container-col4-bottom-email'>
                            <p>Email</p>

                    </div>
                        <button className='btnSubmit'>Submit</button>
                    </div>
                

                </div>

            </div>
            <div className='footer-wrapper-bottomContainer'>
                <div className='footer-wrapper-bottomContainer-col1'>
                <p>Privacy Policiy-Terms</p>
                <p> © 2021 Food. All rights reserved</p>

                </div>
                <div className='footer-wrapper-bottomContainer-col2'>
                <p>Developed by:</p>
                <p>Cm Pandey</p>

                </div>

            </div>
            
        </div>
    )
}
