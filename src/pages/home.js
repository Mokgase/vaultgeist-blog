import React from 'react';
import "../css/style.css";
import { Link } from 'react-router-dom';
import vaultgeist_badge from '../components/images/vaultgeist_badge.png';

const Home = () => {
return (
	
	<div>
	<img className='vaultgeist_badge' src= {vaultgeist_badge} alt= "vaultgeist logo" />;

	<h1>Vaultgeist home page</h1>
	<br/>
	
  <Link to="/subscribe">
	  <button>Join our family</button>
  </Link>
  
	</div>
	
	
);
};

export default Home;
