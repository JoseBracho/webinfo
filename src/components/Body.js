import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Body = () =>{
    return(
        <div >
            <div className="main">
                <section className="headboard">
                    <h1>The Premier</h1>
                    <h1>Independent</h1>
                    <h1>Network</h1>
                    <h1>Consulting Firm</h1>
                    <h3>Dedicated exclusively to network design, protocol optimization, security, automation, and cloud solutions. Our focus is on delivering tailored solutions that drive your business forward.</h3>
                    <button className="btn-cnt">Contact us for consulting</button>
                </section>
            </div>
            <div className="content-info">
                <div className="info net-back">
                    <div className="info-detail">
                        <h2 className="font-color-w">Network Engineering</h2>
                        <h4 className="font-color-w">Expertise in routing, switching, and NetOps, available across various timezones.</h4>
                    </div>
                    <div className="explore mg-460">
                        <Link to={`/services?activeTab=Network+Engineering`}><p className='next font-color-w'>Explore <FontAwesomeIcon icon={faArrowRight}/></p></Link>
                    </div>
                </div>
                <div className="info net-2">
                    <div className="info-detail">
                        <h2 className='font-color-w'>Network Design and Architecture</h2>
                        <h4 className='font-color-w'>A robust network foundation designed to accelerate your business growth.</h4>
                    </div>
                    <div className="explore mg-460">
                        <Link to={`/services?activeTab=Network+Design+and+Architecture`}><p className='next font-color-w'>Explore <FontAwesomeIcon icon={faArrowRight}/></p></Link>
                    </div>
                </div>
                <div className="info net-3">
                    <div className="info-detail">
                        <h2 className='font-color-w'>Network Audit and Documentation</h2>
                        <h4 className='font-color-w'>Comprehensive auditing and documentation of routing, switching, and NetOps, with support available globally.</h4>
                    </div>
                    <div className="explore mg-460">
                        <Link to={`/services?activeTab=Network+Audit+and+Documentation`}><p className='next font-color-w'>Explore <FontAwesomeIcon icon={faArrowRight}/></p></Link>
                    </div>
                </div>
                <div className="info net-in">
                    <div className="info-detail">
                        <h2 className="font-color-w">Managed Network Services</h2>
                        <h4 className="font-color-w">Extend your teams capabilities with our backup and support services where necessary.</h4>
                    </div>
                    <div className="explore mg-460">
                        <Link to={`/services?activeTab=Managed+Network+Services`}><p className='next font-color-w'>Explore <FontAwesomeIcon icon={faArrowRight}/></p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}