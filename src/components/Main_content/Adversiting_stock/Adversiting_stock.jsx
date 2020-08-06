import React from 'react';
import './Adversiting_stock.scss';
import { NavLink } from 'react-router-dom';

const Adversiting_stock = (props) => {
	const { items } = props;
	return (
		<div className='adversiting_stock'>
			{props.adversitingStock &&
				props.adversitingStock.map((item) => {
					return (
						<div key={item.id} className='adversiting_stock_div'>
							<NavLink to={item.url}>
								<div className='adversiting_stock_block_img'>
									<img src={item.src} alt={''} />
								</div>
							</NavLink>
						</div>
					);
				})}
		</div>
	);
};

export default Adversiting_stock;
