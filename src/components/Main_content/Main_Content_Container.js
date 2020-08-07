import React, { useEffect, useState } from 'react';
import Wrapper_img_content from './Wrapper_img_content/Wrapper_img_content';
import Content from './Content/Content';
import Navigation_product from './Navigation_product/Navigation_product';
import Stock from './Stock_Container/Stock';
import Adversiting_stock from './Adversiting_stock/Adversiting_stock';
import { connect } from 'react-redux';
import { adversitingStockThunk } from '../../redux/reducers/main_content_reducers/AdversitingStock';
import { stockMainThunk } from '../../redux/reducers/main_content_reducers/StocksMain';
import { navigationProductThunk } from '../../redux/reducers/main_content_reducers/NavigationProductReducer';
import { contentThunk } from '../../redux/reducers/main_content_reducers/ContentReducer';
import { wrapperImgContentThunk } from '../../redux/reducers/main_content_reducers/WrapperImgContentReducer';

const Main_content_Container = (props) => {
	// constructor(props) {
	// 	super(props);
	// }
	const wrapperImgContent = [
		{
			id: 0,
			url: '#',
			src: 'https://www.letu.ru/common/img/banners/fedaugust_390x200.jpg'
		},
		{
			id: 1,
			url: '#',
			src: 'https://www.letu.ru/common/img/banners/artdeco_gwp_jul20_390x200.jpg'
		},
		{
			id: 2,
			url: '#',
			src: 'https://www.letu.ru/common/img/banners/opening_stores_may20_390x200_2.jpg'
		},
		{
			id: 3,
			url: '#',
			src: 'https://www.letu.ru/common/img/banners/sunscreens_jun20_390x200.jpg'
		},
		{
			id: 4,
			url: '#',
			src: 'https://www.letu.ru/common/img/banners/hermes_gwp_jun20_390x200.jpg'
		},
		{
			id: 5,
			url: '#',
			src: 'https://www.letu.ru/common/img/banners/ma_gwp_jun20_390x200.jpg'
		}
	];
	const content = [
		{
			id: 1,
			url: '#',
			src: 'img/content1.jpg'
		},
		{
			id: 2,
			url: '#',
			src: 'img/content2.jpg'
		},
		{
			id: 3,
			url: '#',
			src: 'img/content3.jpg'
		},
		{
			id: 4,
			url: '#',
			src: 'img/content4.jpg'
		},
		{
			id: 5,
			url: '#',
			src: 'img/content5.jpg'
		},
		{
			id: 6,
			url: '#',
			src: 'img/content6.jpg'
		}
	];
	const navigationProduct = [
		{
			id: 1,
			url: '#',
			children: 'Для вас'
		},
		{
			id: 2,
			url: '#',
			children: 'Бестселлеры'
		},
		{
			id: 3,
			url: '#',
			children: 'Новенькое'
		},
		{
			id: 4,
			url: '#',
			children: 'Идеи для подарка'
		}
	];
	const stocksMain = [
		{
			id: 1,
			image: '../../img/stock1.jpg',
			text: 'Zo Skin health ossential daily power defense. Ежедневное защитное средство, 50мл',
			oldPrice: 11000,
			newPrice: 8050,
			url: '#',
			alt: '#'
		},
		{
			id: 2,
			image: '../../img/stock2.jpg',
			text: "'Zo*Skin health effects expliating polish anti-aging formula",
			oldPrice: 5250,
			newPrice: 4075,
			url: '#',
			alt: ''
		},
		{
			id: 3,
			image: '../../img/stock3.jpg',
			text: '3',
			oldPrice: 5250,
			newPrice: 4075,
			url: '3',
			alt: ''
		},
		{
			id: 4,
			image: '../../img/stock4.jpg',
			text: '3',
			oldPrice: 5250,
			newPrice: 4075,
			url: '#',
			alt: ''
		},
		{
			id: 5,
			image: '../../img/stock5.jpg',
			text: '3',
			oldPrice: 5250,
			newPrice: 4075,
			url: '#',
			alt: ''
		},
		{
			id: 6,
			image: '../../img/stock6.jpg',
			text: 'Weekend',
			oldPrice: 5250,
			newPrice: 4075,
			url: '#',
			alt: ''
		},
		{
			id: 7,
			image: '../../img/stock7.jpg',
			text: 'Nina',
			oldPrice: 5250,
			newPrice: 4075,
			url: '#',
			alt: ''
		},
		{
			id: 8,
			image: '../../img/stock8.jpg',
			text: 'Bright Crystal',
			oldPrice: 5250,
			newPrice: 4075,
			url: '#',
			alt: ''
		}
	];
	const adversitingStock = [
		{
			id: 1,
			url: '#',
			src: 'app/img/adversiting_stock1.jpg'
		},
		{
			id: 2,
			url: '#',
			src: 'app/img/adversiting_stock2.jpg'
		},
		{
			id: 3,
			url: '#',
			src: 'app/img/adversiting_stock3.jpg'
		},
		{
			id: 4,
			url: '#',
			src: 'app/img/adversiting_stock4.jpg'
		}
	];
	// componentDidMount() {
	// 	this.props.adversitingStockThunk();
	// 	this.props.stockMainThunk();
	// 	this.props.navigationProductThunk();
	// 	this.props.contentThunk();
	// 	this.props.wrapperImgContentThunk();
	// }
	// render() {
	return (
		<div>
			<Wrapper_img_content wrapperImgContent={wrapperImgContent} />
			<Content content={content} />
			<Navigation_product navigationProduct={navigationProduct} />
			<Stock stocksMain={stocksMain} />
			<Adversiting_stock adversitingStock={adversitingStock} />
		</div>
	);
};
// }

let mapStateToProps = (state) => ({
	...state
	// 	wrapperImgContentData: state.wrapperImgContentData.wrapperImgContent,
	// 	contentData: state.contentData.content,
	// 	navigationProductData: state.navigationProductData.navigationProduct,
	// 	stockMainData: state.stockMainData.stocksMain,
	// 	adversitingStockData: state.adversitingStockData.adversitingStock
});

export default connect(mapStateToProps, { wrapperImgContentThunk, contentThunk, navigationProductThunk, stockMainThunk, adversitingStockThunk })(
	Main_content_Container
);
