import React from 'react';
import './Stocks.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';

const Stocks = (props) => {
	return (
		<div className='container-fluid'>
			<div className='stock_container_info'>
				{!props.product ? (
					<div>
						<h1> Default Props </h1>
					</div>
				) : (
					<div className='card'>
						<img className='card-img-top' src={props.product.img} alt='Card image cap' />
						<div className='card-body'>
							<h5 className='card-title'>{props.product.name}</h5>
							<p className='card-text'>{props.product.description} </p>
							<div className='price_different'>
								{props.product.text.map((item, index) => (
									<span
										key={index}
										onClick={() => props.selectItem(index)}
										className={classNames({
											active: props.activePriceDifferent === index,
											disable: !props.product.types.includes(index)
										})}>
										{item}
									</span>
								))}
							</div>
							<ul className='list-group list-group-flush'>
								<li className='list-group-item product_price'>{props.product.price}</li>
								<li className='list-group-item'>{props.product.reviews}</li>
							</ul>
						</div>
					</div>
				)}
			</div>
			<div className='stock_container_products'>
				{props.items &&
					props.items.map((item) => {
						return (
							<NavLink to='#'>
								<div className='card'>
									<img className='card-img-top' src={item.img} alt='Card image cap' />
									<div className='card-body'>
										<p className='card-text'>{item.name} </p>
									</div>
								</div>
							</NavLink>
						);
					})}
			</div>
		</div>
	);
};

export default Stocks;
