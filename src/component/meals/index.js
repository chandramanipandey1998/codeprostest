import React from 'react'
import image1 from '../images/legpiece.png'
import './_meals.scss'

export const Meals = () => {
    return (
        <div className='meals-wrapper'>
            <div className='meals-wrapper-container'>
                <div className='meals-wrapper-container-col1'>
                    <h1>Meals made with the only good stuffs Delivered fresh at your door.</h1>
                    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                     incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                     exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.<br/> Duis aute irure 
                     dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                     Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                     anim id est laborum </p>

                </div>
                <div className='meals-wrapper-container-col2'>
                <img src={image1} alt="image1" width="100%" ></img>

                </div>

            </div>

            
        </div>
    )
}
