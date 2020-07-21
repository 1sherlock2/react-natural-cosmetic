import React from 'react';
import Navigation_product from './Navigation_product';
import { connect } from 'react-redux';

const Navigation_product_Container = (props) => {
	// let items = [
	// 	{ id: 1, url: '#', children: 'Для вас' },
	// 	{ id: 2, url: '#', children: 'Бестселлеры' },
	// 	{ id: 3, url: '#', children: 'Новенькое' },
	// 	{ id: 4, url: '#', children: 'Идеи для подарка' }
	// ];
	return <Navigation_product items={props.items} />;
};

let mapStateToProps = (state) => {
	return {
		items: state.navigationProductData.items
	};
};

export default connect(mapStateToProps, {})(Navigation_product_Container);
