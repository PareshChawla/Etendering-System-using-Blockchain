import React from 'react'
import home from '../assets/home.avif'
import './style.css'

const Home = () => {
    return (
        <div className='hero-container'>
            <div className="container">
                <div className="row">
                 
                 <div className="hero-components d-flex justify-content-center align-items-center p-2 m-1 pb-5">

                
                    <div className="col-md-7 pt-5">
                        <h1 className='heading'>Welcome To Blockchain Based E-Tendering System</h1>
                        <button className='explore btn-primary'>Explore Now</button>
                    </div>

                    <div className="col-md-5">
                        <img src={home} alt="" />
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Home