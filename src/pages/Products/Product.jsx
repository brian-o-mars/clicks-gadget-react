import React from "react";
import './product.css'
import { Link } from 'react-router-dom';


function Product(props) {
  
  
    const data = props.prod;
    console.log(typeof(data.image));
    return (

      <div >
        
        <div className="card mx-auto" style={{width: "18rem"}}>
              <img src={data.image} className="card-img-top pt-2" alt="" />
              <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <p className="card-text">{data.desc}</p>
                <p className="card-text">{data.price}</p>
                <Link to="/contact"  ><a href="contacts.html" className="btn red-btn rounded-pill btn-prod-custom">Contact us to buy</a></Link>
              </div>
            </div>
            
      </div>
    
    );
}

export default Product;
