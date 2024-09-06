import contactsIg from '../assets/isto.svg';
import Form from '../components/Form.jsx';

const Contacts = () => {
	return (
		<section className='section__full'>
			<div className='container container-special'>
				<div className='contacts'>
					<div className='contacts__content'>
						<h2>Contact us</h2>
						<Form />
					</div>
					<div className='contacts__img'>
						<img src={contactsIg} alt='' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contacts;
