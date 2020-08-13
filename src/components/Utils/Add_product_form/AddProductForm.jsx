import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage, useFormik } from 'formik';
import React from 'react';
import './Add_product_form.scss';

export const AddProductForm = (props) => {
	const initialValues = {
		name: '',
		img: null,
		description: '',
		price: '',
		brend: ''
	};
	const validationSchema = Yup.object({
		name: Yup.string().required('Необходимо заполнить поле'),
		// img: Yup.object().shape({
		// 	file: Yup.mixed()
		// 		.required('A file is required')
		// 		.test('fileFormat', 'PDF only', (value) => {
		// 			console.log(value);
		// 			return value && ['application/pdf'].includes(value.type);
		// 		})
		// }),
		description: '',
		price: Yup.number().required('Необходимо установить цену'),
		brend: ''
	});

	return (
		<div>
			<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
				<Form>
					<div className='form-group'>
						<label htmlFor='exampleInputName'>Название продукта</label>
						<Field
							name='name'
							type='text'
							className='form-control'
							id='exampleInputName'
							aria-describedby='nameHelp'
							placeholder='Добавить товар'
						/>
						<ErrorMessage name='name' />
					</div>
					<div className='form-group'>
						<label htmlFor='exampleInputImg'> Вставьте картинку </label>
						<Field name='img'>
							{(props) => {
								const { field, form, meta } = props;
								return (
									<input
										name='img'
										type='file'
										onChange={(event) => {
											form.setFieldValue('img', event.target.files[0]);
										}}
										accept='image/*'
										className='form-control'
										id='exampleInputImg'
										aria-describedby='imgHelp'
										placeholder='Вставьте картинку'
									/>
								);
							}}
						</Field>
						<ErrorMessage name='img' />
					</div>
					<div className='form-group'>
						<label htmlFor='exampleInputDescription'> Описание товара </label>
						<Field
							name='description'
							type='text'
							className='form-control'
							id='exampleInputDescription'
							aria-describedby='descriptionHelp'
							placeholder='Описание'
						/>
						<ErrorMessage name='price' />
					</div>
					<div className='form-group'>
						<label htmlFor='exampleInputPrice'> Цена </label>
						<Field
							name='price'
							type='number'
							className='form-control'
							id='exampleInputPrice'
							aria-describedby='priceHelp'
							placeholder='Цена'
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='exampleInputBrend'> Цена </label>
						<Field
							name='brend'
							type='text'
							className='form-control'
							id='exampleInputBrend'
							aria-describedby='brendHelp'
							placeholder='Бренд'
						/>
					</div>
					<button type='submit' class='btn btn-primary'>
						Добавить
					</button>
				</Form>
			</Formik>
			{props.postProductSuccess ? <div className='post_product_success'> Товар успешно добавлен </div> : null}
		</div>
	);
};
