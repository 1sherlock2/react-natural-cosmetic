import React from 'react';
import RegisterBlock from './RegisterBlock';
import { connect } from 'react-redux';
import { authRegisterThunk } from '../../redux/reducers/AuthDataReducer';
import { Redirect, withRouter } from 'react-router-dom';
import { compose } from 'redux';
// import { AuthRedirectHOC } from '../../HOC/AuthComponentHOC';

const RegisterBlockContainer = (props) => {
	const onSubmit = (values) => {
		console.log(values);
		props.authRegisterThunk(values);
	};

	return <RegisterBlock onSubmit={onSubmit} registerSuccess={props.registerSuccess} />;
};

const mapStateToProps = (state) => ({
	registerSuccess: state.authData.registerSuccess,
	isAuth: state.authData.isAuth
});

export default compose(connect(mapStateToProps, { authRegisterThunk }), withRouter)(RegisterBlockContainer);
