import React from 'react'
import './homeSec.css'
import homepg1 from "../../assets/Images/home-page1.jpg";
import homepg2 from "../../assets/Images/home-page2.jpg";
import homepg3 from "../../assets/Images/home-page3.jpg";



const homeSec = () => {
  return (
    <div>
      <div class="row" >
        <div class="col-12  col-md-6 white-txt section-txt red-bg">
          <h1>HIGH QUALITY GADGETS MEANT FOR YOU</h1>
          <h5>Tell us what you what and we would source them for you</h5>
        </div>
        <div class="col-12 col-md-6 img" style={{backgroundColor:"white", padding: "0"}}>
          <img src={homepg1} class="rounded img-fluid homeImg" alt="" />
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6">
          <img src={homepg2} class="rounded img-fluid homeImg" alt="" />

        </div>
        <div class="col-12 col-md-6 section-txt">
          <h1>VISIT OUR OFFICE AND RECEIVE PROFESSIONAL SERVIES</h1>
          <p>No. 4 Francis Oremeji Street (His Grace Plaza) Computer Village, Ikeja, Lagos State</p>
        </div>
      </div>
      <div class="row">
        <div class="col-12 col-md-6 white-txt section-txt red-bg">
          <h1>ACCESSORIES THAT FIT YOUR LIFESTYLE</h1>
          <p>Ever want to feel techy, we got you covered</p>
        </div>
        <div class="col-12 col-md-6 img">
          <img src={homepg3} class="rounded img-fluid homeImg" alt="" />
        </div>
      </div>
    </div>
  )
}

export default homeSec
