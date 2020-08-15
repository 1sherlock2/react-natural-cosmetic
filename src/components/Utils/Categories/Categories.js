import React from 'react';
import './Categories.scss';
import classname from 'classnames';

export const Categories = ({
	defaultHeaderName,
	categories,
	selectCategories,
	activeCategoried,
	selectCategoriesItemFunc,
	selectCategoriesItem,
	addProduct,
	adminAuth,
	addModalFormTrue
}) => {
	return (
		<div className="card" onClick={selectCategories}>
			<div className="card-header">{defaultHeaderName}</div>
			{activeCategoried ? (
				<ul className="list-group list-group-flush">
					{categories.map((item, index) => {
						return (
							<li
								key={index}
								onClick={() => selectCategoriesItemFunc(item, index)}
								className={classname(
									{
										active: selectCategoriesItem === index
									},
									'list-group-item'
								)}
							>
								{item}
							</li>
						);
					})}
				</ul>
			) : null}
		</div>
	);
};
