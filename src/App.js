import React from 'react'; 
import './App.css';
import { Router } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar.js';  
import Content from './components/body/content.js';  
import Explore from './components/Explore more/Explore.js'; 
import Index from './components/scrollbar/Index.js'; 
import Footer from './components/footer/Footer.js';


function App() {
  return (
      <div>
        <Navbar />     
        <Content />  
        <Explore />
        <Index /> 
        <Footer />
      
      </div> 
      
  );
}

export default App;

