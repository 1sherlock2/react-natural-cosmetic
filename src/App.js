import React from 'react';
import './App.scss';
import Wrapper_title_Container from './components/Wrapper_title/Wrapper_title_Container';
import Wrapper_navigation_Container from './components/Wrapper_navigation/Wrapper_navigation_Container';
import Wrapper_img_content_Container from './components/Wrapper_img_content/Wrapper_img_content_container';
import { withRouter, BrowserRouter, Route } from 'react-router-dom';
import Content_Container from './components/Content/Content_Container';
import Navigation_product_Container from './components/Navigation_product/Navigation_product_Container';
import Stock_Container from './components/Stock/Stock_Container';
import Adversiting_stock_Container from './components/Adversiting_stock/Adversiting_stock_Container.';
import { Provider } from 'react-redux';
import store from './redux/store/Store';

const App = () => {
	return (
		<div className='container-natural'>
			<Route>
				<Wrapper_title_Container />
				<Wrapper_navigation_Container />
				<Wrapper_img_content_Container />
				<Content_Container />
				<Navigation_product_Container />
				<Stock_Container />
				<Adversiting_stock_Container />
			</Route>
		</div>
	);
};

const AppContainer = withRouter(App);

const MainApp = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
};
export default MainApp;
