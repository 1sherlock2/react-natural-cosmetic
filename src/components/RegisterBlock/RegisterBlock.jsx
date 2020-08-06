import React from 'react';
import './RegisterBlock.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink, withRouter } from 'react-router-dom';

const RegisterBlock = (props) => {
	const initialValues = {
		email: '',
		password: ''
	};
	const validationSchema = Yup.object({
		email: Yup.string().email('Неправильный формат email').required('Необходимо заполнить форму'),
		password: Yup.string().required('Необходимо заполнить поле').min(8, 'Не меньше 8 символов')
	});
	return (
		<div className='container-fluid'>
			<div className='container'>
				<div className='register_container_form'>
					<h1> Registration </h1>
					<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
						<Form>
							<div class='form-group'>
								<label for='exampleInputEmail1'>Email address</label>
								<Field
									name='email'
									type='email'
									class='form-control'
									id='exampleInputEmail1'
									aria-describedby='emailHelp'
									placeholder='Enter email'
								/>
								<small id='emailHelp' class='form-text text-muted'>
									<ErrorMessage name='email' />
								</small>
							</div>
							<div class='form-group'>
								<label for='exampleInputPassword1'>Password</label>
								<Field name='password' type='password' class='form-control' id='exampleInputPassword1' placeholder='Password' />
								<small id='emailHelp' class='form-text text-muted'>
									<ErrorMessage name='password' />
								</small>
							</div>
							<button type='submit' class='btn btn-primary'>
								Register
							</button>
						</Form>
					</Formik>
					{props.registerSuccess ? (
						<div className='register_success'>
							Регистрация прошла успешно. Теперь вы можете воспользоваться всеми возможностями интернет магазина
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

export default withRouter(RegisterBlock);
