import { useEffect, useState } from 'react';
import { storePlaces, placesFilters } from '../index.js';
const Locations = () => {
	const [places, setPlaces] = useState(storePlaces);
	const [filterCategories, setFilterCategories] = useState(placesFilters);
	const [filtersActive, setFiltersActive] = useState([]);

	const handleColorCategory = name => {
		switch (name) {
			case 'Cafe':
				return '#D30C7B';
			case 'Newest':
				return '#BC8034';
			case 'Self-service':
				return '#7D2E68';
		}
	};

	const updateGaleryPlaces = input => {
		const placesTmp = [...storePlaces];
		//places are already filtered by place name
		let placesWithFilters = [];
		const filteredPlaces = placesTmp.filter(place => place.name.toLowerCase().includes(input.toLowerCase()));
		//filter by active categories
		if (filtersActive.length !== 0) {
			filteredPlaces.forEach(place => {
				filtersActive.forEach(element => {
					if (place.categories.includes(element)) {
						placesWithFilters.push(place);
					}
				});
			});
			setPlaces(placesWithFilters);
		} else {
			setPlaces(filteredPlaces);
		}
	};

	const addPlacesFilter = name => {
		let filtersTmp = [...filterCategories];
		let filtersActiveTmp = [...filtersActive];

		filtersTmp.map(filter => {
			if (filter.name === name) {
				filter.active = !filter.active;
				filter.active ? filtersActiveTmp.push(filter.name) : filtersActiveTmp.splice(filtersActiveTmp.indexOf(filter.name), 1);
			}
		});
		setFilterCategories(filtersTmp);
		setFiltersActive(filtersActiveTmp);
	};

	useEffect(() => {
		const inputValue = document.getElementById('inputFilter').value;
		updateGaleryPlaces(inputValue);
	}, [filtersActive]);

	return (
		<section className='section__full'>
			<div className='container'>
				<h2 className='locations__heading'>Where you can visit us</h2>
				<div className='locations__filters'>
					<span>Search for the closest store:</span>
					<label htmlFor='inputFilter'></label>
					<input type='text' placeholder='Porto' id='inputFilter' name='inputFilter' onChange={e => updateGaleryPlaces(e.target.value)} />
					<div className='locations__filters-list'>
						{filterCategories.map(filter => (
							<button
								className='locations__filters-list-item'
								style={filter.active ? { backgroundColor: `${filter.colorAct}` } : { backgroundColor: `${filter.color}` }}
								key={filter.id}
								onClick={() => addPlacesFilter(filter.name)}
							>
								{filter.name}
							</button>
						))}
					</div>
				</div>
				<div className='locations__filters-list locations__filters-list-mobile'>
					{filterCategories.map(filter => (
						<button
							className='locations__filters-list-item'
							style={filter.active ? { backgroundColor: `${filter.colorAct}` } : { backgroundColor: `${filter.color}` }}
							key={filter.id}
							onClick={() => addPlacesFilter(filter.name)}
						>
							{filter.name}
						</button>
					))}
				</div>

				<ul className='locations__places'>
					{places.map((place, index) => (
						<li className='locations__places-item'>
							<img src={place.img.src} alt='Local photo' loading='lazy' />
							<h3 className='locations__places-item__name'>{place.name}</h3>
							<ul className='locations__places-item__categories'>
								{place.categories.map((element, elIndex) => (
									<li key={`${index}_${elIndex}`} style={{ backgroundColor: `${handleColorCategory(element)}` }}>
										{element}
									</li>
								))}
							</ul>
							<p className='locations__places-item__country'>
								<span>Location: </span>
								{place.city}, {place.Country}
							</p>
							<p className='locations__places-item__address'>
								<span>Adress: </span>
								{place.address}
							</p>
							<p className='locations__places-item__workHours'>
								<span>Open:</span> {place.workHours}
							</p>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default Locations;
