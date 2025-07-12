import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/home.css";
import hero_image from "../assets/hero-image.png";
import intel from "../assets/intel.png";
import amd from "../assets/amd.png";
import nvidia from "../assets/nvidia.png";
import corsair from "../assets/corsair.png";
import asus from "../assets/rog.png";
import msi from "../assets/msi.png";
import gigabyte from "../assets/gigabyt.png";
import cooler_master from "../assets/cooler master.png";
import thermaltake from "../assets/Tt.png";

const Home = () => {
    const navigate = useNavigate();

    const handleButton1Click = () => {
        navigate('/product');
    };

    const brands = [
        { name: 'Intel', logo: intel },
        { name: 'AMD', logo: amd },
        { name: 'NVIDIA', logo: nvidia },
        { name: 'Corsair', logo: corsair },
        { name: 'ASUS', logo: asus },
        { name: 'MSI', logo: msi },
        { name: 'Gigabyte', logo: gigabyte },
        { name: 'Cooler Master', logo: cooler_master },
        { name: 'Thermaltake', logo: thermaltake },
    ];

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
                <img src={hero_image} alt="Hero" />
            </div>

            <div className="brands">
                <h1>Trusted Brand Partners</h1>
                <p>We collaborate with the world's leading technology brands to bring you authentic products</p>
                <div className="brand-logos">
                    {brands.map((brand, index) => (
                        <div className="brand-logo" key={index}>
                            <img src={brand.logo} alt={brand.name} />
                            <p>{brand.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
