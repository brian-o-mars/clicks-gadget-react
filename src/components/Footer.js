import React from 'react'
import './footer.css'
import telephone from "../assets/logos/telephone-fill.svg";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <div className="container-fluid">
      <div className="row">
        <div className="col-12 col-md-4 text-center text-md-start">
          
          <Link to="/" className="nav-link" id='nav-link'   >Home</Link>
          <Link to="/products" className="nav-link" id='nav-link' >Products</Link>
          <Link to="/about" className="nav-link" id='nav-link' >About</Link>
          <Link to="/contact" className="nav-link" id='nav-link' >Contact</Link>
          
        </div>
        <div className="col-12 col-md-8 pt-3 text-center text-md-end">
          <h3 className="footnoteTop">Clicks Gadget <span className="hub">HUB</span></h3>
          <p className="footnoteBottom text-md-end">Dealer in Phones, Laptops and other gadget Accessories</p>
          <Link to="/contact"  ><a  className="btn btn-custom rounded-pill btn-rounded float-end" role="button">07034722635
            <span>
              <img src={telephone} alt="telephone icon" />
            </span></a></Link>
          {/* <a href="contacts.html" className="btn btn-custom rounded-pill btn-rounded float-end" role="button">07034722635
            <span>
              <img src={telephone} alt="telephone icon" />
            </span></a> */}
        </div>
      </div>
    </div>
    </div>
  )
}

export default Footer
