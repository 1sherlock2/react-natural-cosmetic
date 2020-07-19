import React, { useState } from 'react';
import Stocks from './Stocks';
import { connect } from 'react-redux';
import Stock_Container from '../Main_content/Stock_Container/Stock_Container';

const Stocks_Container = (props) => {
	const defaultProps = {
		img: 'https://images.unsplash.com/photo-1594651103761-4c88c06a7abe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=800',
		stocksInformation: 'Today we are presentation new collections stock available'
	};

	const product = {
		id: 1,
		name: 'name1',
		img: 'img/stock1.jpg',
		description: 'description1',
		types: [0, 1],
		text: ['optom', 'roznica', 'shtuka'],
		price: 'price1',
		reviews: 'reviews1'
	};

	const items = [
		{ id: 1, name: 'name1', img: 'img/stock1.jpg', description: 'description1', price: 'price1', reviews: 'reviews1' },
		{ id: 2, name: 'name2', img: 'img/stock2.jpg', description: 'description2', price: 'price2', reviews: 'reviews2' },
		{ id: 3, name: 'name3', img: 'img/stock3.jpg', description: 'description3', price: 'price3', reviews: 'reviews3' },
		{ id: 4, name: 'name4', img: 'img/stock4.jpg', description: 'description4', price: 'price4', reviews: 'reviews4' },
		{ id: 5, name: 'name5', img: 'img/stock5.jpg', description: 'description5', price: 'price5', reviews: 'reviews5' },
		{ id: 6, name: 'name6', img: 'img/stock6.jpg', description: 'description6', price: 'price6', reviews: 'reviews6' },
		{ id: 7, name: 'name7', img: 'img/stock7.jpg', description: 'description7', price: 'price7', reviews: 'reviews7' },
		{ id: 8, name: 'name8', img: 'img/stock8.jpg', description: 'description8', price: 'price8', reviews: 'reviews8' },
		{ id: 9, name: 'name9', img: 'img/stock9.jpg', description: 'description9', price: 'price9', reviews: 'reviews9' },
		{ id: 10, name: 'name10', img: 'img/stock1.jpg', description: 'description10', price: 'price10', reviews: 'reviews10' }
	];

	const [activePriceDifferent, setActivePriceDifferent] = useState(product.types[0]);
	const selectItem = (index) => {
		setActivePriceDifferent(index);
	};

	return <Stocks items={items} defaultProps={defaultProps} product={product} activePriceDifferent={activePriceDifferent} selectItem={selectItem} />;
};

// Stock_Container.defaultProps = {
// 	defaultImg:
// 		'https://images.unsplash.com/photo-1594651103761-4c88c06a7abe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=401&q=800',
// 	stocksInformation: 'Today we are presentation new collections stock available'
// };

let mapStateToProps = (state) => {
	return { ...state };
};
export default connect(mapStateToProps, {})(Stocks_Container);
