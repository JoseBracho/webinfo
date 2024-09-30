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
                    <h5 className="col-01-t">Home</h5>
                    <h5 className="col-01-t">Ecosystem</h5>
                    <h5 className="col-01-t">Industries</h5>
                    <h5 className="col-01-t">Services</h5>
                </div>
                <div className='col-02'>
                <h5 className="col-01-tt">Services</h5>
                <h5 className="col-01-t">Network Engineering</h5>
                <h5 className="col-01-t">Network Design and Architecture</h5>
                <h5 className="col-01-t">Network Audit and Documentation</h5>
                <h5 className="col-01-t">Managed Network Services</h5>
                </div>
            </div>
        </>
    )
}