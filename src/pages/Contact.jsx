import {  MapPin, Phone } from "lucide-react"


const Contact = () => {
  return (
    <div className="contact-area">
      <div className="contact-sec wrapper">
        <div className="contact-part">
          <h3>Support</h3>
          <div className="calling-area">
            <div className="phone-icon">
              <Phone size={28} color="white" />
            </div>
            <div className="phone-info">
              <h6>9Am-8pm</h6>
              <h4>16793</h4>
            </div>
          </div>
          <div className="location-area">
            <div className="phone-icon">
              <MapPin size={28} color="white" />
            </div>
            <div className="phone-info">
              <h6>Store Locator</h6>
              <h4>Find Our Service</h4>
            </div>
          </div>
        </div>
        <div className="contact-part">
          <h3>About Us</h3>
          <div className="program-context">
            <h4>Affiliate Program</h4>
            <h4>Online Delivary</h4>
            <h4>Refund & Return Policy</h4>
            <h4>Blog</h4>
          </div>
        </div>
        <div className="contact-part">
          <div className="program-context">
            <h4>EMI Terms</h4>
            <h4>Privacy Policy</h4>
            <h4>Star Point Policy</h4>
            <h4>Contact Us</h4>
          </div>
        </div>
        <div className="contact-part">
          <div className="program-context">
            <h4>About Us</h4>
            <h4>Terms & Condition</h4>
            <h4>Career</h4>
            <h4>Brands</h4>
          </div>
        </div>
        <div className="contact-part">
          <h3>Stay Connected</h3>
          <div className="program-context">
            <h5>Star Tech Ltd</h5>
            <h6>
              Head Office: 28 Kazi Nazrul Islam Ave,Navana Zohura Square, Dhaka
              1000
            </h6>
            <h4>
              Email: <br />
            </h4>
            <span>webteam@startechbd.com</span>
          </div>
        </div>
      </div>
      <div className="wrapper">
        <hr />
        <div className="copyright-area">
          <div>
            <p>© Star Tech Ltd | All rights reserved</p>
          </div>
          <div>
            <p>Powered By: Star Tech</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact