import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, NavLink} from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import AboutUs from "./pages/aboutus";
import Subscribe from "./pages/subscribe";
 


function App() {
  return (
    <BrowserRouter>
      <div styles={{
        display: 'flex',
        background: '#19B5A2',
        padding:'5px 0 5px 5px',
        fontSize: '20px'
      }}>
       <div style={{margin:'10px'}} class='navbar'>
				<NavLink to='/home' style={({isActive})=>({color:isActive ? 'grey':'white'})}>
					Home
				</NavLink>
				<NavLink to='/blog' style={({isActive})=>({color:isActive ? 'grey':'white'})}>
					Blog
				</NavLink>
				<NavLink to='/aboutus' style={({isActive})=>({color:isActive ? 'grey':'white'})}>
					AboutUs  
				</NavLink>
				<NavLink to='/subscribe' style={({isActive})=>({color:isActive ? 'grey':'white'})}>
					Subscribe
				</NavLink>
			</div> 
      </div>
      <Routes>
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/blog" element={<Blog/>}/>
        <Route exact path="/aboutus" element={<AboutUs/>}/>
        <Route exact path="/subscribe" element={<Subscribe/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
