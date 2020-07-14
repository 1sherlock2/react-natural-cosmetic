import React from 'react';
import './Navigation_product.scss';

const Navigation_product = (props) => {
	return (
		<div className='navigation_product'>
			<div className='navigation_product_block'>
				<ul>
					<li className='navigation_product_for_us' id='navigation_product_for_us_id'>
						<span className='navigation_product_for_us_span'>Для вас</span>
					</li>
					<li className='navigation_product_best_sellers' id='navigation_product_best_sellers_id'>
						<span className='navigation_product_best_sellers_span'>Бестселлеры</span>
					</li>
					<li className='navigation_product_new_collection' id='navigation_product_new_collection_id'>
						<span className='navigation_product_new_collection_span'>Новенькое</span>
					</li>
					<li className='navigation_product_idea_for_gift' id='navigation_product_idea_for_gift_id'>
						<span className='navigation_product_idea_for_gift_span'>Идеи для подарка</span>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navigation_product;
