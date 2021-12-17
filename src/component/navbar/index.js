import React from 'react'
import './_navbar.scss'
import { AiOutlineMenu } from 'react-icons/ai';

export const Navbar = () => {
    return (
        <div className="navbar-wrapper">
            <div className="navbar-wrapper-container">
                <div className="navbar-wrapper-container-left">
                    <div className='navbar-wrapper-container-left-menubar'>
                        <AiOutlineMenu/>

                    </div>
                   <div className="navbar-wrapper-container-left-logo">
                    <h2>Food Logo</h2>

                   </div>


                </div>
                <div className="navbar-wrapper-container-right">
                        <div className="navbar-wrapper-container-right-item">
                               <div>
                               <ul className="navbar-wrapper-container-right-item-navlink">
                                    <li>Home</li>
                                    <li>Product</li>
                                    <li>About us</li>
                                    <li>Contact us</li>
                                </ul>
                               </div>

                            
                            <div className="navbar-wrapper-container-right-item-right">
                                <div className='navbar-wrapper-container-right-item-right-col1'>
                                    <h6>Login</h6>

                                </div>
                                <div className='navbar-wrapper-container-right-item-right-col2'>
                                    <button className='btnStart'>Get Started</button>

                                </div>


                            </div>

                        </div>
                       

                 </div>

            </div>
            
        </div>
    )
}
