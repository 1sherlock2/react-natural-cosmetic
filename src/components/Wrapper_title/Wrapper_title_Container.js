import React, { useState, useEffect, useRef } from 'react';
import Wrapper_title from './Wrapper_title';

const Wrapper_title_Container = (props) => {
	const [entry, setEntry] = useState(false);
	const [bracket, setBracket] = useState(false);
	const sortRef = useRef();

	const onToggleEntry = () => {
		setEntry(!entry);
	};
	const onToggleBracket = () => {
		setBracket(!bracket);
	};
	console.log(sortRef);

	const handleOutsideClick = (e) => {
		console.log(e);
	};

	useEffect(() => {
		document.body.addEventListener('click', handleOutsideClick);
		// console.log(sortRef.current);
	}, []);
	const products = [
		{ id: 1, product: 'wine', count: 1 },
		{ id: 2, product: 'wine', count: 2 },
		{ id: 3, product: 'wine', count: 15 }
	];

	return (
		<Wrapper_title
			sortRef={sortRef}
			onToggleEntry={onToggleEntry}
			entry={entry}
			bracket={bracket}
			onToggleBracket={onToggleBracket}
			products={products}
		/>
	);
};

export default Wrapper_title_Container;
