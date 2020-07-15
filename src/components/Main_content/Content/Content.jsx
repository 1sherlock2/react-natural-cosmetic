import React from 'react';
import './Content.scss';
const { NavLink } = require('react-router-dom');

const Content = (props) => {
	const { items } = props;
	return (
		<div className='content'>
			<h1> Новинки сезона </h1>
			<div className='content_block'>
				{items &&
					items.map((item) => {
						return (
							<div key={item.id} className='content_img'>
								<NavLink to={item.url}>
									<img className='content_img_1' src={item.src} />
								</NavLink>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Content;
