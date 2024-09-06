import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { prevStore } from '../index.js';

const MenuItem = () => {
	const { id } = useParams();
	const [donutDetails, setDonutDetails] = useState(null);
	const [donutNutrition, setDonutNutrition] = useState('');
	const [selectedImage, setSelectedImage] = useState(0);
	let apiKey = 'J2YrWPu9tBJdm20cG6J/hw==Va1K6JN8yj9zSrGI';

	useEffect(() => {
		const fetchNutritionData = async query => {
			let donutCalories = 0;
			try {
				const url = `https://api.calorieninjas.com/v1/nutrition?query=${query}`;
				const response = await fetch(url, {
					method: 'GET',
					headers: {
						'X-Api-Key': apiKey,
						'Content-Type': 'application/json',
					},
				});
				const result = await response.json();
				result.items.forEach(item => {
					donutCalories += item.calories;
				});
				setDonutNutrition(donutCalories.toFixed(1));
			} catch (error) {
				console.log(error);
			}
		};

		const donut = prevStore.find(donut => donut.id == id);
		let query = '';
		donut.ingredientsList.ingredient.forEach((ingredient, index) => {
			query += `${donut.ingredientsList.quantity[index]}g of ${ingredient.includes('_') ? ingredient.replace('_', ' ') : ingredient}`;
			if (index < donut.ingredientsList.ingredient.length - 1) {
				query += ' and ';
			}
		});
		fetchNutritionData(query);
		setDonutDetails(donut);
	}, [id]);

	const handleImageClick = index => {
		setSelectedImage(index);
	};

	if (!donutDetails || !donutNutrition) {
		return <div className='section__full container loading individual__name loading'>Loading donut information...</div>;
	}

	return (
		<section className='container'>
			<div className='individual section__full'>
				<div className='individual__galery'>
					<div className='individual__galery-emphasis'>
						<img src={donutDetails.imgs.src[selectedImage]} alt='' />
					</div>
					<div className='individual__galery-other'>
						<ul>
							{donutDetails.imgs.src.map((img, index) => (
								<li key={index} onClick={() => handleImageClick(index)}>
									<img src={img} alt='' className={index === selectedImage ? 'active' : ''} />
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className='individual__content'>
					<h2 className='individual__name'>
						<span className='fixed'>Donut Name: </span>
						{donutDetails.name}
					</h2>
					<p className='individual__content__ingredients individual__name fixed'>Ingredients:</p>
					<ul className='individual__content__ingredients-list'>
						{donutDetails.ingredientsList.ingredient.map((ingredient, index) => (
							<li key={index}>
								{ingredient}, {donutDetails.ingredientsList.quantity[index]}g
							</li>
						))}
					</ul>
					<p className='fixed individual__name'>
						Kcal: <span>{donutNutrition}</span>
					</p>
					<div className='individual__content__cart'>
						<label htmlFor='donutQuantity' className='individual__name fixed'>
							Quantity:
						</label>
						<input type='number' id='donutQuantity' name='donutQuantity' className='individual__content__cart-input' />
					</div>
					<button className='btn btn-donut individual__btn'>Add to cart</button>
				</div>
			</div>
		</section>
	);
};

export default MenuItem;
