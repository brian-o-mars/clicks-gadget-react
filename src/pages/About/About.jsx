import React from 'react'
import clicksLogo from "../../assets/logos/clicks-logo.png";

function About() {
  return (
    <main className="hero text-center mb-5">
    <div className="container">
      <aside className="left-col"><img src={clicksLogo} className = "banner" alt="Clicks gadget logo" width="200" 
        height="200"/></aside>
      
      <article className="about-article">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum tempore, dicta eligendi facilis recusandae tenetur ea, explicabo obcaecati distinctio delectus, non aspernatur dolorum itaque excepturi! Placeat voluptate quos enim sint.
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate, fuga autem in nemo ipsa, incidunt eveniet hic provident repellat iure ea quasi. Eveniet iste officiis accusamus impedit, nulla aliquam ipsum!
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam porro illum rerum, id repellendus, eaque sunt ullam, doloremque quidem necessitatibus expedita excepturi eius quisquam harum voluptatum magni numquam nam incidunt?
      </article>
      </div>
  </main>
  )
}

export default About
