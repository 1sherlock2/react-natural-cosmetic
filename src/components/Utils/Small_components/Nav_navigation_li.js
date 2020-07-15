import React from 'react';
import { NavLink } from 'react-router-dom';

export const Nav_navigation_li = ({ key, url, children, activeItem, index, selectItem }) => {
	return (
		<li key={index} className={activeItem === index ? 'active' : ''} onClick={() => selectItem(index)}>
			<NavLink to={url} class='a_navigation'>
				{children}
			</NavLink>
		</li>
	);
};
