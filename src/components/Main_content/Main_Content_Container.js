import React from 'react';
import Wrapper_img_content_Container from './Wrapper_img_content/Wrapper_img_content_container';
import Content_Container from './Content/Content_Container';
import Navigation_product_Container from './Navigation_product/Navigation_product_Container';
import Stock_Container from './Stock_Container/Stock_Container';
import Adversiting_stock_Container from './Adversiting_stock/Adversiting_stock_Container';

const Main_content_Container = () => {
	return (
		<div>
			<Wrapper_img_content_Container />
			<Content_Container />
			<Navigation_product_Container />
			<Stock_Container />
			<Adversiting_stock_Container />
		</div>
	);
};

export default Main_content_Container;
