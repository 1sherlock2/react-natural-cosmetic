import React from 'react';
import './Wrapper_title.scss';

const Wrapper_title = (props) => {
	return (
		<div className='wrapper_title'>
			<div className='wrapper_block'>
				<div class='wrapper1_block_grid_1'>
					<img src='img/logo.jpg' alt='' />
				</div>
				<div className='wrapper1_block_grid_3'>
					<form method='post' action='#'>
						<input className='input_1_1' type='search' id='search' placeholder='Search' name='post' />
						<button type='submit'></button>
					</form>
				</div>
				<div className='wrapper1_block_grid_4' ref={props.entryRef} onClick={props.onToggleEntry}>
					<i className='fa fa-user-o' aria-hidden='true'></i>
					<span>Войти</span>
					{props.entry ? (
						<div className='wrapper1_block_grid_4_1'>
							<div className='wrapper1_block_entrance'>
								<h1> Личный кабинет</h1>
							</div>
							<form>
								<div className='wrapper1_block_email'>
									<input type='email' placeholder='логин или E-mail' />
								</div>
								<div className='wrapper1_block_password'>
									<input type='password' placeholder='пароль' />
								</div>
								<div className='wrapper1_block_button'>
									<button className='atuin-btn'>Войти</button>
								</div>
								<div className='registr'>
									<a className='registr_a'>Регистрация</a>
								</div>
								<div className='forgot_password'>
									<a className='forgot_password_a'>Забыли пароль?</a>
								</div>
							</form>
						</div>
					) : null}
				</div>
				<div className='wrapper1_block_grid_5' ref={props.bracketRef} onClick={props.onToggleBracket}>
					<i className='fa fa-shopping-basket' aria-hidden='true'></i>
					<span>Корзина</span>
					{props.bracket ? (
						<div className='wrapper1_block_bracket'>
							<div className='wrapper1_block_bracket_extra'>
								<table className='wrapper1_block_table'>
									<tr>
										<td>Наименование товара</td>
										<td>Количество</td>
										<td>Отмена заказа</td>
										<td>Отменить</td>
									</tr>
									{props.products &&
										props.products.map((item, index) => {
											return (
												<tr key={index}>
													<td>{item.id}</td>
													<td>{item.product}</td>
													<td>{item.count}</td>
													<td>Х</td>
												</tr>
											);
										})}
								</table>
							</div>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default Wrapper_title;
