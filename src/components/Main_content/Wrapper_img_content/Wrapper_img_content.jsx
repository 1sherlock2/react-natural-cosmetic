import React from 'react';
import './Wrapper_img_content.scss';
import { NavLink } from 'react-router-dom';

const Wrapper_img_content = (props) => {
	return (
		<div className='wrapper_img_content' id='wrapper_img_content_id'>
			<div className='wrapper_block_3' id='wrapper_block_3_id'>
				{props.wrapperImgContent &&
					props.wrapperImgContent.map((item) => {
						return (
							<div key={item.id} className='img_slider_div show'>
								<NavLink to={item.src} className='wrapper_block_3_a'>
									<img src={item.src} title='first' />
								</NavLink>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Wrapper_img_content;
