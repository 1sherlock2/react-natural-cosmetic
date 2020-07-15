import React from 'react';

export const Navigation_product_block = ({ className, children, selectItem, index }) => {
	return (
		<li key={index} className={className} onClick={() => selectItem(index)}>
			<span>{children}</span>
		</li>
	);
};
