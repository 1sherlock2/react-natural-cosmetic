import React from 'react';
import '../Wrapper_title.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink, withRouter } from 'react-router-dom';

const Wrapper1_block_grid_4_1 = (props) => {
	const initialValues = {
		email: '',
		password: ''
	};

	const validationSchema = Yup.object({
		email: Yup.string().email('Неправильный формат email').required('Необходимо заполнить поле'),
		password: Yup.string().required('Необходимо заполнить поле').min(8, 'Не меньше 8 символов')
	});
	return (
		<div className="wrapper1_block_grid_4_1">
			<div className="wrapper1_block_entrance">
				<h1> Личный кабинет</h1>
			</div>
			{!props.isAuth ? (
				<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
					<Form>
						<div className="wrapper1_block_email">
							<Field name="email" type="email" placeholder="логин или E-mail" />
						</div>
						<ErrorMessage name="email" />
						<div className="wrapper1_block_password">
							<Field name="password" type="password" placeholder="пароль" />
						</div>
						<ErrorMessage name="password" />
						<div className="other_link_form">
							<div className="wrapper1_block_button">
								<button className="atuin-btn">Войти</button>
							</div>
							<div className="registr">
								<NavLink to={'/register'} className="registr_a">
									Регистрация
								</NavLink>
							</div>
							<div className="forgot_password">
								<NavLink to={'#'} className="forgot_password_a">
									Забыли пароль?
								</NavLink>
							</div>
						</div>
					</Form>
				</Formik>
			) : (
				<div className="personal_room">
					<div className="personal_settings">
						<NavLink to="/settings">
							<button onClick={props.settings}>Settings</button>
						</NavLink>
					</div>
					<div className="personal_logout">
						<button onClick={props.logoutThunk}> Logout </button>
					</div>
				</div>
			)}
		</div>
	);
};

export default withRouter(Wrapper1_block_grid_4_1);
