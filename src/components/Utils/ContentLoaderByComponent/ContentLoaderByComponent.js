import React from 'react';
import ContentLoader from 'react-content-loader';

const ContentLoaderByComponent = (props) => (
	<ContentLoader speed={0.7} width={1324} height={500} viewBox='0 0 1324 500' backgroundColor='#f0e4f9' foregroundColor='#e1d5e6' {...props}>
		<rect x='50' y='35' rx='0' ry='0' width='400' height='266' />
		<rect x='50' y='333' rx='0' ry='0' width='400' height='190' />
		<rect x='900' y='35' rx='0' ry='0' width='400' height='458' />
		<rect x='900' y='10' rx='0' ry='0' width='400' height='35' />
	</ContentLoader>
);

export default ContentLoaderByComponent;
