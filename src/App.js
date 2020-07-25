import React, { Suspense } from 'react';
import './App.scss';
import { withRouter, BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
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
import ContentLoaderByComponent from './components/Utils/ContentLoaderByComponent/ContentLoaderByComponent';

// const Wrapper_title_Container = React.lazy(() => import('./components/Wrapper_title/Wrapper_title_Container'));
// const Wrapper_navigation_Container = React.lazy(() => import('./components/Wrapper_navigation/Wrapper_navigation_Container'));
const Main_content_Container = React.lazy(() => import('./components/Main_content/Main_Content_Container'));
const Stocks_Container = React.lazy(() => import('./components/Stocks/StocksContainer'));
const Korea_Container = React.lazy(() => import('./components/Korea/KoreaContainer'));

const App = () => {
	return (
		<Switch>
			<div className='container-natural'>
				<Wrapper_title_Container />
				<Wrapper_navigation_Container />
				<Suspense fallback={<ContentLoaderByComponent />}>
					<Route exact path={'/'} render={() => <Main_content_Container />} />
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
		</Switch>
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
