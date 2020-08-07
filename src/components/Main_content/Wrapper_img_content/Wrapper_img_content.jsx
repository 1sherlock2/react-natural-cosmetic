import React from 'react';
import './Wrapper_img_content.scss';
import { NavLink } from 'react-router-dom';

const Wrapper_img_content = (props) => {
	return (
		<div className='wrapper_img_content' id='wrapper_img_content_id'>
			<div className='wrapper_block_3' id='wrapper_block_3_id'>
				{props.wrapperImgContent &&
					props.wrapperImgContent.map((item, index) => {
						return (
							<div key={`${item.id} ${item.src}`} className='img_slider_div show'>
								<img src={item.src} title='first' />
								<div className='img_slider_svg_prev'>
									<svg
										onClick={props.selectItemPrev()}
										width='3em'
										height='3em'
										viewBox='0 0 16 16'
										className='bi bi-arrow-left-circle'
										fill='currentColor'
										xmlns='http://www.w3.org/2000/svg'>
										<path fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
										<path
											fill-rule='evenodd'
											d='M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z'
										/>
										<path fill-rule='evenodd' d='M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z' />
									</svg>
								</div>
								<div className='img_slider_svg_next'>
									<svg
										onClick={props.selectItemNext()}
										width='3em'
										height='3em'
										viewBox='0 0 16 16'
										className='bi bi-arrow-right-circle'
										fill='currentColor'
										xmlns='http://www.w3.org/2000/svg'>
										<path fill-rule='evenodd' d='M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z' />
										<path
											fill-rule='evenodd'
											d='M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z'
										/>
										<path fill-rule='evenodd' d='M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z' />
									</svg>
								</div>
							</div>
						);
					})}
			</div>
		</div>
	);
};

export default Wrapper_img_content;
