import React from 'react';
import './Content.scss';
const { NavLink } = require('react-router-dom');

const Content = (props) => {
	return (
		<div className='content'>
			<h1> Новинки сезона </h1>
			<div className='content_block'>
				<div className='content_img'>
					<NavLink to='#'>
						<img className='content_img_1' src='app/img/content1.jpg' />
					</NavLink>
				</div>
				<div className='content_img'>
					<NavLink to='#'>
						<img className='content_img_1' src='app/img/content2.jpg' />
					</NavLink>
				</div>
				<div className='content_img'>
					<NavLink to='#'>
						<img className='content_img_1' src='app/img/content3.jpg' />
					</NavLink>
				</div>
				<div className='content_img'>
					<NavLink to='#'>
						<img className='content_img_1' src='app/img/content4.jpg' />
					</NavLink>
				</div>
				<div className='content_img'>
					<NavLink to='#'>
						<img className='content_img_1' src='app/img/content5.jpg' />
					</NavLink>
				</div>
				<div className='content_img'>
					<NavLink to='#'>
						<img className='content_img_1' src='app/img/content6.jpg' />
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Content;
