import React from 'react';
import './Navigation_product.scss';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navigation_product = (props) => {
	const { items } = props;
	const [activeItem, setActiveItem] = useState(null);
	const selectItem = (index) => {
		setActiveItem(index);
	};
	console.log(activeItem);
	return (
		<div className='navigation_product'>
			<div className='navigation_product_block'>
				<ul>
					{items &&
						items.map((item, index) => {
							return (
								<NavLink
									to={item.url}
									key={`${item.id}, ${index}`}
									className={activeItem === index ? 'nav_active' : ''}
									onClick={() => selectItem(index)}>
									<li>{item.children}</li>
								</NavLink>
							);
						})}
				</ul>
			</div>
		</div>
	);
};

export default Navigation_product;
