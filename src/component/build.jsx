import React, { useState } from "react";
import { FaPowerOff, FaMemory } from "react-icons/fa6";
import { BsMotherboard, BsGpuCard, BsCpu, BsSdCard, BsPc } from "react-icons/bs";
import { MdSevereCold } from "react-icons/md";
import "../styles/build.css";

const Build = () => {
  const [selectedStep, setSelectedStep] = useState(null);
  const [selectedName, setSelectedName] = useState("Processor");
  const [selectedProducts, setSelectedProducts] = useState({});

  const intl = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "DZD",
  });

  const products = [
    {
      id: 1,
      name: "ASUS ROG Strix G15",
      category: "Laptop",
      brand: "ASUS",
      price: 235000,
      stock: 12,
      rate: 4.8,
      description:
        "15.6-inch FHD, Ryzen 7 6800H, RTX 3060, 16GB RAM, 1TB SSD, Windows 11",
      image: "/images/asus-rog-strix-g15.jpg",
    },
    {
      id: 2,
      name: "Intel Core i7-13700K",
      category: "Processor",
      brand: "Intel",
      price: 95000,
      stock: 8,
      rate: 4.8,
      description: "13th Gen, 16 Cores, 5.4 GHz Turbo, LGA1700",
      image: "/images/intel-i7-13700k.jpg",
    },
    {
      id: 3,
      name: "NVIDIA GeForce RTX 4070 Ti",
      category: "Graphics Card",
      brand: "NVIDIA",
      price: 195000,
      stock: 5,
      rate: 4.9,
      description: "12GB GDDR6X, Ray Tracing, DLSS 3, PCIe 4.0",
      image: "/images/rtx-4070ti.jpg",
    },
    {
      id: 4,
      name: "Corsair Vengeance RGB Pro 16GB",
      category: "Memory (RAM)",
      brand: "Corsair",
      price: 14500,
      stock: 20,
      rate: 4.8,
      description: "DDR4 3200MHz, Dual Channel, CL16, RGB Lighting",
      image: "/images/corsair-vengeance-16gb.jpg",
    },
    {
      id: 5,
      name: "Samsung 980 Pro 1TB SSD",
      category: "Storage",
      brand: "Samsung",
      price: 18000,
      stock: 15,
      rate: 4.8,
      description: "PCIe Gen4 NVMe M.2, 7000MB/s Read, 5000MB/s Write",
      image: "/images/samsung-980pro-1tb.jpg",
    },
    {
      id: 6,
      name: "Logitech G502 Hero",
      category: "Mouse",
      brand: "Logitech",
      price: 7500,
      stock: 30,
      rate: 4.8,
      description:
        "Wired Gaming Mouse, 25K DPI, RGB, 11 Programmable Buttons",
      image: "/images/logitech-g502.jpg",
    },
  ];

  const steps = [
    { name: "Processor", icon: <BsCpu />, required: true },
    { name: "Motherboard", icon: <BsMotherboard />, required: true },
    { name: "Graphics Card", icon: <BsGpuCard />, required: false },
    { name: "Memory (RAM)", icon: <FaMemory />, required: true },
    { name: "Storage", icon: <BsSdCard />, required: true },
    { name: "Power Supply", icon: <FaPowerOff />, required: true },
    { name: "Cooling", icon: <MdSevereCold />, required: false },
    { name: "Case", icon: <BsPc />, required: false },
  ];

  // total price
  const totalPrice = Object.values(selectedProducts).reduce(
    (sum, product) => sum + product.price,
    0
  );

  // progress %
  const completedSteps = steps.filter((s) => selectedProducts[s.name]);
  const progressPercent = Math.round(
    (completedSteps.length / steps.length) * 100
  );

  return (
    <>
      <div className="build-container">
        <h1>Build Your PC</h1>
        <p>Select components step by step to build your perfect PC</p>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <p>{progressPercent}% Complete</p>
      </div>

      <div className="build-step">
        <div className="configue">
          <p>Build Progress</p>
          {steps.map((step, index) => (
            <div
              key={step.name} // use stable key instead of index
              className={`step ${
                selectedProducts[step.name] ? "step-selected" : ""
              } ${selectedStep === index ? "selected" : ""}`}
              onClick={() => {
                setSelectedStep(index);
                setSelectedName(step.name);
              }}
            >
              <div className="icon">{step.icon}</div>
              <p>{step.name}</p>
              {step.required ? (
                <span className="required">Required</span>
              ) : (
                <span className="optional">Optional</span>
              )}
            </div>
          ))}
        </div>

        <div className="select-configue">
          <h2>{selectedName}</h2>
          <p>Select a {selectedName} for your build</p>
          {products
            .filter(
              (product) =>
                product.category.toLowerCase() === selectedName.toLowerCase()
            )
            .map((product) => (
              <div
                key={product.id} // use product id instead of index
                className={`product-item ${
                  selectedProducts[selectedName] &&
                  selectedProducts[selectedName].id === product.id
                    ? "product-selected"
                    : ""
                }`}
              >
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <div className="pricipal">
                  <span>{intl.format(product.price)}</span>
                  <div className="select-details">
                    <button
                      className={
                        selectedProducts[selectedName] &&
                        selectedProducts[selectedName].id === product.id
                          ? "btn-selected"
                          : ""
                      }
                      onClick={() => {
                        setSelectedProducts({
                          ...selectedProducts,
                          [selectedName]: product,
                        });
                      }}
                    >
                      {selectedProducts[selectedName] &&
                      selectedProducts[selectedName].id === product.id
                        ? "Selected"
                        : "Select"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Build summary */}
      <div className="build-summary">
        <h2>Final Build Summary</h2>
        {Object.keys(selectedProducts).length === 0 ? (
          <p>No components selected yet.</p>
        ) : (
          <ul>
            {Object.values(selectedProducts).map((product) => (
              <li key={product.id} className="summary-item">
                <img src={product.image} alt={product.name} />
                <div>
                  <h3>{product.name}</h3>
                  <p>{intl.format(product.price)}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h3>Total Price: {intl.format(totalPrice)}</h3>
      </div>
    </>
  );
};

export default Build;
