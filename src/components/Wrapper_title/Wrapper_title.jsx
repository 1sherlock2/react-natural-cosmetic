import React from 'react';
import './Wrapper_title.scss';
import Wrapper1_block_grid_4_1 from './Wrapper1_block_grid_4_1/Wrapper1_block_grid_4_1';
import Wrapper1_block_bracket from './Wrapper1_block_bracket/Wrapper1_block_bracket';

const Wrapper_title = (props) => {
	return (
		<div className='wrapper_title'>
			<div className='wrapper_block'>
				<div className='wrapper1_block_grid_1'>
					<img src='img/logo.jpg' alt='' />
				</div>
				<div className='wrapper1_block_grid_3'>
					<form method='post' action='#'>
						<input className='input_1_1' type='search' id='search' placeholder='Search' name='post' />
						<button type='submit'></button>
					</form>
				</div>
				<div className='wrapper1_block_grid_4'>
					<div ref={props.entryRef} onClick={props.onToggleEntry}>
						<i className='fa fa-user-o' aria-hidden='true'></i>
						<span>Войти</span>
					</div>
					{props.entry ? <Wrapper1_block_grid_4_1 onSubmit={props.onSubmit} /> : null}
				</div>
				<div className='wrapper1_block_grid_5'>
					<div ref={props.bracketRef} onClick={props.onToggleBracket}>
						<i className='fa fa-shopping-basket' aria-hidden='true'></i>
						<span>Корзина</span>
						<br />
						<span className>1</span>
					</div>
					{props.bracket ? <Wrapper1_block_bracket deleteBasketById={props.deleteBasketById} isAuth={props.isAuth} basket={props.basket} /> : null}
				</div>
			</div>
		</div>
	);
};

export default Wrapper_title;
