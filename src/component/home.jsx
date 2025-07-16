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
import deal1 from "../assets/deal1.jpg";
import deal2 from "../assets/deal2.jpg";
import { TiShoppingCart } from "react-icons/ti";

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
const intl = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'DZD',
});

const deals = [
    {
        image: deal1,
        title: 'rtx 3070',
        nowPrice: intl.format(17000),
        oldPrice: intl.format(20000)
    },
    {
        image: deal2,
        title: 'rx 6600 xt ',
        nowPrice: intl.format(15000),
        oldPrice: intl.format(18000)
    }

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
            <div className="Deals">
                <h1>Exclusive Deals</h1>
                <div className="deals-content">
                    {deals.map((deal, index) => (
                        <div className="deal" key={index}>
                            <img src={deal.image} alt={deal.title} />
                            <h2>{deal.title}</h2>
                            <div className="price">
                            <p className="now-price">{deal.nowPrice}</p>
                            <p className="old-price">{deal.oldPrice}</p>
                            </div>
                            <button className="buy-button"><TiShoppingCart />add to cart</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Home;
