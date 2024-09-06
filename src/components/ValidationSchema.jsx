import * as yup from 'yup';

const phoneRegExp = '^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$';
const signupSchema = yup.object().shape({
	firstName: yup.string().required('First name is required'),
	lastName: yup.string().required('Last name is required'),
	email: yup.string().email('This is not a valid email').required('E-mail is required'),
	phoneNumber: yup.string().matches(phoneRegExp, 'Phone number is not valid').required('Phone number is required'),
	subject: yup.string().min(1, 'Subject must be must have at least 1 charaters').required('Subject is required'),
	message: yup.string().min(5, 'Message must be must have at least 5 charaters').required('Message is required'),
});

export default signupSchema;
