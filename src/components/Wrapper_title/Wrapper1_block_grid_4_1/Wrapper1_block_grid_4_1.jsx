import React from 'react';
import '../Wrapper_title.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const initialValues = {
	email: '',
	password: ''
};

const onSubmit = (values) => console.log(values); //? thunk on server

const validationSchema = Yup.object({
	email: Yup.string().email('Неправильный формат email').required('Необходимо заполнить поле'),
	password: Yup.string().required('Необходимо заполнить поле').min(8, 'Не меньше 8 символов')
});

const Wrapper1_block_grid_4_1 = (props) => {
	return (
		<div className='wrapper1_block_grid_4_1'>
			<div className='wrapper1_block_entrance'>
				<h1> Личный кабинет</h1>
			</div>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
				<Form>
					<div className='wrapper1_block_email'>
						<Field name='email' type='email' placeholder='логин или E-mail' />
					</div>
					<ErrorMessage name='email' />
					<div className='wrapper1_block_password'>
						<Field name='password' type='password' placeholder='пароль' />
					</div>
					<ErrorMessage name='password' />
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
				</Form>
			</Formik>
		</div>
	);
};

export default Wrapper1_block_grid_4_1;
