import React from 'react';
import '../Wrapper_title.scss';

const Wrapper1_block_bracket = (props) => {
	return (
		<div className='wrapper1_block_bracket'>
			{!props.isAuth ? (
				<div className='notIsAuth'>
					Корзина не доступна для не зарегистрированных пользователей
					<div className='notIsAuth_svg'>
						<svg
							width='3em'
							height='3em'
							viewBox='0 0 16 16'
							class='bi bi-person-circle'
							fill='currentColor'
							xmlns='http://www.w3.org/2000/svg'>
							<path d='M13.468 12.37C12.758 11.226 11.195 10 8 10s-4.757 1.225-5.468 2.37A6.987 6.987 0 0 0 8 15a6.987 6.987 0 0 0 5.468-2.63z' />
							<path fill-rule='evenodd' d='M8 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z' />
							<path fill-rule='evenodd' d='M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z' />
						</svg>
					</div>
				</div>
			) : (
				<div className='wrapper1_block_bracket_extra'>
					<table className='wrapper1_block_table'>
						<tr>
							<td>Наименование товара</td>
							<td>Количество</td>
							<td>Цена</td>
							<td>Отменить</td>
						</tr>
						{props.basket &&
							props.basket.map((item, index) => {
								return (
									<tr key={`${item.id}${index}`}>
										<td>{item.name}</td>
										<td>{item.count}</td>
										<td>{item.price}</td>
										<button onClick={() => props.deleteBasketById(item.id)}>Delete</button>
									</tr>
								);
							})}
					</table>
				</div>
			)}
		</div>
	);
};

export default Wrapper1_block_bracket;
