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
            <div className="footer-components center">
                <div className="card-footer-info">
                    <h3>Email us</h3>
                    <p>prueba@gmail.com</p>
                </div>
                <div className="card-footer-info">
                    <h3>Call us</h3>
                    <p>(+58) 4246000000</p>
                </div>
                <div className="card-footer-info">
                    <h3>Connect with</h3>
                </div>
            </div>
            <div className="footer-components">

            </div>
        </>
    )
}