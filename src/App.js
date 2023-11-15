import React from 'react';
import './css/style.css';
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import AboutUs from "./pages/aboutus";
import Subscribe from "./pages/subscribe";
import ContactUs from "./pages/contactus";
// import Image from 'react-image-resizer';
// import Resizer from "react-image-file-resizer";
import vaultgeist_badge from '../src/components/images/vaultgeist_badge.png';

 


function App() {
  return (
   
    
    <BrowserRouter>
      <div
      //  styles={{
      //   display: 'flex',
      //   background: '#19B5A2',
      //   padding:'5px 0 5px 5px',
      //   fontSize: '20px' }}
        >
        
       <div style={{margin:'10px'}} class='navbar'>
       <img className='vaultgeist_badge' src= {vaultgeist_badge} alt= "vaultgeist logo" />
       {/* <Image 
      img src={vaultgeist_badge} 
      alt="vaultgeist logo" 
      class="center"
    /> */}

				<NavLink to='/home' style={({isActive})=>({color:isActive ? 'grey':'black'})}>
					Home
				</NavLink>
				<NavLink to='/blog' style={({isActive})=>({color:isActive ? 'grey':'black'})}>
					Blog
				</NavLink>
				<NavLink to='/aboutus' style={({isActive})=>({color:isActive ? 'grey':'black'})}>
					AboutUs  
				</NavLink>
				<NavLink to='/subscribe' style={({isActive})=>({color:isActive ? 'grey':'black'})}>
					Subscribe
				</NavLink>
        <NavLink to='/contactus' style={({isActive})=>({color:isActive ? 'grey':'black'})}>
					ContactUs
				</NavLink>
			</div> 
      </div>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
        <Route exact path="/aboutus" element={<AboutUs/>}/>
        <Route exact path="/subscribe" element={<Subscribe/>}/>
        <Route exact path="/contactus" element={<ContactUs/>}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
