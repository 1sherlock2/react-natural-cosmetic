import React, { useState, useEffect, useRef } from 'react';
import Wrapper_title from './Wrapper_title';
import { connect } from 'react-redux';
import { authThunk, logoutThunk } from '../../redux/reducers/AuthDataReducer';
import { Redirect } from 'react-router-dom';
import { deleteBasketByidDispatch } from '../../redux/generalDispatchs/generalDispatch';

const Wrapper_title_Container = (props) => {
	const [entry, setEntry] = useState(false);
	const [bracket, setBracket] = useState(false);
	const [basket, setBasket] = useState(props.basket);
	const entryRef = useRef();
	const bracketRef = useRef();

	const onToggleEntry = () => {
		setEntry((entry) => !entry);
	};
	const onToggleBracket = () => {
		setBracket((bracket) => !bracket);
	};

	const deleteBasketById = (id) => {
		props.deleteBasketByidDispatch(id);
	};
	const onSubmit = (values) => {
		props.authThunk(values).then(() => {
			if (props.isAuth === true) {
				setEntry(false);
				return <Redirect to="/" />;
			}
		});
	};
	useEffect(() => {
		setBasket(props.basket);
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
			logoutThunk={props.logoutThunk}
			adminAuth={props.adminAuth}
		/>
	);
};

let mapStateToProps = (state) => ({
	basket: state.stocksData.basket,
	isAuth: state.authData.isAuth,
	adminAuth: state.authData.adminAuth
});

export default connect(mapStateToProps, { deleteBasketByidDispatch, authThunk, logoutThunk })(Wrapper_title_Container);
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
