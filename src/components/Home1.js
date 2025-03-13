import React from "react";
// importing Link from react-router-dom to navigate to
// different end points.
import { NavLink } from "react-router-dom";
import  './Home.css';
import Slider from "./Slider/Slider";
import about from './Images/About.png'
import viewpoint from './Images/viewpoint.png'
import maintenance from './Images/maintenance.png'
import food from './Images/food.png'
import hygiene from './Images/hygiene.png'
import pricetag from './Images/pricetag.png'
import award from './Images/award.png'
import WWcoverage from './Images/WWcoverage.png'
import logobrown from './Images/logobrown.png'
import wifi from './Images/wifi.png'
import gym from './Images/gym.png'
import spa from './Images/spa.png'
import transport from './Images/transport.png'
import game from './Images/game.png'
import breakfast from './Images/breakfast.png'
import Footer from "./Footer";
import OurRooms from "./OurRooms";
import Header from "./Header";
 
const Home = () => {
return (
    <React.Fragment>    
       
         {/* <img src={logobrown} className="logobrown" alt="logo"/>  */}
        {/* style={{marginTop:"-20px"}} */}
        <nav>
	<ul className='navBar'>
		<li className='homeli'>
			{/* Endpoint to route to Home component */}
			<a className='link' href="#hotelName">Home</a>
		</li>
		<li className='homeli'>
			{/* Endpoint to route to Receptionist component */}
			<NavLink to="/contact" className='link'>Contact</NavLink>
		</li>
        
        
		<li className='homeli'>
			{/* Endpoint to route to Manager component */}
			<NavLink to="/login" className='link'>Login</NavLink>
		</li>
        <li className='homeli'>
            {/* Endpoint to route to Owner component */}
		    <NavLink to="/signup" className='link'>Signup</NavLink>
        </li>
	</ul>
	</nav>
    <div className='hotelName' id="hotelName" >
         <div className="babaihotelName">OCEAN HEAVEN HOTEL</div>
        </div>
    
    <div className="slider"><Slider/></div>
    <div className="testimonialhome">
        <div className="testmonialtags"><img src={pricetag} className="testimoniallogos" alt="privetag" /><br/><h4>Competetive Pricing</h4><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p></div>
        <div className="testmonialtags"><img src={award} className="testimoniallogos" alt="award"/><br/><h4>Award winning service</h4><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p></div>
        <div className="testmonialtags"><img src={WWcoverage} className="testimoniallogos" alt="coverage"/><br/><h4>WorldWide Coverage</h4><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p></div>
    </div>
    <div className="corefeatures">
        <div className="corelogos">
            <img src={wifi} alt='wifi' className="corelogoimg"/><br/>
            Wifi
        </div>
        <div className="corelogos">
        <img src={gym} alt='gym' className="corelogoimg"/><br/>
            Gym
        </div>
        <div className="corelogos">
        <img src={spa} alt='spa' className="corelogoimg"/><br/>
            Spa
        </div>
        <div className="corelogos">
        <img src={transport} alt='transport' className="corelogoimg"/><br/>
            Transport
        </div>
        <div className="corelogos">
        <img src={breakfast} alt='breakfast' className="corelogoimg"/><br/>
            Breakfast
        </div>
        <div className="corelogos">
        <img src={game} alt='game' className="corelogoimg"/><br/>
            Game
        </div>
    </div>
    <div className="abouthotel">
    <h1>About</h1>
    <div className="gridabout">
       <div><div className="imagecenter"><img src={viewpoint} className="abouticons" alt="viewpoint"/><h4>View Point</h4></div>
        <p>The Ocean heaven hotel had started its base in vijayawada with classic look and attractive, it expanded drastically through the years and stated its stability as a Ocean heaven hotel of vijayawada.</p></div>
        <div><div className="imagecenter"><img src={maintenance} className="abouticons" alt="maintainance"/><h4>Maintenance</h4></div>
        <p>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p></div>
        <img src={about} className='aboutimage' alt="about"></img>
        <div><div className="imagecenter"><img src={food} className="abouticons" alt="food"/><h4>Food</h4></div><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p></div>
        <div><div className="imagecenter"><img src={hygiene} className="abouticons" alt="hygine"/><h4>Hygiene</h4></div><p>The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form.</p></div>
    </div>
 
 
 
    <OurRooms />
    </div>
   
   
    {/* <footer id="footer">
        <div>
            <p>BABAI HOTEL</p>
        </div>
        <div>
            <p>Project Doneby: Shivani</p>
        </div>
    </footer> */}
    </React.Fragment>
);
};
 
export default Home;