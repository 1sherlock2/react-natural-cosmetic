import React from 'react';
import './Stocks.scss';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames';
import { Categories } from '../Utils/Categories/Categories';

const Stocks = (props) => {
	return (
		<div>
			<Categories
				selectCategoriesItem={props.selectCategoriesItem}
				selectCategoriesItemFunc={props.selectCategoriesItemFunc}
				activeCategoried={props.activeCategoried}
				selectCategories={props.selectCategories}
				categories={props.categories}
				defaultHeaderName={props.defaultHeaderName}
			/>
			<div className='container-fluid'>
				<div className='stock_container_info'>
					{!props.product ? (
						<div>
							{props.isLoaded && (
								<div>
									<img src={props.isLoaded.img} alt='stocks' />
									<div>{props.isLoaded.stocksInformation}</div>
								</div>
							)}
						</div>
					) : (
						props.product &&
						props.product.map((item, index) => {
							return (
								<div className='card' key={index}>
									<img className='card-img-top' src={item.img} alt='Card image cap' />
									<div className='card-body'>
										<h5 className='card-title'>{item.name}</h5>
										<p className='card-text'>{item.description} </p>
										<div className='price_different'>
											{item.text.map((item, index) => (
												<span
													key={index}
													onClick={() => props.selectItem(index)}
													className={classNames({
														active: props.activePriceDifferent === index
														// disable: !props.product.types.includes(index)
													})}>
													{item}
												</span>
											))}
										</div>
										<ul className='list-group list-group-flush'>
											<div>
												<div className='btn-group stocks_count'>
													<div className='stocks_count_span'>
														<button type='button' class='btn btn-secondary' onClick={props.decreaseCount}>
															-
														</button>
														<span>{props.count}</span>
														<button type='button' class='btn btn-secondary' onClick={props.increaseCount}>
															+
														</button>
													</div>
													<div className='stocks_count_ul'>
														<ul className='list-group list-group-flush'>
															<li className='list-group-item product_price'>{item.price} $</li>
														</ul>
													</div>
												</div>
												<div>
													<li className='list-group-item product_price'>{item.price}</li>
												</div>
											</div>
											<li className='list-group-item'>{item.reviews}</li>
										</ul>
									</div>
								</div>
							);
						})
					)}
				</div>
				<div className='stock_container_products'>
					{props.items &&
						props.items.map((item, index) => {
							return (
								<NavLink to='#'>
									<div className='card' key={item.id} onClick={() => props.selectStockDispatch(index)}>
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
		</div>
	);
};

export default Stocks;
