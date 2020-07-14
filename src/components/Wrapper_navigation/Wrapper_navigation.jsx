import React from 'react';
import './Wrapper_navigation.scss';

const Wrapper_navigation = (props) => {
	return (
		<div class='wrapper_navigation'>
			<div class='nav_navigation' id='nav'>
				<div class='nav_burger'>
					<span></span>
				</div>
				<ul class='ul_navigation'>
					<li id='nav_navigation_li'>
						<a href='#' class='a_navigation'>
							Акции
						</a>
					</li>
					<li id='nav_navigation_li'>
						<a href='#' class='a_navigation'>
							Korea
						</a>
					</li>
					<li id='nav_navigation_li'>
						<a href='#' class='a_navigation'>
							Парфюмерия
						</a>
					</li>
					<li id='nav_navigation_li'>
						<a href='#' class='a_navigation'>
							Макияж
						</a>
					</li>
					<li id='nav_navigation_li'>
						<a href='#' class='a_navigation'>
							Уход за кожей
						</a>
					</li>
					<li id='nav_navigation_li'>
						<a href='#' class='a_navigation'>
							Уход за волосами
						</a>
					</li>
					<li id='nav_navigation_li'>
						<a href='#' class='a_navigation'>
							{' '}
							Мужчинам
						</a>
					</li>
					<li id='nav_navigation_li'>
						<a href='#' class='a_navigation'>
							Аксессуары
						</a>
					</li>
					<li id='nav_navigation_li'>
						<a href='#' class='a_navigation'>
							Детям
						</a>
					</li>
					<li id='nav_navigation_li'>
						<a href='#' class='a_navigation'>
							Подарки
						</a>
					</li>
					<li id='nav_navigation_li'>
						<a href='#' class='a_navigation'>
							Бренды
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Wrapper_navigation;
