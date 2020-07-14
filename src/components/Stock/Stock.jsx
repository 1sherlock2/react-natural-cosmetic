import React from 'react';
import './Stock.scss';
import { NavLink } from 'react-router-dom';
import { Block_stock } from "../Utils/Small_components/Block_stock"

const Stock = (props) => {
	return (
		<div className='stock'>
			<div className='for_us'>
				<Block_stock url={'#'} image={'../../img/stock1.jpg'} alt={''} text={'Zo Skin health ossential daily power defense. Ежедневное защитное средство, 50мл'} oldPrice={'11000 р.'} newPrice={'8050 р'} />
				<Block_stock url={'#'} image={'../../img/stock2.jpg'} alt={''} text={'Zo*Skin health effects expliating polish anti-aging formula'} oldPrice={'5250 р.'} newPrice={'4075 р.'} />
				<Block_stock url={'#'} image={'../../img/stock3.jpg'} alt={''} text={'3'} oldPrice={'2 345 р.'} newPrice={'4 533 р.'} />
				<Block_stock url={'#'} image={'../../img/stock4.jpg'} alt={''} text={'Weekend'} oldPrice={'4 457 р.'} newPrice={'3 356 р.'} />
				<Block_stock url={'#'} image={'../../img/stock5.jpg'} alt={''} text={'Nina'} oldPrice={'4 555 р.'} newPrice={'5 670 р.'} />
				<Block_stock url={'#'} image={'../../img/stock6.jpg'} alt={''} text={'Bright Crystal'} oldPrice={'3 894 р.'} newPrice={'5 670 р.'} />
				<Block_stock url={'#'} image={'../../img/stock7.jpg'} alt={''} text={'Стойкая база под макияж глаз'} oldPrice={'2 114 р.'} newPrice={null} />
				<Block_stock url={'#'} image={'../../img/stock8.jpg'} alt={''} text={'Блеск, выравнивающий кожу губ Eclat Minute'} oldPrice={'2 545 р'} newPrice={null} />
			</div>
		</div>
	);
};

export default Stock;
