import React, { useState, useEffect, useRef } from 'react';
import Wrapper_title from './Wrapper_title';
import { connect } from 'react-redux';
import { authThunk } from '../../redux/reducers/AuthDataReducer';
import { Redirect } from 'react-router-dom';
import { deleteBasketByidDispatch, logoutDispatch } from '../../redux/generalDispatchs/generalDispatch';

const Wrapper_title_Container = (props) => {
	const [entry, setEntry] = useState(false);
	const [bracket, setBracket] = useState(false);
	const [basket, setBasket] = useState(props.basket);
	const entryRef = useRef();
	const bracketRef = useRef();

	const onToggleEntry = () => {
		setEntry(!entry);
	};
	const onToggleBracket = () => {
		setBracket(!bracket);
	};

	const deleteBasketById = (id) => {
		props.deleteBasketByidDispatch(id);
	};
	const onSubmit = (values) => {
		console.log(values);
		props.authThunk(values).then(() => {
			if (props.isAuth === true) {
				setEntry(false);
				return <Redirect to="/" />;
			}
		});
	};
	useEffect(() => {
		console.log('useEffect');
		setBasket(props.basket);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [basket]);

	return (
		<Wrapper_title
			addModalFormTrue={props.addModalFormTrue}
			onSubmit={onSubmit}
			deleteBasketById={deleteBasketById}
			entryRef={entryRef}
			bracketRef={bracketRef}
			onToggleEntry={onToggleEntry}
			entry={entry}
			basket={props.basket}
			bracket={bracket}
			onToggleBracket={onToggleBracket}
			isAuth={props.isAuth}
			logoutDispatch={props.logoutDispatch}
			adminAuth={props.adminAuth}
		/>
	);
};

let mapStateToProps = (state) => ({
	basket: state.stocksData.basket,
	isAuth: state.authData.isAuth,
	adminAuth: state.authData.adminAuth
});

export default connect(mapStateToProps, { deleteBasketByidDispatch, authThunk, logoutDispatch })(Wrapper_title_Container);

//! Chrome
// const handleOutsideClickEntry = (e) => {
// 	if (!e.path.includes(entryRef.current)) {
// 		setEntry(false);
// 		console.log('entry');
// 	}
// };
// const handleOutsideClickBracket = (e) => {
// 	if (!e.path.includes(bracketRef.current)) {
// 		setBracket(false);
// 		console.log('bracket');
// 	}
// };
// useEffect(() => {
// 	document.body.addEventListener('click', handleOutsideClickEntry);
// }, []);
// useEffect(() => {
// 	document.body.addEventListener('click', handleOutsideClickBracket);
// }, []);
