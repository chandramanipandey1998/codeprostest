import React from 'react'
import './_chooseUs.scss'
import bowl from '../images/bowl.jpg'
import { AiOutlineCheck  } from 'react-icons/ai';

export const WhyChooseUs = ({data}) => {
    return (
        <div className='chooseUs-wrapper'>
            <div className='chooseUs-wrapper-container' >
                <div className='chooseUs-wrapper-container-col1'>
                <img src={bowl} alt="imageBowl" width="100%" ></img>

                </div>
                <div className='chooseUs-wrapper-container-col2'>
                    <h1>Why Choose Us</h1>
                    <div className='chooseUs-wrapper-container-col2-disc'>
                    <p>We’re here to help you become the healthiest version of yourself, all while lightening your
                     environmental footprint.</p><p>Delivering meals with a conscience, we’re here to guide and inspire you
                      on your plant-based journey - because ‘plant-based’ isn’t a diet - it’s a lifestyle.
                      Our ever-growing, innovative menu makes living the plant-based life easy, and an experience you’ll
                    want to soak up. </p>
                    {
                        data.map(({note})=>{
                            return <ul className='listing'>
                        <div className='tick'>
                        <AiOutlineCheck/>
                       
                        </div>
                        <li>{note}</li>
                    </ul>

                        })
                    }

                    </div>

                    <div className='chooseUs-wrapper-container-col2-button'>
                    <button className='btnGetStart'>Get Started Now!</button>
                    </div>
                    
                    
               

                </div>

            </div>
            
        </div>
    )
}
