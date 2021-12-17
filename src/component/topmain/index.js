import React from 'react'
import image1 from '../images/legpiece.png'
import './_topmain.scss'

export const TopMain = () => {
    return (
        <div className="topmain-wrapper">
            <div className="topmain-wrapper-container">
                <div className="topmain-wrapper-container-left">
                    <div className="topmain-wrapper-container-left-heading">
                        <h1>Deurali Reaturant & Cottage</h1>
                    </div>
                    <div className="topmain-wrapper-container-left-note">
                        <h5>We're here to serve you</h5>

                    </div>
                    <div className="topmain-wrapper-container-left-button">
                        <button className="explore">Explore More</button>

                    </div>

                </div>
                <div className="topmain-wrapper-container-right">
                    <img src={image1} alt="image1" width="100%" ></img>


                </div>

            </div>
            
        </div>
    )
}
