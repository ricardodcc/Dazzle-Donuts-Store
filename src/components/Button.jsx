// imports relative to react
import PropTypes from 'prop-types';
// imports relative to data
//imports relative to styles
// imports relative to assets

const Button = ({ className, id, text, onClick, href }) => {
	const renderButton = () => (
		<button onClick={onClick} className={className || null} key={id}>
			{text}
		</button>
	);

	const renderAnchor = () => (
		<a href={href} onClick={onClick} key={id} className={className || null}>
			{text}
		</a>
	);

	return href ? renderAnchor() : renderButton();
};

//define default values for a button
Button.defaultProps = {
	text: 'Button with default text',
};
//define which values passed to a button are required or not
Button.propTypes = {
	className: PropTypes.string,
	id: PropTypes.number.isRequired,
	text: PropTypes.string.isRequired,
	onClick: PropTypes.func,
	href: PropTypes.string,
};

export default Button;
