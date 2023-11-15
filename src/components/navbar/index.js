import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<NavMenu>
		<NavLink to='/home' activeStyle>
			Home
		</NavLink>
		<NavLink to='./pages/blog' activeStyle>
			Blog
		</NavLink>
		<NavLink to='/aboutus' activeStyle>
			AboutUs
		</NavLink>
		<NavLink to='/subscribe' activeStyle>
			Subscribe
		</NavLink>
		</NavMenu>
		<NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		<NavBtnLink to='/signup'>Sign Up</NavBtnLink>
		</NavBtn>
	</Nav>
	</>
);
};

export default Navbar;
