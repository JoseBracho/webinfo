import { Footer } from "../components/Footer";
import { Head } from "../components/head";

import "../styles/ecosystem.style.css"

import cisco from "../assets/vendors/cisco-logo.png"
import juniper from "../assets/vendors/junos-logo.png"
import mk from "../assets/vendors/mk-logo.png"
import huawei from "../assets/vendors/huawei-logo.png"
import fg from "../assets/vendors/fg-logo.png"
import pan from "../assets/vendors/pan-logo.png"
import nokia from "../assets/vendors/nokia-logo.jpg"
import zte from "../assets/vendors/zte-logo.png"
import ruckus from "../assets/vendors/ruckus-logo.png"
import arista from "../assets/vendors/arista-logo.svg"
import datacom from "../assets/vendors/datacom-logo.svg"
import aruba from "../assets/vendors/aruba-logo.png"
import siklu from "../assets/vendors/siklu-logo.png"
import cambium from "../assets/vendors/cambium-logo.svg"
import ciena from "../assets/vendors/ciena-logo.svg"
import zero from "../assets/vendors/zero-logo.png"
import ip from "../assets/vendors/ip-logo.svg"
import net from "../assets/vendors/net-logo.png"
import linux from "../assets/vendors/linux-logo.png"
import cumulus from "../assets/vendors/cumulus-logo.png"
import python from "../assets/vendors/python-logo.png"
import kentik from "../assets/vendors/kentik-logo.png"
import libre from "../assets/vendors/libre-logo.png"
import zabbix from "../assets/vendors/zabbix-logo.svg"
import grafana from "../assets/vendors/grafana-logo.svg"
import netbox from "../assets/vendors/netbox-logo.svg"
import mimosa from "../assets/vendors/mimosa-logo.png"
import solutek from "../assets/solutek-01.svg"
import { useEffect } from "react";

const Ecosystem = () =>{
    const card = [
        {
            "title": 'Juniper',
            "description": "Specializes in advanced networking solutions with a focus on high-performance routing, switching, and security to ensure efficient and secure network operations.",
            "img": juniper,
            "height": '50%',
            "width": '80%'
        },
        {
            "title": 'Cisco',
            "description": "Offers a comprehensive range of networking hardware and software, including routers, switches, and security solutions, designed to provide reliable and scalable network infrastructures.",
            "img": cisco,
            "height": '60%',
            "width": '60%'
        },
        {
            "title": "Mikrotik",
            "description": "Provides affordable and versatile routers and wireless ISP systems, known for their flexibility and performance in various networking environments.",
            "img": mk,
            "height": '50%',
            "width": '70%'
        },
        // {
        //     "title": "FiberStore (FS)",
        //     "description": "Delivers high-quality networking equipment, including fiber optic products and switches, aimed at optimizing data transmission and network performance.",
        //     "img": ""
        // },
        {
            "title": "Huawei",
            "description": "Offers a broad range of networking products, including routers, switches, and wireless solutions, tailored for robust and efficient network infrastructures.",
            "img": huawei,
            "height": '100%',
            "width": '80%'
        },
        {
            "title": "Nokia",
            "description": "Provides high-performance networking and telecommunications equipment, focusing on cutting-edge technology for seamless connectivity.",
            "img": nokia,
            "height": '80%',
            "width": '90%'
        },
        {
            "title": "ZTE",
            "description": "Specializes in network infrastructure and telecommunications solutions, delivering reliable and innovative products for global connectivity.",
            "img": zte,
            "height": '40%',
            "width": '70%'
        },
        {
            "title": "Arista",
            "description": "Focuses on cloud networking solutions that emphasize scalability and performance, enabling efficient data center operations.",
            "img": arista,
            "width": '90%'
        },
        {
            "title": "Ruckus",
            "description": "Provides reliable and secure wired and wireless networking equipment, designed to ensure robust and seamless network connectivity.",
            "img": ruckus,
            "height": '90%',
            "width": '80%'
        },
        {
            "title": "Datacom",
            "description": "Offers a comprehensive range of networking products and services, designed to meet diverse connectivity needs with high reliability.",
            "img": datacom,
            "height": '100%',
            "width": '100%'
        },
        {
            "title": "Aruba",
            "description": "Delivers next-gen network access solutions, including wireless LANs and security, aimed at enhancing network performance and security.",
            "img": aruba,
            "height": '80%',
            "width": '80%'
        },
        {
            "title": "Siklu",
            "description": "Specializes in wireless solutions for high-capacity broadband, enabling efficient and reliable data transmission over wireless networks.",
            "img": siklu,
            "height": '50%',
            "width": '60%'
        },
        {
            "title": "Cambium",
            "description": "Offers wireless networking infrastructure solutions for service providers, focusing on scalable and efficient network deployments.",
            "img": cambium,
            "height": '100%',
            "width": '100%'
        },
        {
            "title": "IPInfusion",
            "description": "Delivers network software solutions for SDN and NFV, enabling flexible and efficient network management and deployment.",
            "img": ip,
            "height": '100%',
            "width": '100%'
        },
        {
            "title": "Ciena",
            "description": "Provides networking systems, services, and software for data transport, enabling high-performance and resilient network infrastructures.",
            "img": ciena,
            "height": '70%',
            "width": '70%'
        },
        {
            "title": "Zerotier",
            "description": "Their software automatically handles the complexities of networking across physical network boundaries, dealing with mobility, and unifying cloud and edge to free you to spend your time building your projects and running your business.",
            "img": zero,
            "height": '95%',
            "width": '55%'
        },
        {
            "title": "NetElastic",
            "description": "Offers innovative software solutions for next-gen networks, focusing on scalability and performance to meet growing network demands.",
            "img": net,
            "height": '60%',
            "width": '80%'
        },
        {
            "title": "Linux",
            "description": "An open-source operating system for servers, desktops, and networking, known for its stability, security, and flexibility in various applications.",
            "img": linux,
            "height": '95%',
            "width": '60%'
        },
        {
            "title": "Cumulus",
            "description": "Provides open networking software for data center networking, enabling scalable and flexible network operations.",
            "img": cumulus,
            "height": '60%',
            "width": '80%'
        },
        {
            "title": "Python",
            "description": "A versatile programming language widely used for network automation and scripting, enhancing efficiency in network management and operations.",
            "img": python,
            "height": '50%',
            "width": '80%'
        },
        {
            "title": "Fortinet",
            "description": "Offers comprehensive security solutions, including firewalls, VPNs, and threat protection, designed to safeguard network infrastructures.",
            "img": fg,
            "height": '100%',
            "width": '100%'
        },
        {
            "title": "Palo Alto",
            "description": "Provides advanced network security products, including firewalls and cloud security, aimed at protecting networks from sophisticated threats.",
            "img": pan,
            "height": '50%',
            "width": '90%'
        },
        {
            "title": "Kentik",
            "description": "A network intelligence platform that provides performance and security analytics, enabling proactive network management and optimization.",
            "img": kentik,
            "height": '65%',
            "width": '60%'
        },
        {
            "title": "LibreNMS",
            "description": "An open-source network monitoring system that provides comprehensive monitoring and management of network infrastructures.",
            "img": libre,
            "height": '50%',
            "width": '70%'
        },
        {
            "title": "Zabbix",
            "description": "An enterprise-class open-source monitoring solution for networks and applications, ensuring reliable and efficient monitoring capabilities.",
            "img": zabbix,
            "height": '50%',
            "width": '70%'
        },
        {
            "title": "Grafana",
            "description": "An open-source platform for monitoring and observability, enabling visualization and analysis of network performance data.",
            "img": grafana,
            "height": '100%',
            "width": '100%'
        },
        {
            "title": "NetBox",
            "description": "An IP address management (IPAM) and data center infrastructure management (DCIM) tool, providing efficient management of network resources.",
            "img": netbox,
            "height": '60%',
            "width": '80%'
        },
        {
            "title": "Mimosa",
            "description": "Delivers wireless broadband solutions for service providers, focusing on high-performance and scalable network deployments.",
            "img": mimosa,
            "height": '50%',
            "width": '70%'
        },
    ]
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return(
        <div>
            <div className='head'>
                <Head />
            </div>
            <div className="title-ecosystem-p">
                <h2 className="ecosystem-titular">Ecosystem</h2>
                <p>Unlike traditional vendors, we are fully dedicated to network design and protocol optimization to achieve business goals, without engaging in hardware sales. This allows us to bring every tool to the table for your success.</p>
            </div>
            <div className="ecosystem-description">
                <div className="icon-ecosystem">
                <img src={solutek} alt="Stickman"  className="card-ecosystem-img"/>
                </div>
                <div className="d-ecosystem">
                    <h2>Portfolio Of Experience</h2>
                    <p className="d-ecosystem-p">The solutek team combines a rich tapestry of backgrounds and diverse skill sets. Our unique positioning allows us to deliver deep insights, facilitate smooth interoperability, and offer meticulous planning for projects that span a wide range of platforms and technologies. Below, you’ll find a selection of the various vendors and partners that solutek frequently collaborates with in our work with service providers, data centers, and enterprise clients.</p>
                </div>
            </div>
            <div className="vendors-ecosystem-p">
                    {
                        card.map(e => {
                            return(
                                <div className="card-ecoystem">
                                    <div className="card-ecoystem-icon">
                                        <img src={e.img} alt="Stickman" style={{ height: e?.height, width: e?.width }} className="card-ecosystem-img"/>
                                    </div>
                                    <div className="card-ecoystem-d">
                                        <h2 className="title-vendor">{e.title}</h2>
                                        <p className="des-vendor">{e.description}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
            <footer className='container-foo'>
                <Footer /> 
            </footer>
        </div>
    )
}

export default Ecosystem;