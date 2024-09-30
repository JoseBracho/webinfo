import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Footer } from "../components/Footer";
import { Head } from "../components/head";
import { TabsDesign } from '../components/TabsDesign';
import { TabsDocumentation } from '../components/TabsDocumentation';

import network from "../assets/services/computer.png";
import machine from "../assets/services/machine.png";
import search from "../assets/services/search.png";
import net from "../assets/services/network.png";

import "../styles/services.style.css";
import { TabsEnterprises } from '../components/TabsEnterprise';

const Industries = () => {
    const location = useLocation();
    const params = new URLSearchParams(location.search);  
    const activeTabParam = params.get('activeTab');  

    const [activeTab, setActiveTab] = useState(activeTabParam || "Enterprise");  
    const [activeContent, setActiveContent] = useState({
        title: "Enterprise Networking",
        description: "We develop essential infrastructure for businesses, from emerging startups to global industry leaders, across the world."
    });

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    useEffect(() => {
        if (activeTabParam) {
            setActiveTab(activeTabParam);
            switch (activeTabParam) {
                case "Enterprise":
                    setActiveContent({
                        title: "Enterprise Networking",
                        description: "We develop essential infrastructure for businesses, from emerging startups to global industry leaders, across the world."
                    });
                    break;
                case "Datacenter Network":
                    setActiveContent({
                        title: "Datacenter Network",
                        description: "We specialize in designing and architecting scalable and reliable network solutions tailored to your business needs."
                    });
                    break;
                case "Network Audit and Documentation":
                    setActiveContent({
                        title: "Network Audit and Documentation",
                        description: "Our team conducts thorough network audits and provides detailed documentation to ensure your network is optimized and compliant."
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
            case "Enterprise":
                return <TabsEnterprises />;
            case "Datacenter Network":
                return <TabsDesign />;
            case "Network Audit and Documentation":
                return <TabsDocumentation />;
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
                            className={`tabs-btn ${activeTab === "Enterprise" ? 'active' : ''}`}
                            onClick={() => handleTabClick("Enterprise", "Enterprise Networking", "We develop essential infrastructure for businesses, from emerging startups to global industry leaders, across the world.")}
                        >
                            <div className="tabs-icon"><img src={network} alt="Enterprise" className="services-img" /></div>
                            <h3 className="tabs-dec">Enterprise Networking</h3>
                        </button>
                    </div>
                    <div className="tabs">
                        <button
                            className={`tabs-btn ${activeTab === "Datacenter Network" ? 'active' : ''}`}
                            onClick={() => handleTabClick("Datacenter Network", "Datacenter Network", "We specialize in designing and architecting scalable and reliable network solutions tailored to your business needs.")}
                        >
                            <div className="tabs-icon"><img src={machine} alt="Datacenter Network" className="services-img" /></div>
                            <h3 className="tabs-dec">Datacenter Network</h3>
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
            <footer className='container-foo'>
                <Footer />
            </footer>
        </div>
    );
};

export default Industries;
