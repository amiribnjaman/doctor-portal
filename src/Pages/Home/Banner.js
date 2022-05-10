import React from 'react';
import './Home.css';
import HeroImg from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className='banner-section'>
            <div class="hero min-h-screen w-11/12 mx-auto">
                <div class="hero-content flex-col md:justify-between lg:flex-row-reverse w-full">
                    <div className='w-1/2'>
                        <img src={HeroImg} alt=''/>
                    </div>
                    <div className='w-1/2'>
                        <h1 class="text-4xl font-bold md:w-4/5">Your New Smile Starts Here</h1>
                        <p class="py-5 text-sm">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
                        <button class="btn bg-gradient-to-r from-primary to-secondary border-0 font-bold text-white mt-5">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;