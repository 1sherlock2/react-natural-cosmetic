import React, { useEffect, useState } from 'react';
import Wrapper_img_content from './Wrapper_img_content/Wrapper_img_content';
import Content from './Content/Content';
import Navigation_product from './Navigation_product/Navigation_product';
import Stock from './Stock_Container/Stock';
import Adversiting_stock from './Adversiting_stock/Adversiting_stock';
import { connect } from 'react-redux';
import { mainContentThunk } from '../../redux/reducers/main_content_reducers/MainContentReducer';

const Main_content_Container = (props) => {
	const [activeWrapperImgContent, setActiveWrapperImgContent] = useState(0);
	let count = 0;

	console.log(activeWrapperImgContent);
	const selectItemPrev = () => (count) => {
		setActiveWrapperImgContent(--count);
	};

	const selectItemNext = () => (count) => {
		setActiveWrapperImgContent(++count);
	};

	useEffect(() => {
		props.mainContentThunk();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div>
			<Wrapper_img_content
				wrapperImgContent={props.wrapperImgContent}
				activeWrapperImgContent={activeWrapperImgContent}
				selectItemPrev={selectItemPrev}
				selectItemNext={selectItemNext}
				count={count}
			/>
			<Content content={props.content} />
			<Navigation_product navigationProduct={props.navigationProduct} />
			<Stock stocksMain={props.stocksMain} />
			<Adversiting_stock adversitingStock={props.adversitingStock} />
		</div>
	);
};

let mapStateToProps = (state) => ({
	wrapperImgContent: state.mainContentData.wrapperImgContent,
	content: state.mainContentData.content,
	navigationProduct: state.mainContentData.navigationProduct,
	stocksMain: state.mainContentData.stocksMain,
	adversitingStock: state.mainContentData.adversitingStock
});

export default connect(mapStateToProps, { mainContentThunk })(Main_content_Container);
