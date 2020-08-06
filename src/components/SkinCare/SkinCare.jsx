import React from 'react';
import './SkinCare.scss';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { Categories } from '../Utils/Categories/Categories';

const SkinCare = (props) => {
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
								<div className='default_block'>
									<img src={props.isLoaded.img} alt='stocks' />
									<div className='default_block_otherInformation'>{props.isLoaded.otherInformation}</div>
								</div>
							)}
						</div>
					) : (
						props.product &&
						props.product.map((item, index) => {
							return (
								<div>
									<div className='card card_elements' key={`${item.id} ${index}`}>
										<img className='card-img-top' src={item.img} alt='Card image cap' />
										<div className='card-body'>
											<h5 className='card-title'>{item.name}</h5>
											<p className='card-text'>{item.description} </p>
											<div className='price_different'>
												{item.text.map((element, index) => (
													<span
														key={`${element.id} ${index}`}
														onClick={() => props.selectItem(index)}
														className={classNames({
															active: props.activePriceDifferent === index
														})}>
														{element}
													</span>
												))}
											</div>
											<ul className='list-group list-group-flush'>
												{props.priceIndex === 0 ? (
													<div>
														<div className='btn-group stocks_count'>
															<div className='stocks_count_span'>
																<button
																	type='button'
																	className='btn btn-secondary btn-secondary_1'
																	onClick={() => props.decreaseCount()}>
																	-
																</button>
																<span>{props.count}</span>
																<button
																	type='button'
																	className='btn btn-secondary btn-secondary_2'
																	onClick={() => props.increaseCount()}>
																	+
																</button>
															</div>
															<div className='stocks_count_ul'>
																<div className='list-group-item product_price'>{item.price} $</div>
															</div>
														</div>
													</div>
												) : (
													<div className='stocks_count_ul'>
														<div className='list-group-item product_price price_different_roznica'>{item.price} $</div>
													</div>
												)}
											</ul>
											<button onClick={() => props.addInBasket(item, props.count)}>Добавить в корзину</button>
										</div>
									</div>
									<div сlassName='reviews'>
										<h3> Отзывы: </h3>
										<div className='card'>
											<div className='card-body'>
												<h5 className='card-title'>Card title</h5>
												<h6 className='card-subtitle mb-2 text-muted'>Card subtitle</h6>
												<p className='card-text'>
													Some quick example text to build on the card title and make up the bulk of the card's content.
												</p>
												<span href='#' className='card-link'>
													Card link
												</span>
												<span href='#' className='card-link'>
													Another link
												</span>
											</div>
										</div>
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
									<div className='card' key={`${index} ${item.id}`} onClick={() => props.selectItemsDispatch(item.id)}>
										<img className='card-img-top' src={item.img} alt='Card image cap' />
										<div className='card-body'>
											<div className='card_body_grid'>
												<p className='card-text card_items_name'>{item.name} </p>
												<p className='card-text card_items_brend'>{item.brend} </p>
												<p className='card-text card_items_price'>{item.price} р.</p>
											</div>
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

export default SkinCare;
