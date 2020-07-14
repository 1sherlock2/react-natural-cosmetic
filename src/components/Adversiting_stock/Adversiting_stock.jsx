import React from 'react';
import './Adversiting_stock.scss';
import { NavLink } from 'react-router-dom';

const Adversiting_stock = (props) => {
	return (
		<div className='adversiting_stock'>
			<div className='adversiting_stock_div'>
				<NavLink to='#'>
					<div className='adversiting_stock_block_img'>
						<img src='app/img/adversiting_stock1.jpg' alt='' />
					</div>
				</NavLink>
			</div>
			<div className='adversiting_stock_div'>
				<NavLink to='#'>
					<div className='adversiting_stock_block_img'>
						<img src='app/img/adversiting_stock2.jpg' alt='' />
					</div>
				</NavLink>
			</div>
			<div className='adversiting_stock_div'>
				<NavLink to='#'>
					<div className='adversiting_stock_block_img'>
						<img src='app/img/adversiting_stock3.jpg' alt='' />
					</div>
				</NavLink>
			</div>
			<div className='adversiting_stock_div'>
				<NavLink to='#'>
					<div className='adversiting_stock_block_img'>
						<img src='app/img/adversiting_stock4.jpg' alt='' />
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default Adversiting_stock;
