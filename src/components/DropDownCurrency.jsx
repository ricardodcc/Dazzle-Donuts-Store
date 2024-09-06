import React, { useState } from 'react';
const DropDownCurrency = () => {
	const [currencies, setCurrencies] = useState([
		{ id: 1, name: 'EUR', symbol: 'F', active: '' },
		{ id: 2, name: 'BRL', symbol: 'F', active: '' },
		{ id: 3, name: 'USD', symbol: 'F', active: '' },
		{ id: 4, name: 'GBP', symbol: 'F', active: '' },
	]);

	const UpdateCurrency = id => {
		const currencySelect = document.querySelector('.dropdown__list-item.active');
		currencySelect.classList.remove('active');
		const newCurrency = document.getElementById(`${id}`);
		newCurrency.classList.add('active');
		setCurrencies(currencies.map(currency => (currency.id === id ? { ...currency, active: 'active' } : { ...currency, active: '' })));
	};

	const ResetCurrencies = () => {};

	return (
		<div className='dropdown'>
			<ul className='dropdown__list'>
				{currencies.map(currency => (
					<li className={'dropdown__list-item ' + currency.active} id={currency.id} onClick={() => UpdateCurrency(currency.id)}>
						{currency.name} <span>{currency.symbol}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default DropDownCurrency;
