import React, { Suspense, useState, useEffect } from 'react';
import './App.scss';
import { withRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from './redux/store/Store';
import Perfumery_Container from './components/Perfumery/PerfumeryContainer';
import MakeUp_Container from './components/MakeUp/MakeUpContainer';
import SkinCare_Container from './components/SkinCare/SkinCareContainer';
import Men_Container from './components/Men/MenContainer';
import Accessories_Container from './components/Accessories/AccessoriesContainer';
import Kids_Container from './components/Kids/KidsContainer';
import Gift_Container from './components/GIft/GiftContainer';
import ContentLoaderByComponent from './components/Utils/ContentLoaderByComponent/ContentLoaderByComponent';
import RegisterBlockContainer from './components/RegisterBlock/RegisterBlockContainer';
import { compose } from 'redux';
import Modal from 'react-modal';
import AddProductFormContainer from './components/Utils/Add_product_form/AddProductFormContainer';
import { storageName } from './authCallBackHook/ConstantValues';
import { authThunk } from './redux/reducers/AuthDataReducer';
import { authDispatch, authAdminDispatch } from './redux/generalDispatchs/generalDispatch';

const Wrapper_title_Container = React.lazy(() => import('./components/Wrapper_title/Wrapper_title_Container'));
const Wrapper_navigation_Container = React.lazy(() => import('./components/Wrapper_navigation/Wrapper_navigation_Container'));
const Main_content_Container = React.lazy(() => import('./components/Main_content/Main_Content_Container'));
const Stocks_Container = React.lazy(() => import('./components/Stocks/StocksContainer'));
const Korea_Container = React.lazy(() => import('./components/Korea/KoreaContainer'));

Modal.setAppElement('#root');

const App = (props) => {
	const [modalForm, setModalForm] = useState(false);
	const addModalFormTrue = () => {
		setModalForm((modalForm) => !modalForm);
	};

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem(storageName));
		console.log(data);
		if (data && data.token && !data.right) {
			props.authDispatch(data.token, data.userId);
		} else if (data && data.token && data.right === 'admin') {
			props.authAdminDispatch(data.token, data.userId);
		}
	}, [props.token, props.userId]);

	return (
		<div className="container-natural">
			{modalForm ? (
				<div className="add_product_form">
					<Modal
						isOpen={true}
						onRequestClose={() => setModalForm(false)}
						style={{
							overlay: {
								backgroundColor: 'rgba(51, 51, 51, 0.205)'
							},
							content: {
								width: '50%',
								marginLeft: '20%'
							}
						}}
					>
						<AddProductFormContainer addModalFormTrue={addModalFormTrue} />
					</Modal>
				</div>
			) : (
				<div>
					<Switch>
						<Suspense fallback={<ContentLoaderByComponent />}>
							<Wrapper_title_Container addModalFormTrue={addModalFormTrue} />
							<Wrapper_navigation_Container />
							<Route exact path={'/'} render={() => <Main_content_Container />} />
							<Route exact path={'/register'} render={() => <RegisterBlockContainer />} />
							<Route exact path={'/stocks'} render={() => <Stocks_Container />} />
							<Route exact path={`/korea`} render={() => <Korea_Container />} />
							<Route exact path={`/perfumery`} render={() => <Perfumery_Container />} />
							<Route exact path={`/makeup`} render={() => <MakeUp_Container />} />
							<Route exact path={`/skincare`} render={() => <SkinCare_Container />} />
							<Route exact path={`/men`} render={() => <Men_Container />} />
							<Route exact path={`/accessories`} render={() => <Accessories_Container />} />
							<Route exact path={`/kids`} render={() => <Kids_Container />} />
							<Route exact path={`/gift`} render={() => <Gift_Container />} />
						</Suspense>
					</Switch>
				</div>
			)}
		</div>
	);
};

let mapStateToProps = (state) => ({
	isAuth: state.authData.isAuth,
	token: state.authData.token,
	userId: state.authData.userId
});

const AppContainer = compose(connect(mapStateToProps, { authThunk, authDispatch, authAdminDispatch }), withRouter)(App);

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
