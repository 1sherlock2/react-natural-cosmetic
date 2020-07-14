import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav_navigation_li = ({ url, children }) => {
	return (
		<li id='nav_navigation_li'>
			<NavLink to={url} class='a_navigation'>
				{children}
			</NavLink>
		</li>
	);
};
