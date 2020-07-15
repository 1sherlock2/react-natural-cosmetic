// eslint-disable-next-line
import React from 'react';
import './Stock.scss';
import { NavLink } from 'react-router-dom';
import { Block_stock } from '../../Utils/Small_components/Block_stock';

const Stock = (props) => {
	return (
		<div className='stock'>
			<div className='for_us'>
				{props.items &&
					props.items.map((item, index) => {
						return (
							<NavLink to={item.url} className='block_stock' key={item.id}>
								<div className='block_stock_div'>
									<img src={item.image === null ? item.image : '../../img/stock3.jpg'} alt={item.alt} />
									<div className='block_stock_p'>
										<p>{item.text}</p>
									</div>
									<div className='block_stock_span'>
										<span className='span_old_price'>{item.oldPrice}</span>
										<span className='span_new_price'>{item.newPrice}</span>
									</div>
								</div>
							</NavLink>
						);
					})}
			</div>
		</div>
	);
};

export default Stock;
