import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navegation } from '../index.js';

// imports relative to assets
import logo from '../assets/logo.svg';
import burgerIcon from '../assets/Icons/Burger.svg';
import cartIcon from '../assets/Icons/Cart.svg';
import chevronLeftIcon from '../assets/Icons/Chevron-left.svg';
import chevronTopIcon from '../assets/Icons/Chevron-top.svg';
import DropDownCurrency from './DropDownCurrency.jsx';

const Header = () => {
	const [showCurrencyList, setShowCurrencyList] = useState(false);
	const [currency, setCurrency] = useState('EUR');
	// const [continent, setContinent] = useState('Europe');
	// const [menuMobile, setmenuMobile] = useState(false);

	const handleShowCurrencyList = () => {
		setShowCurrencyList(!showCurrencyList);
	};

	return (
		<header className='section__full section__full-special'>
			<div className='container container-special'>
				<div className='header'>
					<div className='header__logo'>
						<Link to='/'>
							<img src={logo} alt='Dazzle Donuts logo' />
						</Link>
					</div>
					<nav className='header__navigation'>
						<ul className='header__navigation-list'>
							{navegation.map(item => (
								<li key={item.id}>
									<NavLink to={item.path} className='header__navigation-item'>
										{item.route}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
					<div className='header__functionalities'>
						<div className='header__functionalities-currency'>
							<p>{currency}</p>
							<svg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
								<path
									d='M6.25 14.7183H7.91094C8.4375 19.2542 11.4328 21.8746 16.1562 21.8746C17.1281 21.8746 17.9797 21.7683 18.7484 21.5855V19.5542C17.9922 19.7402 17.1156 19.8199 16.1562 19.8199C12.875 19.8199 10.7578 17.948 10.2578 14.7199H16.5344V13.2699H10.1516V11.8074C10.1516 11.6355 10.1516 11.4652 10.1641 11.2933H16.5359V9.84487H10.3406C10.9469 6.87924 13.0266 5.1808 16.1578 5.1808C17.1172 5.1808 17.9937 5.25893 18.75 5.45737V3.42768C17.9022 3.21755 17.0312 3.1157 16.1578 3.12456C11.5828 3.12456 8.62656 5.57612 7.96406 9.84331H6.25V11.2933H7.82813V13.2699H6.25V14.7199V14.7183Z'
									fill='#a81de4'
								/>
							</svg>
							<img src={showCurrencyList ? chevronTopIcon : chevronLeftIcon} alt='Dropwon icon' onClick={() => handleShowCurrencyList()} />
							{showCurrencyList ? <DropDownCurrency /> : null}
						</div>
						<div className='header__functionalities-cart'>
							<img src={cartIcon} alt='Store cart' />
						</div>
						<div className='header__functionalities-burger'>
							<img src={burgerIcon} alt='Hamburger icon' />
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
