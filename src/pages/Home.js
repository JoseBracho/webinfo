import React from 'react';

import { Head } from '../components/head';
import { Body } from '../components/Body';
import { Info } from '../components/Info';
import { Technology } from '../components/Techno';
import { CardTechnology } from '../components/CardTechnology';
import { Footer } from '../components/Footer';

import "../styles/body.style.css"
import '../styles/head.style.css'
import '../styles/info.style.css'
import '../styles/technology.style.css'
import '../styles/industries.style.css'
import '../styles/hamburguesa.style.css'
import '../styles/footer.style.css'


const Home = () => {
return(
    <div>
        <div className='head'>
            <Head />
        </div>
        <div className="content-body">
            <Body />
        </div>
        <div className="page-info">
            <Info />
        </div>
        <div className='technology-description'>
            <Technology />
        </div>
        <div className='industries'>
            <CardTechnology title={'Enterprise Networking'} description={'Critical network infrastructure empowering your growth.'} background={"card-enter-info"}/>
            <CardTechnology title={'Datacenter & IX'} description={'Connect high throughput, high capacity transport around the world.'} background={"card-data-info"}/>
            <CardTechnology title={'Service Providers'} description={'Reliable, scalable solutions tailored to service providers, ensuring seamless and efficient delivery of network services.'} background={"card-service-info"}/>
        </div>
        <footer className='container-foo'>
            <Footer /> 
        </footer>
    </div>
)
}

export default Home;