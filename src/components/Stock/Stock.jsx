import React from 'react';
import './Stock.scss';
import { NavLink } from 'react-router-dom';

const Stock = (props) => {
	return (
		<div className='stock'>
			{/* <!--------------- for_us ---------------> */}
			<div className='for_us'>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock1.jpg' />
						<div className='block_stock_p'>
							<p>Zo Skin health ossential daily power defense. Ежедневное защитное средство, 50мл</p>
						</div>
						<div className='block_stock_span'>
							<span className='span_old_price'>11000 р.</span>
							<span className='span_new_price'>8050 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock2.jpg' />
						<div className='block_stock_p'>
							<p>Zo*Skin health effects expliating polish anti-aging formula</p>
						</div>
						<div className='block_stock_span'>
							<span className='span_old_price'>5250 р.</span>
							<span className='span_new_price'>4075 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock3.jpg' />
						<div className='block_stock_p'>
							<p></p>
						</div>
						<div className='block_stock_span'>
							<span></span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock4.jpg' />
						<div className='block_stock_p'>
							<p> Weekend</p>
						</div>
						<div className='block_stock_span'>
							<span>4 457 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock5.jpg' />
						<div className='block_stock_p'>
							<p> Nina </p>
						</div>
						<div className='block_stock_span'>
							<span>4 555 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock6.jpg' />
						<div className='block_stock_div_p'>
							<p>Bright Crystal</p>
						</div>
						<div className='block_stock_span'>
							<span>3 894 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock7.jpg' />
						<div className='block_stock_div_p'>
							<p>Стойкая база под макияж глаз</p>
						</div>
						<div className='block_stock_span'>
							<span>2 114 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock8.jpg' />
						<div className='block_stock_div_p'>
							<p>Блеск, выравнивающий кожу губ Eclat Minute</p>
						</div>
						<div className='block_stock_span'>
							<span>2 545 р.</span>
						</div>
					</div>
				</NavLink>
			</div>

			{/* <!-- best_sellers --> */}
			<div className='best_sellers' id='best_sellers_id'>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock4.jpg' />
						<div className='block_stock_p'>
							<p>Интенсивный восстанавливающий концентрат Advanced Night Repair Intense Reset Concentrate</p>
						</div>
						<div className='block_stock_span'>
							<span>3 446 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock2.jpg' />
						<div className='block_stock_p'>
							<p>Интенсивный многофункциональный корректирующий крем для глаз Bio-Performance Glow Revival Eye Treatment</p>
						</div>
						<div className='block_stock_span'>
							<span>3 546 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock3.jpg' />
						<div className='block_stock_p'>
							<p>SYNCHRO SKIN Тональное средство-флюид с эффектом естественного сияния</p>
						</div>
						<div className='block_stock_span'>
							<span>5 657 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock4.jpg' />
						<div className='block_stock_p'>
							<p> Weekend</p>
						</div>
						<div className='block_stock_span'>
							<span>4 457 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock5.jpg' />
						<div className='block_stock_p'>
							<p> Nina </p>
						</div>
						<div className='block_stock_span'>
							<span>4 555 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock6.jpg' />
						<div className='block_stock_div_p'>
							<p>Bright Crystal</p>
						</div>
						<div className='block_stock_span'>
							<span>3 894 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock7.jpg' />
						<div className='block_stock_div_p'>
							<p>Стойкая база под макияж глаз</p>
						</div>
						<div className='block_stock_span'>
							<span>2 114 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock8.jpg' />
						<div className='block_stock_div_p'>
							<p>Блеск, выравнивающий кожу губ Eclat Minute</p>
						</div>
						<div className='block_stock_span'>
							<span>2 545 р.</span>
						</div>
					</div>
				</NavLink>
			</div>

			{/* <!-- new_collection --> */}
			<div className='new_collection' id='new_collection_id'>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock1.jpg' />
						<div className='block_stock_p'>
							<p>Интенсивный восстанавливающий концентрат Advanced Night Repair Intense Reset Concentrate</p>
						</div>
						<div className='block_stock_span'>
							<span>3 446 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock2.jpg' />
						<div className='block_stock_p'>
							<p>Интенсивный многофункциональный корректирующий крем для глаз Bio-Performance Glow Revival Eye Treatment</p>
						</div>
						<div className='block_stock_span'>
							<span>3 546 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock3.jpg' />
						<div className='block_stock_p'>
							<p>SYNCHRO SKIN Тональное средство-флюид с эффектом естественного сияния</p>
						</div>
						<div className='block_stock_span'>
							<span>5 657 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock4.jpg' />
						<div className='block_stock_p'>
							<p> Weekend</p>
						</div>
						<div className='block_stock_span'>
							<span>4 457 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock5.jpg' />
						<div className='block_stock_p'>
							<p> Nina </p>
						</div>
						<div className='block_stock_span'>
							<span>4 555 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock6.jpg' />
						<div className='block_stock_div_p'>
							<p>Bright Crystal</p>
						</div>
						<div className='block_stock_span'>
							<span>3 894 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock7.jpg' />
						<div className='block_stock_div_p'>
							<p>Стойкая база под макияж глаз</p>
						</div>
						<div className='block_stock_span'>
							<span>2 114 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock8.jpg' />
						<div className='block_stock_div_p'>
							<p>Блеск, выравнивающий кожу губ Eclat Minute</p>
						</div>
						<div className='block_stock_span'>
							<span>2 545 р.</span>
						</div>
					</div>
				</NavLink>
			</div>

			{/* <!-- idea_for_gift --> */}
			<div className='idea_for_gift'>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock1.jpg' />
						<div className='block_stock_p'>
							<p>Интенсивный восстанавливающий концентрат Advanced Night Repair Intense Reset Concentrate</p>
						</div>
						<div className='block_stock_span'>
							<span>3 446 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock2.jpg' />
						<div className='block_stock_p'>
							<p>Интенсивный многофункциональный корректирующий крем для глаз Bio-Performance Glow Revival Eye Treatment</p>
						</div>
						<div className='block_stock_span'>
							<span>3 546 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock3.jpg' />
						<div className='block_stock_p'>
							<p>SYNCHRO SKIN Тональное средство-флюид с эффектом естественного сияния</p>
						</div>
						<div className='block_stock_span'>
							<span>5 657 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock4.jpg' />
						<div className='block_stock_p'>
							<p> Weekend</p>
						</div>
						<div className='block_stock_span'>
							<span>4 457 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock5.jpg' />
						<div className='block_stock_p'>
							<p> Nina </p>
						</div>
						<div className='block_stock_span'>
							<span>4 555 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock6.jpg' />
						<div className='block_stock_div_p'>
							<p>Bright Crystal</p>
						</div>
						<div className='block_stock_span'>
							<span>3 894 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock7.jpg' />
						<div className='block_stock_div_p'>
							<p>Стойкая база под макияж глаз</p>
						</div>
						<div className='block_stock_span'>
							<span>2 114 р.</span>
						</div>
					</div>
				</NavLink>
				<NavLink to='#' className='block_stock'>
					<div className='block_stock_div'>
						<img src='../../img/stock8.jpg' />
						<div className='block_stock_div_p'>
							<p>Блеск, выравнивающий кожу губ Eclat Minute</p>
						</div>
						<div className='block_stock_span'>
							<span>2 545 р.</span>
						</div>
					</div>
				</NavLink>
			</div>
		</div>
	);
};

export default Stock;
