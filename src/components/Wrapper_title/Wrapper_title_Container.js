import React, { useState, useEffect, useRef } from 'react';
import Wrapper_title from './Wrapper_title';
import { connect } from 'react-redux';
import { deleteBasketByidDispatch } from '../../redux/reducers/StocksReducer';

const Wrapper_title_Container = (props) => {
	const [entry, setEntry] = useState(false);
	const [bracket, setBracket] = useState(false);
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

	// useEffect(() => {
	// 	console.log('useEffect');
	// 	setBasket(props.basket);
	// 	// eslint-disable-next-line react-hooks/exhaustive-deps
	// }, [basket]);

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

	return (
		<Wrapper_title
			deleteBasketById={deleteBasketById}
			entryRef={entryRef}
			bracketRef={bracketRef}
			onToggleEntry={onToggleEntry}
			entry={entry}
			basket={props.basket}
			bracket={bracket}
			onToggleBracket={onToggleBracket}
			isAuth={props.isAuth}
		/>
	);
};

let mapStateToProps = (state) => ({
	basket: state.stocksData.basket,
	isAuth: state.authData.isAuth
});

export default connect(mapStateToProps, { deleteBasketByidDispatch })(Wrapper_title_Container);
