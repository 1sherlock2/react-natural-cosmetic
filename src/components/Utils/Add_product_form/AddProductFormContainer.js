import React, { useState } from 'react';
import { AddProductForm } from './AddProductForm';
import { connect } from 'react-redux';
import { postProductStocksThunk } from '../../../redux/reducers/StocksReducer';
import { postProductKoreaThunk } from '../../../redux/reducers/KoreaReducer';

const AddProductFormContainer = (props) => {
	const onSubmit = (values) => {
		if (values.categories === '0') {
			delete values.categories;
			return props.postProductStocksThunk(values);
		} else if (values.categories === '1') {
			delete values.categories;
			return props.postProductKoreaThunk(values);
		}
	};

	return (
		<AddProductForm onSubmit={onSubmit} items={props.items} addModalFormTrue={props.addModalFormTrue} postProductSuccess={props.postProductSuccess} />
	);
};
let mapStateToProps = (state) => ({
	items: state.wrapperData.items,
	postProductSuccess: state.generalData.postProductSuccess
});
export default connect(mapStateToProps, { postProductStocksThunk, postProductKoreaThunk })(AddProductFormContainer);
