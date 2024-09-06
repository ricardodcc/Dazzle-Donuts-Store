import envelope from '../assets/Icons/Envelope.svg';
import { useFormik } from 'formik';
import { useState } from 'react';
import signupSchema from './ValidationSchema.jsx';

const Form = () => {
	const [formData, setFormData] = useState(null);
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			phoneNumber: '',
			subject: '',
			message: '',
		},
		onSubmit: values => {
			setFormData(values);
			resetFormValues();
			formik.resetForm();
		},
		validationSchema: signupSchema,
	});

	const resetFormValues = () => {
		const inputs = document.querySelectorAll('input');
		const textarea = document.querySelector('textarea');
		textarea.value = '';
		inputs.forEach(input => (input.value = ''));
	};

	return (
		<form onSubmit={formik.handleSubmit} className='contacts__content-form'>
			<label htmlFor='firstName'>First Name</label>
			<input type='text' placeholder='Ricardo' id='firstName' value={formik.firstName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
			{formik.errors.firstName && formik.touched.firstName && <p>{formik.errors.firstName}</p>}

			<label htmlFor='lastName'>Last Name</label>
			<input type='text' placeholder='Costa' id='lastName' value={formik.lastName} onChange={formik.handleChange} onBlur={formik.handleBlur} />
			{formik.errors.lastName && formik.touched.lastName && <p>{formik.errors.lastName}</p>}

			<label htmlFor='email'>Email</label>
			<input type='text' placeholder='ricardocosta@gmail.com' id='email' value={formik.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
			{formik.errors.email && formik.touched.email && <p>{formik.errors.email}</p>}

			<label htmlFor='phoneNumber'>Phone Number</label>
			<input type='phone' placeholder='123 456 789' id='phoneNumber' value={formik.phoneNumber} onChange={formik.handleChange} onBlur={formik.handleBlur} />
			{formik.errors.phoneNumber && formik.touched.phoneNumber && <p>{formik.errors.phoneNumber}</p>}

			<label htmlFor='subject'>Subject</label>
			<input type='text' placeholder='Your donuts' id='subject' value={formik.subject} onChange={formik.handleChange} onBlur={formik.handleBlur} />
			{formik.errors.subject && formik.touched.subject && <p>{formik.errors.subject}</p>}

			<label htmlFor='message'>Your Message</label>
			<textarea id='message' cols='30' rows='4' placeholder='Are the best ones!' value={formik.message} onChange={formik.handleChange} onBlur={formik.handleBlur}></textarea>
			{formik.errors.message && formik.touched.message && <p>{formik.errors.message}</p>}

			{/* button is disabled while submiting the formm  */}
			<button type='submit' disabled={formik.isSubmitting} className='btn btn-form'>
				Submit Message
				<img src={envelope} alt='Envelope icon' />
			</button>

			{formData && (
				<div style={{ margin: '1.25rem 0' }}>
					<h2>form:</h2>
					<p>{JSON.stringify(formData, null, 2)}</p>
				</div>
			)}
		</form>
	);
};

export default Form;
