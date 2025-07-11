import React  from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/home.css";
import hero_image from "../assets/hero-image.png"; 


const Home = () => {
const navigate = useNavigate();
const handleButton1Click = () => {
    navigate('/product');
}
const heroimage = hero_image
    return (
        <>
        <div className="hero">
            <div className="hero-content">
                <h1>Build Your Dream PC</h1>
                <p>Discover the latest components and build the ultimate gaming rig with our premium selection of CPUs, GPUs, and more.</p>
                <div className="hero-button">
                    <p className="button1" onClick={handleButton1Click}>Shop Now</p>
                    <p className="button2">Build guide</p>
                </div>
            </div>

                <img src={heroimage} alt="Hero" />
            
        </div>
        </>
    );
}
export default Home;