import React from 'react';
import { NavLink } from 'react-router-dom';

export const Adversiting_stock_block_div = ({ url, src }) => {
	return (
		<div className='adversiting_stock_div'>
			<NavLink to='#'>
				<div className='adversiting_stock_block_img'>
					<img src='app/img/adversiting_stock1.jpg' alt='' />
				</div>
			</NavLink>
		</div>
	);
};
