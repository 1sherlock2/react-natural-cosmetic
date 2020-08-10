import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react';

export const AddProductForm = (props) => {
	const initialValues = {
		name: '',
		img: '',
		description: '',
		price: '',
		brend: ''
	};
	const validationSchema = Yup.object({
		name: Yup.string().required('Необходимо заполнить поле'),
		img: Yup.object().shape({
			file: Yup.mixed()
				.required('A file is required')
				.test('fileFormat', 'PDF only', (value) => {
					console.log(value);
					return value && ['application/pdf'].includes(value.type);
				})
		}),
		description: '',
		price: Yup.number().required('Необходимо установить цену'),
		brend: ''
	});
	return (
		<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={props.onSubmit}>
			<Form>
				<div class="form-group">
					<label for="exampleInputName">Название продукта</label>
					<Field name="name" type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Добавить товар" />
					<ErrorMessage name="name" />
				</div>
				<div class="form-group">
					<label for="exampleInputImg"> Вставьте картинку </label>
					<Field name="img" type="file" class="form-control" id="exampleInputImg" aria-describedby="imgHelp" placeholder="Вставьте картинку" />
					<ErrorMessage name="img" />
				</div>
				<div class="form-group">
					<label for="exampleInputDescription"> Описание товара </label>
					<Field
						name="description"
						type="text"
						class="form-control"
						id="exampleInputDescription"
						aria-describedby="descriptionHelp"
						placeholder="Описание"
					/>
					<ErrorMessage name="price" />
				</div>
				<div class="form-group">
					<label for="exampleInputPrice"> Цена </label>
					<Field name="price" type="number" class="form-control" id="exampleInputPrice" aria-describedby="priceHelp" placeholder="Цена" />
				</div>
				<div class="form-group">
					<label for="exampleInputBrend"> Цена </label>
					<Field name="brend" type="text" class="form-control" id="exampleInputBrend" aria-describedby="brendHelp" placeholder="Бренд" />
				</div>
			</Form>
		</Formik>
	);
};
