import React from 'react';
import { NavLink } from 'react-router-dom';

export const Block_stock = ({ url, image, alt, text, oldPrice, newPrice }) => {
	return (
		<NavLink to={url} className='block_stock'>
			<div className='block_stock_div'>
				<img src={image} alt={alt} />
				<div className='block_stock_p'>
					<p>{text}</p>
				</div>
				<div className='block_stock_span'>
					<span className='span_old_price'>{oldPrice}</span>
					<span className='span_new_price'>{newPrice}</span>
				</div>
			</div>
		</NavLink>
	);
};
