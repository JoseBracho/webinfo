import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer } from "../components/Footer";
import { Head } from "../components/head";
import { TabsNetwork } from '../components/TabsNetwork';
import { TabsDesign } from '../components/TabsDesign';
import { TabsDocumentation } from '../components/TabsDocumentation';
import { TabsManaged } from '../components/TabsManaged';

import network from "../assets/services/computer.png";
import machine from "../assets/services/machine.png";
import search from "../assets/services/search.png";
import process from "../assets/services/process.png";
import net from "../assets/services/network.png";

import "../styles/services.style.css";

const Services = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);  // Obtener los parámetros de la URL
    const activeTabParam = params.get('activeTab');  // Captura el valor del parámetro "activeTab"

    const [activeTab, setActiveTab] = useState(activeTabParam || "Network Engineering");  // Valor inicial con el parámetro o por defecto
    const [activeContent, setActiveContent] = useState({
        title: "Network Engineering",
        description: "We are ready to delve into the intricacies of your network deployment. Let’s execute your network architecture together."
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (activeTabParam) {
            setActiveTab(activeTabParam);
            switch (activeTabParam) {
                case "Network Engineering":
                    setActiveContent({
                        title: "Network Engineering",
                        description: "We are ready to delve into the intricacies of your network deployment. Let’s execute your network architecture together."
                    });
                    break;
                case "Network Design and Architecture":
                    setActiveContent({
                        title: "Network Design and Architecture",
                        description: "We specialize in designing and architecting scalable and reliable network solutions tailored to your business needs."
                    });
                    break;
                case "Network Audit and Documentation":
                    setActiveContent({
                        title: "Network Audit and Documentation",
                        description: "Our team conducts thorough network audits and provides detailed documentation to ensure your network is optimized and compliant."
                    });
                    break;
                case "Managed Network Services":
                    setActiveContent({
                        title: "Managed Network Services",
                        description: "We offer managed network services to keep your infrastructure running smoothly and securely."
                    });
                    break;
                default:
                    break;
            }
        }
    }, [activeTabParam]);

    const handleTabClick = (tabName, title, description) => {
        setActiveTab(tabName);
        setActiveContent({ title, description });
    };

    const renderActiveTabContent = () => {
        switch (activeTab) {
            case "Network Engineering":
                return <TabsNetwork />;
            case "Network Design and Architecture":
                return <TabsDesign />;
            case "Network Audit and Documentation":
                return <TabsDocumentation />;
            case "Managed Network Services":
                return <TabsManaged />
            default:
                return null;
        }
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
                    <div className='log-sergices'>
                        <img src={net} alt="Network Services" className="services-net" />
                    </div>
                    <div className='diag-services'>
                        <div className='tit-services'>
                            {renderActiveTabContent()}
                        </div>
                    </div>
                </div>
            </div>
            <footer className='container-foo m-5'>
                <Footer />
            </footer>
        </div>
    );
};

export default Services;
