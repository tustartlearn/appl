import React from "react";
import "./index.css";

function Index() {
  return (
    <div className="index">
      <div className="explore">
        <div className="scrollable-content">
          <div className="item">  
            <hr />
            <h3 className="item-title">Online Tests</h3> 
            
            <p className="item-description"> 
              Lorem ipsum about the service just 2 lines info
            </p>
          </div>
          <div className="item"> 
            <hr />
            <h3 className="item-title">Test Generator</h3> 
            
            <p className="item-description">
              Lorem ipsum about the service just 2 lines info
            </p>
          </div> 
          <div className="item"> 
            
            <h3 className="item-title">Evaluation Tool</h3> 
            <hr />   
            
            <p className="item-description">
              Lorem ipsum about the service just 2 lines info
            </p>
          </div>
          <div className="item">
            <h3 className="item-title">Homework</h3> 
            <hr />
            <p className="item-description">
              Lorem ipsum about the service just 2
              <br />
              <span>hkk</span>
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
