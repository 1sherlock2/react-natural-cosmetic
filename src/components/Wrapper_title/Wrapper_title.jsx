import React from 'react';
import './Wrapper_title.scss';
import Wrapper1_block_grid_4_1 from './Wrapper1_block_grid_4_1/Wrapper1_block_grid_4_1';
import Wrapper1_block_bracket from './Wrapper1_block_bracket/Wrapper1_block_bracket';
import { NavLink } from 'react-router-dom';

const Wrapper_title = (props) => {
	return (
		<div className='wrapper_title'>
			<div className='wrapper_block'>
				<div className='wrapper1_block_grid_1'>
					<NavLink to='/'>
						<img src='img/logo.jpg' alt='' />
					</NavLink>
				</div>
				<div className='wrapper1_block_grid_3'>
					<form method='post' action='#'>
						<input className='input_1_1' type='search' id='search' placeholder='Search' name='post' />
						<button type='submit'></button>
					</form>
				</div>
				<div className='wrapper1_block_grid_4'>
					<div ref={props.entryRef} onClick={props.onToggleEntry}>
						<svg
							width='2em'
							height='2em'
							viewBox='0 0 16 16'
							className='svg_wrapper1_block_grid_4'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill-rule='evenodd'
								d='M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z'
							/>
							<path d='M13.784 14c-.497-1.27-1.988-3-5.784-3s-5.287 1.73-5.784 3h11.568z' />
							<path fill-rule='evenodd' d='M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
						</svg>
						<span>Войти</span>
					</div>
					{props.entry ? <Wrapper1_block_grid_4_1 onSubmit={props.onSubmit} isAuth={props.isAuth} /> : null}
				</div>
				<div className='wrapper1_block_grid_5'>
					<div ref={props.bracketRef} onClick={props.onToggleBracket}>
						<svg
							width='1.5em'
							height='1.5em'
							viewBox='0 0 16 16'
							class='svg_wrapper1_block_grid_5'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'>
							<path
								fill-rule='evenodd'
								d='M2 5v7.5c0 .864.642 1.5 1.357 1.5h9.286c.715 0 1.357-.636 1.357-1.5V5h1v7.5c0 1.345-1.021 2.5-2.357 2.5H3.357C2.021 15 1 13.845 1 12.5V5h1z'
							/>
							<path
								fill-rule='evenodd'
								d='M5.5 7.5A.5.5 0 0 1 6 7h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5zM15 2H1v2h14V2zM1 1a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H1z'
							/>
						</svg>
						<span>Корзина</span>
						<br />
					</div>
					{props.bracket ? (
						<Wrapper1_block_bracket deleteBasketById={props.deleteBasketById} isAuth={props.isAuth} basket={props.basket} />
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Wrapper_title;
