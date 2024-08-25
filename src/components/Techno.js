import logo from "../assets//vendors/mk-logo.png"
import logo1 from "../assets/vendors/cisco-logo.png"
import logo2 from "../assets/vendors/fg-logo.png"
import logo3 from "../assets/vendors/pan-logo.png"
import logo4 from "../assets/vendors/junos-logo.png"
import logo5 from "../assets/vendors/huawei-logo.png"

export const Technology = () => {
    return(
        <div>
            <div className="ecosystem">
                <div className="ecosystem-title">
                    <h1 className="ecosystem-t">Ecosystem</h1>
                    <p>Solutek maintains an unbiased approach, free from any single vendor allegiance. We regularly engage with diverse technologies and platforms, cultivating a broad spectrum of expertise. This positions us uniquely to offer valuable insights, ensure interoperability, and provide comprehensive planning for multi-vendor projects.</p>
                </div>
                <div className="ecosystem-techno background">
                    <div className="vendor-img">
                        <img src={logo} alt="Stickman" className='vendor_logo'/>
                    </div>
                    <div className="vendor-img">
                        <img src={logo1} alt="Stickman" className='vendor_logo'/>
                    </div>
                    <div className="vendor-img">
                        <img src={logo2} alt="Stickman" className='vendor_logo h_logo'/>
                    </div>
                    <div className="vendor-img">
                        <img src={logo3} alt="Stickman" className='vendor_logo pa_logo'/>
                    </div>
                    <div className="vendor-img">
                        <img src={logo4} alt="Stickman" className='vendor_logo pa_logo'/>
                    </div>
                    <div className="vendor-img">
                        <img src={logo5} alt="Stickman" className='vendor_logo h_logo'/>
                    </div>
                </div>
            </div>
            <div className="interests">
                <button className="btn-ecosystem">Full Portfolio of Expertise</button>
                <div className="interests-c">
                    <h1 className="interests-t">Industries We Connect</h1>
                    <p className="interests-d">Solutek  serves clients across all sectors. Our unique perspective and extensive experience enable us to introduce innovative ideas, network architectures, and solutions that might not be readily apparent.</p>
                </div>
            </div>
        </div>
    )
}