import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export const Navbar = () => {
	//const { loading, error, dispatch } = useContext(AuthContext);

	return (
		<div className='navbar'>
			<div className='navContainer'>
				<Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
					<span className='logo'>Hi Fly</span>
				</Link>
				<div className='navItems'>
					<button className='navButton'>Register</button>
					<button className='navButton'>Login</button>
				</div>
			</div>
		</div>
	);
};
