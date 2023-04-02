import React from 'react'
import {RiLock2Fill } from 'react-icons/ri'
import './style.css'

const Navbar = () => {
    return (
        <div className='navbar-container'>
            <nav class="navbar navbar-expand-lg container">
                <a class="navbar-brand" href="#">E-Tendering</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">ABOUT US</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">FAQ</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#">CONTACT US</a>
                        </li>
                        <li class="nav-item ml-2">
                            <button type="button" class="btn login btn-primary pb-2">
                            <RiLock2Fill className='profile pt-2' style={{fontSize:"23px"}}/> Login
                            </button>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default Navbar