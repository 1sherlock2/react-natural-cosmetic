import React from 'react';
import { NavLink } from 'react-router-dom';

export const Content_img = ({ url, src }) => {
	return (
		<div className='content_img'>
			<NavLink to='#'>
				<img className='content_img_1' src='app/img/content1.jpg' />
			</NavLink>
		</div>
	);
};
