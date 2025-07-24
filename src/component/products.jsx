import React, { useState } from 'react';
import { MdOutlineHorizontalSplit } from "react-icons/md";
import { MdOutlineVerticalSplit } from "react-icons/md";
import { FaFilter } from "react-icons/fa";
import '../styles/products.css';
import { FaPowerOff , FaMemory} from "react-icons/fa6";
import { BsMotherboard , BsGpuCard , BsCpu , BsSdCard , BsMouse2 ,BsKeyboard , BsPc } from "react-icons/bs";
import { MdMonitor , MdSevereCold } from "react-icons/md";
import { IoIosLaptop } from "react-icons/io";
const Products = () => {

    const intl = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'DZD',
    });

const [filter,setFilter ] = useState(false);
const [sortBy, setSortBy] = useState('Feautured');
const [showtype, setShowType] = useState('horizontal');
const [maxPrice, setMaxPrice] = useState(intl.format(5000000));
const [minPrice, setMinPrice] = useState(intl.format(0));
const [selectBrand, setSelectBrand] = useState([]);
const [search, setSearch] = useState('');
const [category, setCategory] = useState('all');
const categories = [
    { name: 'All', icon: <FaPowerOff /> },
    { name: 'Laptop', icon: <IoIosLaptop /> },
    { name: 'Processor', icon: <BsCpu /> },
    { name: 'Graphics Card', icon: <BsGpuCard /> },
    { name: 'RAM', icon: <FaMemory /> },
    { name: 'Storage', icon: <BsSdCard /> },
    { name: 'Mouse', icon: <BsMouse2 /> },
    { name: 'Keyboard', icon: <BsKeyboard /> },
    { name: 'Motherboard', icon: <BsMotherboard /> },
    { name: 'Power Supply', icon: <FaPowerOff /> },
    { name: 'Cooling', icon: <MdSevereCold /> },
    { name: 'Monitor', icon: <MdMonitor /> },
    { name: 'PC Case', icon: <BsPc /> }
];
const products = [
     
  {
    "id": 1,
    "name": "ASUS ROG Strix G15",
    "category": "Laptop",
    "brand": "ASUS",
    "price": 235000,
    "stock": 12,
    "rate" : 4.8,
    "description": "15.6-inch FHD, Ryzen 7 6800H, RTX 3060, 16GB RAM, 1TB SSD, Windows 11",
    "image": "/images/asus-rog-strix-g15.jpg"
  },
  {
    "id": 2,
    "name": "Intel Core i7-13700K",
    "category": "Processor",
    "brand": "intel",
    "price": 95000,
    "stock": 8,
    "rate" : 4.8,
    "description": "13th Gen, 16 Cores, 5.4 GHz Turbo, LGA1700",
    "image": "/images/intel-i7-13700k.jpg"
  },
  {
    "id": 3,
    "name": "NVIDIA GeForce RTX 4070 Ti",
    "category": "Graphics Card",
    "brand": "NVIDIA",
    "price": 195000,
    "stock": 5,
    "rate" : 4.9,
    "description": "12GB GDDR6X, Ray Tracing, DLSS 3, PCIe 4.0",
    "image": "/images/rtx-4070ti.jpg"
  },
  {
    "id": 4,
    "name": "Corsair Vengeance RGB Pro 16GB",
    "category": "RAM",
    "brand": "Corsair",
    "price": 14500,
    "stock": 20,
    "rate" : 4.8,
    "description": "DDR4 3200MHz, Dual Channel, CL16, RGB Lighting",
    "image": "/images/corsair-vengeance-16gb.jpg"
  },
  {
    "id": 5,
    "name": "Samsung 980 Pro 1TB SSD",
    "category": "Storage",
    "brand": "Samsung",
    "price": 18000,
    "stock": 15,
    "rate" : 4.8,
    "description": "PCIe Gen4 NVMe M.2, 7000MB/s Read, 5000MB/s Write",
    "image": "/images/samsung-980pro-1tb.jpg"
  },
  {
    "id": 6,
    "name": "Logitech G502 Hero",
    "category": "Mouse",
    "brand": "Corsair",
    "price": 7500,
    "stock": 30,
    "rate" : 4.8,
    "description": "Wired Gaming Mouse, 25K DPI, RGB, 11 Programmable Buttons",
    "image": "/images/logitech-g502.jpg"
  }
];
 const brands = ["Intel", "AMD", "NVIDIA", "Corsair", "ASUS", "MSI", "Gigabyte", "Cooler Master", "Thermaltake"];
    return (

    <>
    <div className="hero-product">
        <h1>Products</h1>
        <p>Explore our wide range of products</p>
    </div>
    <div className="categories-section">
      <h1>Shop by Category</h1>
    <div className="categories">
        {categories.map((categorye, index) => (
            <div className={`categorie ${category.toLowerCase() === categorye.name.toLowerCase() ? 'active' : ''}`} key={index} onClick={() => setCategory(categorye.name.toLowerCase())}>
                <h3>{categorye.icon}</h3>
                <p>{categorye.name}</p>
            </div>
            
        ))}
    </div>
    </div>
    <div className="product-nav">
        <h1>
            products  ({products.length})
        </h1>
<div className="select">
    <input type="text" placeholder="Search products..."  value={search} onChange={(e) => setSearch(e.target.value)} className=' search' />
    <button onClick={() => setFilter(!filter)} className='filter-button'><FaFilter /> Filter</button>
    <div className="ver-hor">
  <button
    className={`horizontal ${showtype === 'horizontal' ? 'activebutton' : ''}`}
    onClick={() => setShowType('horizontal')}
  >
    <MdOutlineHorizontalSplit />
  </button>

  <button
    className={`vertical ${showtype === 'vertical' ? 'activebutton' : ''}`}
    onClick={() => setShowType('vertical')}
  >
    <MdOutlineVerticalSplit />
  </button>
</div>
    <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className='sort'>
        <option value="Feautured">Feautured</option>
        <option value="Price: Low to High">Price: Low to High</option>
        <option value="Price: High to Low">Price: High to Low</option>
        <option value="Highest Rating">Highest Rating</option>
        <option value="name A-Z "> name A-Z </option>
</select>

</div>
    </div>
    <div className="products-section">
        <div className={ filter ? 'filter-active' : 'filter'}>
            <h2> price</h2>
            <label htmlFor="max">Max Price</label>
            <input type="text" id='max' value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
            <label htmlFor="min">Min Price</label>
            <input type="text" id='min' value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
            <h2>Brands</h2>
{brands.map((brand, index) => (
  <div key={index}>
    <input
      type="checkbox"
      id={brand}
      checked={selectBrand.includes(brand)}
      onChange={(e) => {
        if (e.target.checked) {
          setSelectBrand([...selectBrand, brand]);
        } else {
          setSelectBrand(selectBrand.filter(b => b !== brand));
        }
      }}
    />
    <label htmlFor={brand}>{brand}</label>
  </div>
))}
        </div>
        <div className={`products ${showtype === 'horizontal' ? 'horizontal-view' : 'vertical-view'}`}>
          {
            products
              .filter(product => 
                (category.toLowerCase() === 'all' || product.category.toLowerCase() === category) &&
                (search === '' || product.name.toLowerCase().includes(search.toLowerCase())) &&
                (selectBrand.length === 0 || selectBrand.some(brand => brand.toLowerCase() === product.brand.toLowerCase())) &&
                (parseFloat(product.price) >= parseFloat(minPrice.replace(/[^0-9.-]+/g,"")) && parseFloat(product.price) <= parseFloat(maxPrice.replace(/[^0-9.-]+/g,"")))
              )
              .sort((a, b) => {
                if (sortBy === 'Price: Low to High') return a.price - b.price;
                if (sortBy === 'Price: High to Low') return b.price - a.price;
                if (sortBy === 'Highest Rating') return b.rate - a.rate;
                if (sortBy === 'name A-Z') return a.name.localeCompare(b.name);
                return 0; 
              })
              .map((product) => (
                <div className= {showtype === 'horizontal' ? 'product-horizontal' : 'product-vertical'} key={product.id}>
                  <img src={product.image} alt={product.name} />
                  <div>
                  <div className="name">
                  <h3>{product.name}</h3>
                  <p>{intl.format(product.price)}</p>
                  </div>
                  <div className="description">
                  <p>{product.description}</p>
                  <p>Rating: {product.rate}</p>
                  </div>
                  </div>
                </div>
              ))
          }
        </div>
    </div>
    </>
    );
}
export default Products;
