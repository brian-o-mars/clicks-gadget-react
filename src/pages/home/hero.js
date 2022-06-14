import React from "react";
import logo from "../../assets/logos/clicks-logo.png";
import "./hero.css";

const hero = () => {
  return (
    <div class="container col-xxl-8 px-4 py-5">
      <div class="row align-items-center justify-content-center g-5 py-5">
        <div class="col-10 col-sm-12 col-lg-4">
          <img
            src={logo}
            class="d-block mx-lg-auto img-fluid"
            alt="Clicks Logo"
            width="200"
            height="100"
            loading="lazy"
          />
        </div>
        <div class="col-lg-8">
          <h1 class="display-5 fw-bold lh-1 mb-3">
            Welcome to Clicksgadget<span class="hub">HUB</span>
            <br />
            <h2 className="small-txt">Phones | Laptops | Accessories</h2>
          </h1>
          <p class="lead">
            We are dealers in all kinds of Phones, Laptops and other gadget
            Accessories. We provide high quality gadgets that fit your
            lifestyle, whether it be for play or work, we are ready to sell
            items you would enjoy. Feel free to go over our{" "} 
            <a href="products.html" class="prod-link">
              products list
            </a> {" "}
            and place your orders today.
          </p>
          {/* <div class="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="button" class="btn btn-primary btn-lg px-4 me-md-2">
              Primary
            </button>
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Default
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default hero;
