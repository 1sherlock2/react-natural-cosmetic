import React from 'react';
import './Wrapper_navigation.scss';
import { NavLink } from 'react-router-dom';
import { Nav_navigation_li } from '../Utils/Small_components/Nav_navigation_li';

const Wrapper_navigation = (props) => {
	return (
		<div class='wrapper_navigation'>
			<div class='nav_navigation' id='nav'>
				<div class='nav_burger'>
					<span></span>
				</div>
				<ul class='ul_navigation'>
					<Nav_navigation_li url={'#'} children={'Акции'} />
					<Nav_navigation_li url={'#'} children={'Korea'} />
					<Nav_navigation_li url={'#'} children={'Парфюмерия'} />
					<Nav_navigation_li url={'#'} children={'Макияж'} />
					<Nav_navigation_li url={'#'} children={'Уход за кожей'} />
					<Nav_navigation_li url={'#'} children={'Уход за волосами'} />
					<Nav_navigation_li url={'#'} children={'Мужчинам'} />
					<Nav_navigation_li url={'#'} children={'Аксессуары'} />
					<Nav_navigation_li url={'#'} children={'Детям'} />
					<Nav_navigation_li url={'#'} children={'Подарки'} />
					<Nav_navigation_li url={'#'} children={'Бренды'} />
				</ul>
			</div>
		</div>
	);
};

export default Wrapper_navigation;
