import { Link } from "react-router-dom"
import logo from "../assets/solutek-01.svg"

export const Footer = () => {
    return(
        <>
            <div className="footer-components">
                <img src={logo} alt="Stickman" className='logo-footer'/>
                <div className="description-footer">
                    <p className="p-footer">Dedicated exclusively to network design, protocol optimization, security, automation, and cloud solutions. Our focus is on delivering tailored solutions that drive your business forward.</p>
                </div>
            </div>
            <div className="footer-components-c center">
                <div className="card-footer-info">
                    <h3 className="title-footer">Email us</h3>
                    <p className="des-footer">prueba@gmail.com</p>
                </div>
                <div className="card-footer-info">
                    <h3 className="title-footer">Call us</h3>
                    <p className="des-footer">(+58) 4246000000</p>
                </div>
                <div className="card-footer-info">
                    <h3 className="title-footer">Connect with</h3>
                </div>
            </div>
            <div className="footer-components">
                <div className='col-01'>
                    <h5 className="col-01-tt">Learn More</h5>
                    <h5 className="col-01-t"><Link to="/" className="color">Home</Link></h5>
                    <h5 className="col-01-t"><Link to="/ecosystem" className="color">Ecosystem</Link></h5>
                    <h5 className="col-01-t"><Link to="/industries" className="color">Industries</Link></h5>
                    <h5 className="col-01-t"><Link to="/services" className="color">Services</Link></h5>
                </div>
                <div className='col-02'>
                <h5 className="col-01-tt">Services</h5>
                <h5 className="col-01-t"><Link to={'/services?activeTab=Network+Engineering'} className="color">Network Engineering</Link></h5>
                <h5 className="col-01-t"><Link to={'/services?activeTab=Network+Design+and+Architecture'} className="color">Network Design and Architecture</Link></h5>
                <h5 className="col-01-t"><Link to={'/services?activeTab=Network+Audit+and+Documentation'} className="color">Network Audit and Documentation</Link></h5>
                <h5 className="col-01-t"><Link to={`/services?activeTab=Managed+Network+Services`} className="color">Managed Network Services</Link></h5>
                </div>
            </div>
        </>
    )
}