import React from 'react';
import './Wrapper_navigation.scss';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

const Wrapper_navigation = (props) => {
	const [activeItem, setActiveItem] = useState(null);
	const selectItem = (index) => {
		setActiveItem(index);
	};
	const { items } = props;
	return (
		<div className='wrapper_navigation'>
			<div className='nav_navigation' id='nav'>
				<div className='nav_burger'>
					<span></span>
				</div>
				<ul className='ul_navigation'>
					{items &&
						items.map((name, index) => {
							return (
								<NavLink
									to={name.url}
									key={name.id}
									className={activeItem === index ? 'nav_active' : ''}
									onClick={() => selectItem(index)}>
									<li>{name.children}</li>
								</NavLink>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default Wrapper_navigation;
