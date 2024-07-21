import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import logo from "../assets/title_1.svg"
import logo1 from "../assets/title_2.svg"
import logo2 from "../assets/title_3.svg"

export const Info = () => { 
    return(
        <div>
            <div className="presentation">
                <div className="presentation-title">
                    <h4 className="slogan">About IP Solutek</h4>
                    <h1 className="slogan-description">We put your business first.</h1>
                </div>
                <div className="presentation-description">
                    <h2 className="description-txt">Solutek is an expanding PYME, founded in 2019 and based in Maracaibo, Venezuela. We specialize in offering Networking and Telecommunications services both remotely and in-person anywhere in the world, serving ISPs and related businesses. Our core business focuses on support, design and implementation, adapting our work methodologies to the specific needs of each client. We work by project, hourly or through monthly payments. We offer multi-vendor solutions, which allows us to provide the best cost-effective option for your business.</h2>
                    <h2 className="about-link">Meet The Team <FontAwesomeIcon icon={faArrowRight}/></h2>
                </div>
            </div>
            <div className="content-characteristics"> 
                <div className="characteristics">
                    <div className="characteristics-icon">
                        <img src={logo} alt="Stickman" className='presentation-img'/>
                    </div>
                    <div className="characteristics-description">
                        <h2 className='characteristics-title'>Thought Leadership</h2>
                        <p className='characteristics-subt'>We prioritize business requirements to push the boundaries of conventional design. Our team excels in solving problems with the right architecture, considering both technical and non-technical perspectives.</p>
                    </div>
                </div>
                <div className="characteristics">
                    <div className="characteristics-icon">
                        <img src={logo1} alt="Stickman" className='presentation-img'/>
                    </div>
                    <div className="characteristics-description">
                        <h2 className='characteristics-title'>Open Networking</h2>
                        <p className='characteristics-subt'>The separation of network software and hardware is revolutionizing network design, construction, and operation. With years of production experience, we have been at the forefront of this transition as a leading integrator in building open networks.</p>
                    </div>
                </div>
                <div className="characteristics">
                    <div className="characteristics-icon">
                        <img src={logo2} alt="Stickman" className='presentation-img'/>
                    </div>
                    <div className="characteristics-description">
                        <h2 className='characteristics-title'>Lowering Network Costs</h2>
                        <p className='characteristics-subt'>By leveraging open networking technologies, commodity hardware, and validated design templates, we can significantly reduce your capital expenditures. These savings are realized without compromising service quality and availability.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}