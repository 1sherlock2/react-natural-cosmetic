import React, { useState, useEffect, useRef } from 'react';
import Wrapper_title from './Wrapper_title';

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

	const products = [
		{ id: 1, product: 'wine', count: 1 },
		{ id: 2, product: 'wine', count: 2 },
		{ id: 3, product: 'wine', count: 15 }
	];

	return (
		<Wrapper_title
			entryRef={entryRef}
			bracketRef={bracketRef}
			onToggleEntry={onToggleEntry}
			entry={entry}
			bracket={bracket}
			onToggleBracket={onToggleBracket}
			products={products}
		/>
	);
};

export default Wrapper_title_Container;
