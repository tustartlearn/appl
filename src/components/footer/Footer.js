import React from 'react'  
import whatsapp from '..//../assets/whatsapp.png'
import './footer.css'

function Footer() {
  return (
    <>
      <div className="footer-content">
        <div className="footer1">
            <p>Lovemytest</p> 
            <input type="text" name="" id="" placeholder='Practice '/> 
            <ul className='social'>
              <li> <img src={whatsapp} alt="" />  </li> 
              <li> <img src={whatsapp} alt="" /></li>   
              <li> <img src={whatsapp} alt="" /></li> 
              <li> <img src={whatsapp} alt="" /></li> 
              <li> <img src={whatsapp} alt="" /></li> 
              
            </ul>
        </div> 
       
        <div className="footer2">
          <ul> 
            <p>Support</p>
            <li><a href="/">Home</a></li>
            <li><a href="/">Our Story</a></li>
            <li><a href="/">Achivement</a></li> 
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Privacy</a></li>
            <li><a href="/">Term & Condition</a></li>
          </ul>
        </div>
        <div className="footer3"> 
          <p>Tests</p>
          <li><a href=""></a>Custom link</li>  
          <li><a href=""></a>Custom link</li> 
          <li><a href=""></a>Custom link</li> 
          <li><a href=""></a>Custom link</li> 
          <li><a href=""></a>Custom link</li>  
          <li><a href=""></a>Custom link</li> 
          
          
      
        </div> 
        <div className="footer4">  
          <p>Quick Link</p>
        <li><a href=""></a>Scan</li> 
        <li><a href=""></a>Contact us</li> 
        <li><a href=""></a>Become Franchise</li> 
        <li><a href=""></a>Custom link</li> 
        <li><a href=""></a>Custom link</li> 
        <li><a href=""></a>Custom link</li> 
          

        </div> 
        <div className="footer5">  
          <p>Resource</p> 
          <li><a href=""></a>Custom link</li> 
          <li><a href=""></a>Custom link</li> 
          <li><a href=""></a>Custom link</li> 
          <li><a href=""></a>Custom link</li> 
          <li><a href=""></a>Custom link</li> 
          <li><a href=""></a>Custom link</li> 

        </div>
      </div>
    </>
  )
}

export default Footer;
