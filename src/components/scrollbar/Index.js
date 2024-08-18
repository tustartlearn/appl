import React from "react";
import "./index.css"; 
import logo from "..//../assets/logo.png"

function Index() {
  return (
    <div className="index">
      <div className="explore">
        <div className="scrollable-content">
        <div className="item">  
            <img src={logo} alt="" />
            <hr />
            <h3 className="item-title">Test Generator</h3> 
            
            <p className="item-description">
              Lorem ipsum about the 
              <br />Lorem ipsum dolor sit.
            </p>
          </div> 
          <div className="item">  
            <img src={logo} alt="" />
            <hr />
            <h3 className="item-title">Test Generator</h3> 
            
            <p className="item-description">
              Lorem ipsum about the 
              <br />Lorem ipsum dolor sit.
            </p>
          </div> 
          <div className="item">  
            <img src={logo} alt="" />
            <hr />
            <h3 className="item-title">Test Generator</h3> 
            
            <p className="item-description">
              Lorem ipsum about the 
              <br />Lorem ipsum dolor sit.
            </p>
          </div> 
          <div className="item">  
            <img src={logo} alt="" />
            <hr />
            <h3 className="item-title">Test Generator</h3> 
            
            <p className="item-description">
              Lorem ipsum about the 
              <br />Lorem ipsum dolor sit.
            </p>
          </div> 
          
        </div>
      </div>
      <div className="description">
        <p className="main-text">Above Links for:</p>
        <p className="links-list">
          JEE Practice Tests, NEET Practice Tests, School Tests, 10th Board
          Tests, 12th Board Tests, General Tests, Career Orientation, IQ Tests,
          Personality Tests, General Aptitude Tests, etc.
        </p>
      </div>
    </div>
  );
}

export default Index;
