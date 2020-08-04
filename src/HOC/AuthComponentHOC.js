import React from 'react';
import { connect } from 'react-redux';

export const AuthRedirectHOC = (Component) => {
	let mapStateToPropsFromRedirect = (state) => ({
		isAuth: state.authData.isAuth,
		registerSuccess: state.authData.registerSuccess
	});

	class RedirectComponent extends React.Component {
		render() {
			if (this.props.isAuth && this.props.registerSuccess) {
				return <Component {...this.props} />;
			}
			// else if (!this.props.isAuth && !this.props.isRegistered) {
			// 	return <AuthContainer {...this.props} />;
			// } else if (this.props.isAuth && this.props.isRegistered) {
			// 	return <RegisterContainer {...this.props} />;
			// }
		}
	}

	return connect(mapStateToPropsFromRedirect, {})(RedirectComponent);
};
