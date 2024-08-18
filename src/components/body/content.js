import React from "react";
import "./content.css";
import student from "../../assets/student.png";

function Content() {
  return (
    <div className="content">
      <div className="img">
        <img src={student} alt="Student" />
      </div>
      <div className="text">
        <h1>Make Your Own Tests</h1>
        <h2>
          <span>And Practice At Home</span>
        </h2>
        <div className="list">
          <ul>
            <li>JEE,NEET Practice</li>
            <li>10th Board Exam</li>
            <li>School Subjects 6 to 12</li>
            <li>Competitive Exams</li>
          </ul>
          <ul>
            <li>Career Aptitude Tests</li>
            <li>12th Board Exam</li>
            <li>Personality Tests</li>
            <li>IQ Test</li>
          </ul>
        </div>
        <div className="offer">
          <div className="offer-container">
            <p className="offer-text">Special Inaugural Offer</p>
            <p className="discount-text">50% OFF</p>
          </div>
          <div className="sign">
            <div className="Sign-up">
              <a href="">Sign Up <br /> Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;