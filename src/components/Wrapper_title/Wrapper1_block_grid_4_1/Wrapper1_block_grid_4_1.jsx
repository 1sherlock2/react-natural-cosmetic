import React from 'react';
import '../Wrapper_title.scss';
import { useFormik } from 'formik';

const initialValues = {
	email: '',
	password: ''
};

const validate = (values) => {
	const errors = {};
	const reg = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
	if (!values.email) {
		errors.email = 'Необходимо заполнить поле ';
	} else if (!reg.test(values.email)) {
		errors.email = 'Неправильный формат email';
	}
	if (!values.password) {
		errors.password = 'Необходимо ввести пароль';
	}
	return errors;
};

const onSubmit = (values) => console.log(values); //? thunk on server
const Wrapper1_block_grid_4_1 = (props) => {
	const formik = useFormik({
		initialValues,
		validate,
		onSubmit
	});
	console.log('Visited fields', formik.touched);

	return (
		<div className='wrapper1_block_grid_4_1'>
			<div className='wrapper1_block_entrance'>
				<h1> Личный кабинет</h1>
			</div>
			<form onSubmit={formik.handleSubmit}>
				<div className='wrapper1_block_email'>
					<input
						name='email'
						type='email'
						placeholder='логин или E-mail'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
				</div>
				{formik.errors.email && formik.touched.email ? <div className='errors_name_form'>{formik.errors.email}</div> : null}
				<div className='wrapper1_block_password'>
					<input
						name='password'
						type='password'
						placeholder='пароль'
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.password}
					/>
				</div>
				{formik.errors.password && formik.touched.password ? <div className='errors_password_form'>{formik.errors.password}</div> : null}
				<div className='other_link_form'>
					<div className='wrapper1_block_button'>
						<button className='atuin-btn'>Войти</button>
					</div>
					<div className='registr'>
						<a className='registr_a'>Регистрация</a>
					</div>
					<div className='forgot_password'>
						<a className='forgot_password_a'>Забыли пароль?</a>
					</div>
				</div>
			</form>
		</div>
	);
};

export default Wrapper1_block_grid_4_1;
