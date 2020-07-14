import React from 'react';
import './Wrapper_img_content.scss';
import { NavLink } from 'react-router-dom';

const Wrapper_img_content = (props) => {
	return (
		<div className='wrapper_img_content' id='wrapper_img_content_id'>
			<div className='wrapper_block_3' id='wrapper_block_3_id'>
				<div className='img_slider_div show'>
					<NavLink to='#' className='wrapper_block_3_a'>
						<img className='img_slider_0' title='first' />
					</NavLink>
				</div>
				<div className='img_slider_div'>
					<NavLink to='#' className='wrapper_block_3_a'>
						<img className='img_slider_1' title='second' />
					</NavLink>
				</div>
				<div className='img_slider_div'>
					<NavLink to='#' className='wrapper_block_3_a'>
						<img className='img_slider_2' title='third' />
					</NavLink>
				</div>
				<div className='img_slider_div'>
					<NavLink to='#' className='wrapper_block_3_a'>
						<img className='img_slider_3' title='fourth' />
					</NavLink>
				</div>
			</div>
			<div className='wrapper_content_button_1' id='prev_button'>
				<button className='wrapper_button_prev' type='button'>
					<span className='wrapper_button_span_prev'>
						<i className='fa fa-arrow-left' aria-hidden='true'></i>
					</span>
				</button>
			</div>
			<div className='wrapper_content_button_2' id='next_button'>
				<button className='wrapper_button_next' type='button'>
					<span className='wrapper_button_span_next'>
						<i className='fa fa-arrow-right' aria-hidden='true'></i>
					</span>
				</button>
			</div>
		</div>
	);
};

export default Wrapper_img_content;
