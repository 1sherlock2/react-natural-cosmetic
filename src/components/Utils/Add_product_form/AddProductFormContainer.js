import React, { useState } from 'react';
import { AddProductForm } from './AddProductForm';
import { connect } from 'react-redux';
import { postProductStocks } from '../../../redux/reducers/StocksReducer';

const AddProductFormContainer = (props) => {
	const onSubmit = (values) => {
		console.log(values);
		if (values.categories === '0') {
			// delete values.categories;
			props.postProductStocks(values);
		}
		if (values.categories === '1') {
			delete values.categories;
			console.log(values);
			// props.postProductStocks(values);
		}
	};

	return <AddProductForm onSubmit={onSubmit} items={props.items} addModalFormTrue={props.addModalFormTrue} />;
};
let mapStateToProps = (state) => ({
	items: state.wrapperData.items
});
export default connect(mapStateToProps, { postProductStocks })(AddProductFormContainer);
