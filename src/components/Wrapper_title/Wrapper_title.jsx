import React from 'react';
import './Wrapper_title.scss';

const Wrapper_title = (props) => {
	return (
		<div class='wrapper_title'>
			<div class='wrapper_block'>
				<div class='wrapper1_block_grid_1'></div>
				<div class='wrapper1_block_grid_3'>
					<form method='post' action='#'>
						<input class='input_1_1' type='search' id='search' placeholder='Search' name='post' />
						<button type='submit'></button>
					</form>
				</div>
				<div class='wrapper1_block_grid_4'>
					<i class='fa fa-user-o' aria-hidden='true'></i>

					<span>Войти</span>
				</div>
				<div class='wrapper1_block_grid_4_1'>
					<div class='wrapper1_block_entrance'>
						<h1> Личный кабинет</h1>
					</div>
					<div class='wrapper1_block_email'>
						<form>
							<input type='email' placeholder='логин или E-mail' />
						</form>
					</div>
					<div class='wrapper1_block_password'>
						<form>
							<input type='password' placeholder='пароль' />
						</form>
					</div>
					<div class='wrapper1_block_button'>
						<button class='atuin-btn'>Войти</button>
					</div>
					<div class='registr'>
						<a class='registr_a'>Регистрация</a>
					</div>
					<div class='forgot_password'>
						<a class='forgot_password_a'>Забыли пароль?</a>
					</div>
				</div>
				<div class='wrapper1_block_grid_5'>
					<i class='fa fa-shopping-basket' aria-hidden='true'></i>
					<span>Корзина</span>
				</div>
				<div class='wrapper1_block_bracket'>
					<div class='wrapper1_block_bracket_extra'>
						<table class='wrapper1_block_table'>
							<tr>
								<td>Наименование товара</td>
								<td>Количество</td>
								<td>Отмена заказа</td>
							</tr>
							<tr>
								<td></td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Wrapper_title;
