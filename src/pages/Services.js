import React, { useState } from 'react';
import { Footer } from "../components/Footer";
import { Head } from "../components/head";

import network from "../assets/services/computer.png";
import machine from "../assets/services/machine.png";
import search from "../assets/services/search.png";
import process from "../assets/services/process.png";

import "../styles/services.style.css";

const Services = () => {
    const [activeTab, setActiveTab] = useState("Network Engineering"); 
    const [activeContent, setActiveContent] = useState({
        title: "Network Engineering",
        description: "We are ready to delve into the intricacies of your network deployment. Let’s execute your network architecture together."
    });

    const handleTabClick = (tabName, title, description) => {
        setActiveTab(tabName);
        setActiveContent({ title, description });
    };

    return (
        <div>
            <div className='head'>
                <Head />
            </div>
            <div className="services-solution">
                <div className="services-title">
                    <h2 className="title-p">{activeContent.title}</h2>
                </div>
                <div className="services-description">
                    <p className="des-services">{activeContent.description}</p>
                </div>
            </div>
            <div className="services-section">
                <div className="services-tabs">
                    <div className="tabs">
                        <button
                            className={`tabs-btn ${activeTab === "Network Engineering" ? 'active' : ''}`}
                            onClick={() => handleTabClick("Network Engineering", "Network Engineering", "We are ready to delve into the intricacies of your network deployment. Let’s execute your network architecture together.")}
                        >
                            <div className="tabs-icon"><img src={network} alt="Network Engineering" className="services-img" /></div>
                            <h3 className="tabs-dec">Network Engineering</h3>
                        </button>
                    </div>
                    <div className="tabs">
                        <button
                            className={`tabs-btn ${activeTab === "Network Design and Architecture" ? 'active' : ''}`}
                            onClick={() => handleTabClick("Network Design and Architecture", "Network Design and Architecture", "We specialize in designing and architecting scalable and reliable network solutions tailored to your business needs.")}
                        >
                            <div className="tabs-icon"><img src={machine} alt="Network Design and Architecture" className="services-img" /></div>
                            <h3 className="tabs-dec">Network Design and Architecture</h3>
                        </button>
                    </div>
                    <div className="tabs">
                        <button
                            className={`tabs-btn ${activeTab === "Network Audit and Documentation" ? 'active' : ''}`}
                            onClick={() => handleTabClick("Network Audit and Documentation", "Network Audit and Documentation", "Our team conducts thorough network audits and provides detailed documentation to ensure your network is optimized and compliant.")}
                        >
                            <div className="tabs-icon"><img src={search} alt="Network Audit and Documentation" className="services-img" /></div>
                            <h3 className="tabs-dec">Network Audit and Documentation</h3>
                        </button>
                    </div>
                    <div className="tabs">
                        <button
                            className={`tabs-btn ${activeTab === "Managed Network Services" ? 'active' : ''}`}
                            onClick={() => handleTabClick("Managed Network Services", "Managed Network Services", "We offer managed network services to keep your infrastructure running smoothly and securely.")}
                        >
                            <div className="tabs-icon"><img src={process} alt="Managed Network Services" className="services-img" /></div>
                            <h3 className="tabs-dec">Managed Network Services</h3>
                        </button>
                    </div>
                </div>
                <div className='services-info'>
                    <div className='log-sergices'></div>
                    <div className='diag-services'>
                        <div className='tit-services'>
                            <h1 className='tit-p'>Network Engineering</h1>
                            <h4>At Solutek, our engineering team excels in network design, configuration, migration, and troubleshooting. With a broad spectrum of experience spanning multiple vendors, we are well-prepared to meet any network engineering needs you may have.</h4>
                            <div className='des-service'>
                                <p className='p1'>Our daily operations involve tackling complex network challenges across various industries. Whether we're architecting a scalable, high-performance data center for a global enterprise or migrating a regional service provider's network infrastructure to the latest technologies, our team is equipped to handle it all. We also specialize in extending connectivity solutions, like LTE and CBRS, to rural and underserved areas.

As an independent company, Solutek is not limited by vendor constraints. This independence allows us the flexibility to implement the most effective solutions tailored to your specific requirements.</p>
                                <p className='p1'>Partner with us to resolve your network challenges. Unlike traditional hardware resellers, our focus is on delivering the optimal design and configuration for your network, which often means making the most of your existing infrastructure rather than investing in new hardware.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className='container-foo'>
                <Footer />
            </footer>
        </div>
    );
};

export default Services;
