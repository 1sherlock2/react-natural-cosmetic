import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Korea from './Korea';
import { useSelector, useDispatch } from 'react-redux';
import * as axios from 'axios';
import { setKoreaThunk } from '../../redux/reducers/KoreaReducer';

const Korea_Container = (props) => {
	useEffect(() => {
		props.setKoreaThunk();
	}, [props]);
	return <Korea product={props.product} items={props.items} />;
};
let mapStateToProps = (state) => {
	return {
		items: state.koreaData.items,
		product: state.koreaData.product
	};
};
export default connect(mapStateToProps, { setKoreaThunk })(Korea_Container);
