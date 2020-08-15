import React, { Suspense, useState } from 'react';
import './App.scss';
import { withRouter, BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import { Provider, connect } from 'react-redux';
import store from './redux/store/Store';
import Wrapper_title_Container from './components/Wrapper_title/Wrapper_title_Container';
import Wrapper_navigation_Container from './components/Wrapper_navigation/Wrapper_navigation_Container';

import Perfumery_Container from './components/Perfumery/PerfumeryContainer';
import MakeUp_Container from './components/MakeUp/MakeUpContainer';
import SkinCare_Container from './components/SkinCare/SkinCareContainer';
import Men_Container from './components/Men/MenContainer';
import Accessories_Container from './components/Accessories/AccessoriesContainer';
import Kids_Container from './components/Kids/KidsContainer';
import Gift_Container from './components/GIft/GiftContainer';
import Brends_Container from './components/Brends/BrendsContainer';
import ContentLoaderByComponent from './components/Utils/ContentLoaderByComponent/ContentLoaderByComponent';
import RegisterBlockContainer from './components/RegisterBlock/RegisterBlockContainer';
import { compose } from 'redux';
import Modal from 'react-modal';
import AddProductFormContainer from './components/Utils/Add_product_form/AddProductFormContainer';
// const Wrapper_title_Container = React.lazy(() => import('./components/Wrapper_title/Wrapper_title_Container'));
// const Wrapper_navigation_Container = React.lazy(() => import('./components/Wrapper_navigation/Wrapper_navigation_Container'));
const Main_content_Container = React.lazy(() => import('./components/Main_content/Main_Content_Container'));
const Stocks_Container = React.lazy(() => import('./components/Stocks/StocksContainer'));
const Korea_Container = React.lazy(() => import('./components/Korea/KoreaContainer'));

Modal.setAppElement('#root');

const App = (props) => {
	const [modalForm, setModalForm] = useState(false);
	const addModalFormTrue = () => {
		setModalForm((modalForm) => !modalForm);
	};
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
					<Wrapper_title_Container addModalFormTrue={addModalFormTrue} />
					<Wrapper_navigation_Container />
					<Suspense fallback={<ContentLoaderByComponent />}>
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
				</div>
			)}
		</div>
	);
};

let mapStateToProps = (state) => ({
	isAuth: state.authData.isAuth
});

const AppContainer = compose(connect(mapStateToProps, {}), withRouter)(App);

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
