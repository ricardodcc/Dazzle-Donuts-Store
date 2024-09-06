// salmon donut
import salmonDonut1 from './assets/salmonDonut1.png';
import salmonDonut2 from './assets/salmonDonut2.png';
import salmonDonut3 from './assets/salmonDonut3.png';
import salmonDonut4 from './assets/salmonDonut4.png';
//cheddar and Bacon donut
import cheddarBacon1 from './assets/cheddarBacon1.png';
import cheddarBacon2 from './assets/cheddarBacon2.png';
import cheddarBacon3 from './assets/cheddarBacon3.png';
import cheddarBacon4 from './assets/cheddarBacon4.png';
//chicken Pesto donut
import chickenPesto1 from './assets/chickenPesto1.png';
import chickenPesto2 from './assets/chickenPesto2.png';
import chickenPesto3 from './assets/chickenPesto3.png';
import chickenPesto4 from './assets/chickenPesto4.png';
//Mediterranean donut
import mediterranean1 from './assets/mediterranean1.png';
import mediterranean2 from './assets/mediterranean2.png';
import mediterranean3 from './assets/mediterranean3.png';
import mediterranean4 from './assets/mediterranean4.png';

//Whimsy Wheels donut
import whimsyWheels1 from './assets/whimsyWheels1.png';
import whimsyWheels2 from './assets/whimsyWheels2.png';
import whimsyWheels3 from './assets/whimsyWheels3.png';
import whimsyWheels4 from './assets/whimsyWheels4.png';

//Fun WheelsBall donut
import charmCircles1 from './assets/charmCircles1.png';
import charmCircles2 from './assets/charmCircles2.png';
import charmCircles3 from './assets/charmCircles3.png';
import charmCircles4 from './assets/charmCircles4.png';

//Magic Rings donut
import magicRings1 from './assets/magicRings1.png';
import magicRings2 from './assets/magicRings2.png';
import magicRings3 from './assets/magicRings3.png';
import magicRings4 from './assets/magicRings4.png';

//Fun WheelsBall donut
import funWheelsBall1 from './assets/funWheelsBall1.png';
import funWheelsBall2 from './assets/funWheelsBall2.png';
import funWheelsBall3 from './assets/funWheelsBall3.png';
import funWheelsBall4 from './assets/funWheelsBall4.png';

// Store Locations imgs
import portoStore from './assets/portoStore.png';
import lisbonStore from './assets/lisbonStore.png';
import nyStore from './assets/nyStore.png';
import frankfurtStore from './assets/frankfurtStore.png';
import texasStore from './assets/texasStore.png';
import brusselsStore from './assets/brusselsStore.png';
import ljubljanaStore from './assets/ljubljanaStore.png';

export const navegation = [
	{ id: 1, title: 'Locations', route: 'Location', path: 'locations' },
	{ id: 2, title: 'Menu', route: 'Menu', path: 'menu' },
	{ id: 3, title: 'Our Story', route: 'Story', path: 'story' },
	{ id: 4, title: 'Contacts', route: 'Contacts', path: 'contacts' },
	{ id: 5, title: 'Blog', route: 'Blog', path: 'blog' },
];

export const storyStages = [
	{
		stage: 1,
		to: 'stage1',
		style: {
			left: '0%',
		},
		active: true,
	},
	{
		stage: 2,
		to: 'stage2',
		style: {
			left: '33%',
		},
		active: false,
	},
	{
		stage: 3,
		to: 'stage3',
		style: {
			left: '66%',
		},
		active: false,
	},
	{
		stage: 4,
		to: 'stage4',
		style: {
			right: '0%',
		},
		active: false,
	},
];

import secondSpot from './assets/oldBaquery.webp';
import firstSpot from './assets/firstSpot.png';
import thirdSpot from './assets/thirdSpot.png';
import forthSpot from './assets/forthSpot.png';
export const infoSatges = [
	{
		id: 'storystage1',
		stageTitle: 'The origin',
		stageStory: {
			firstP:
				'It all started with Rosinha and her husband, José, who spent hours in their home kitchen, preparing the donuts that would become famous in the city. With a secret recipe passed down from generation to generation, they have won the hearts of locals with their soft and tasty donuts.',
			secondP: 'The simplicity and love they put into each preparation were the real secret behind their success.',
		},
		img: {
			src: firstSpot,
			alt: 'ddd',
		},
		active: true,
	},
	{
		id: 'storystage2',
		stageTitle: 'The Expansion',
		stageStory: {
			firstP: "As time passed, the fame of Dona Rosinha's donuts only grew. As a result, demand also increased, and the small home kitchen was no longer enough to serve all customers. ",
			secondP:
				'So, the family decided to expand the business, acquiring a larger space in the city center. The pastry shop gained a new life, with cozy decor and tables where customers could enjoy delicious donuts accompanied by fresh coffee.',
		},
		img: {
			src: secondSpot,
			alt: 'ddd',
		},
	},
	{
		id: 'storystage3',
		stageTitle: 'Innovation',
		stageStory: {
			firstP:
				'With expansion also came the need for innovation. New preparation methods were introduced, always maintaining the essence of the original recipe, but incorporating modern techniques to guarantee the consistency and quality of the donuts.',
			secondP:
				'The family invested in state-of-the-art equipment and brought new flavors and toppings to the menu, remaining faithful to tradition, but also keeping up with contemporary confectionery trends.',
		},
		img: {
			src: thirdSpot,
			alt: 'ddd',
		},
	},
	{
		id: 'storystage4',
		stageTitle: 'The Tradition Continues',
		stageStory: {
			firstP:
				'Despite all the changes over the years, one thing has remained constant at Dona Rosinha: the love conveyed in each donut prepared. Even as the business evolved, the secret recipe continued to be the heart of the pastry, passed down from generation to generation, preserving the essence and authentic flavor that won over customers from the beginning. ',
			secondP:
				'The pastry shop prospered, but never lost its family soul, where human warmth and dedication to detail continued to be the difference that kept customers coming back again and again in search of that unique taste of love in the form of a donut.',
		},
		img: {
			src: forthSpot,
			alt: 'ddd',
		},
	},
];

export const prevStore = [
	{
		id: 1,
		name: 'Whimsy Wheels',
		cost: {
			price: '5.5',
			currency: 'EUR',
		},
		imgs: {
			src: [whimsyWheels3, whimsyWheels1, whimsyWheels2, whimsyWheels4],
			alt: 'Donut image',
		},
		ingredientsList: {
			ingredient: ['flour', 'sugar', 'eggs', 'milk', 'Baking powder', 'salt', 'butter', 'mini marshmallows', 'chocolate cookie', 'hazelnut', 'cream'],
			quantity: [270, 70, 125, 150, 7, 3, 75, 13, 15, 3, 5],
		},
		kcal: 0,
	},
	{
		id: 2,
		name: 'Fun WheelsBall',
		cost: {
			price: '2.5',
			currency: 'EUR',
		},
		imgs: {
			src: [funWheelsBall3, funWheelsBall1, funWheelsBall2, funWheelsBall4],
			alt: 'Donut image',
		},
		ingredientsList: {
			ingredient: ['flour', 'sugar', 'eggs', 'milk', 'Baking powder', 'salt', 'butter', 'chocolate sprinkles', 'sugar', 'vanilla cream'],
			quantity: [570, 70, 125, 150, 7, 3, 75, 8, 8, 8],
		},
		kcal: 0,
	},
	{
		id: 3,
		name: 'Magic Rings',
		cost: {
			price: '1.5',
			currency: 'EUR',
		},
		imgs: {
			src: [magicRings3, magicRings1, magicRings2, magicRings4],
			alt: 'Donut image',
		},
		ingredientsList: {
			ingredient: ['flour', 'sugar', 'eggs', 'milk', 'Baking powder', 'salt', 'butter', 'chocolate sprinkles', 'sugar', 'vanilla cream'],
			quantity: [370, 70, 125, 150, 7, 3, 75, 8, 8, 13],
		},
		kcal: 0,
	},
	{
		id: 4,
		name: 'Charm Circles',
		cost: {
			price: '3.5',
			currency: 'EUR',
		},
		imgs: {
			src: [charmCircles1, charmCircles2, charmCircles3, charmCircles4],
			alt: 'Donut image',
		},
		ingredientsList: {
			ingredient: ['flour', 'sugar', 'eggs', 'milk', 'Baking powder', 'salt', 'butter', 'caramel', 'almond', 'sea salt'],
			quantity: [270, 70, 125, 150, 7, 3, 75, 12, 8, 1],
		},
		kcal: 0,
	},
	{
		id: 5,
		name: 'Mediterranean Flavours',
		cost: {
			price: '3',
			currency: 'EUR',
		},
		imgs: {
			src: [mediterranean1, mediterranean2, mediterranean3, mediterranean4],
			alt: 'Donut image',
		},
		ingredientsList: {
			ingredient: ['flour', 'sugar', 'eggs', 'milk', 'Baking powder', 'salt', 'butter', 'feta cheese', 'black olives', 'tomatoes', 'Fresh basil'],
			quantity: [270, 70, 125, 150, 7, 3, 75, 40, 40, 25, 20],
		},
		kcal: 0,
	},
	{
		id: 6,
		name: 'Cheddar & Bacon',
		cost: {
			price: '4',
			currency: 'EUR',
		},
		imgs: {
			src: [cheddarBacon2, cheddarBacon1, cheddarBacon3, cheddarBacon4],
			alt: 'Donut image',
		},
		ingredientsList: {
			ingredient: ['flour', 'sugar', 'eggs', 'milk', 'Baking powder', 'salt', 'butter', 'cheddar cheese', 'bacon bits', 'Chopped chives'],
			quantity: [270, 70, 125, 150, 7, 3, 75, 40, 25, 8],
		},
		kcal: 0,
	},
	{
		id: 7,
		name: 'Chicken Pesto',
		cost: {
			price: '4.5',
			currency: 'EUR',
		},
		imgs: {
			src: [chickenPesto1, chickenPesto2, chickenPesto3, chickenPesto4],
			alt: 'Donut image',
		},
		ingredientsList: {
			ingredient: ['flour', 'sugar', 'eggs', 'milk', 'Baking powder', 'salt', 'butter', 'Basil pesto', 'grilled chicken', 'cherry tomatoes', 'grated parmesan cheese'],
			quantity: [270, 70, 125, 150, 7, 3, 75, 40, 60, 25, 25],
		},
		kcal: 0,
	},
	{
		id: 8,
		name: 'Savory Salmon Surprise',
		cost: {
			price: '5.5',
			currency: 'EUR',
		},
		imgs: {
			src: [salmonDonut4, salmonDonut2, salmonDonut3, salmonDonut1],
			alt: 'Donut image',
		},
		ingredientsList: {
			ingredient: ['flour', 'sugar', 'eggs', 'milk', 'Baking powder', 'salt', 'butter', 'smoked salmon', 'avocado', 'Chopped chives', 'black pepper'],
			quantity: [270, 70, 125, 150, 7, 3, 75, 40, 100, 8, 2],
		},
		kcal: 0,
	},
];

import donutDecoWK from './assets/donutDecoWK.png';
import donutDecoGK from './assets/donutDecoGW.png';
import donutDecoDK from './assets/donutDecoDK.png';
import donutDecoTK from './assets/donutDecoTK.png';
export const nextEvents = [
	{
		id: 1,
		name: 'Gourmet Donut Tasting',
		location: {
			city: 'Lisbon',
			country: 'Portugal',
		},
		date: '22/12/2025',
		time: '10:00 AM',
		price: '26 EUR',
		classSufix: 'tl',
		img: {
			src: donutDecoGK,
			alt: 'Lorem ipsum',
		},
	},
	{
		id: 2,
		name: 'Donut Treasure Hunt',
		location: {
			city: 'Las Vegas',
			country: 'United States',
		},
		date: '31/12/2025',
		time: '10:00 PM',
		price: 'Free',
		classSufix: 'tr',
		img: {
			src: donutDecoTK,
			alt: 'Lorem ipsum',
		},
	},
	{
		id: 3,
		name: 'Donut Decorating Workshop',
		location: {
			city: 'Frankfurt',
			country: 'Germany',
		},
		date: '22/12/2025',
		time: '10:00 AM',
		price: '15 EUR',
		classSufix: 'dl',
		img: {
			src: donutDecoWK,
			alt: 'Lorem ipsum',
		},
	},
	{
		id: 4,
		name: 'Homemade Donut Making Class',
		location: {
			city: 'Porto',
			country: 'Portugal',
		},
		date: '22/05/2025',
		time: '10:00 AM',
		price: 'Free',
		classSufix: 'dr',
		img: {
			src: donutDecoDK,
			alt: 'Lorem ipsum',
		},
	},
];

export const storePlaces = [
	{
		id: 1,
		name: 'Dazzle Delights',
		categories: ['Cafe', 'Newest', 'Self-service'],
		city: 'Porto',
		Country: 'Portugal',
		address: 'Avenida das Nações Unidas',
		workHours: '10:00 - 22:00 + GMT+0',
		img: {
			src: portoStore,
			alt: 'Donut image',
		},
	},
	{
		id: 2,
		name: 'Sparkle Sweets',
		categories: ['Newest', 'Cafe'],
		city: 'Lisboa',
		Country: 'Portugal',
		address: 'Avenida das Nações Unidas',
		workHours: '10:00 - 22:00 + GMT+0',
		img: {
			src: lisbonStore,
			alt: 'Donut image',
		},
	},
	{
		id: 3,
		name: 'Glittery Glaze Donuts',
		categories: ['Self-service', 'Newest'],
		city: 'New York',
		Country: 'United States',
		address: 'Avenida das Nações Unidas',
		workHours: '10:00 - 22:00 + GMT+4',
		img: {
			src: nyStore,
			alt: 'Donut image',
		},
	},
	{
		id: 4,
		name: 'Brilliance Bites',
		categories: ['Self-service'],
		city: 'Frankfurt',
		Country: 'Germany',
		address: 'Avenida das Nações Unidas',
		workHours: '10:00 - 22:00 + GMT-2',
		img: {
			src: frankfurtStore,
			alt: 'Donut image',
		},
	},
	{
		id: 5,
		name: 'Twinkle Twist Pastries',
		categories: ['Cafe'],
		city: 'Texas',
		Country: 'United States',
		address: 'Avenida das Nações Unidas',
		workHours: '10:00 - 22:00 + GMT+6',
		img: {
			src: texasStore,
			alt: 'Donut image',
		},
	},
	{
		id: 6,
		name: 'Shine & Dough',
		categories: ['Newest'],
		city: 'Brussels',
		Country: 'Belgium',
		address: 'Avenida das Nações Unidas',
		workHours: '10:00 - 22:00 + GMT+1',
		img: {
			src: brusselsStore,
			alt: 'Donut image',
		},
	},
	{
		id: 7,
		name: 'Glimmering Goodies',
		categories: ['Self-service', 'Cafe'],
		city: 'Liubliana',
		Country: 'Slovenia',
		address: 'Avenida das Nações Unidas',
		workHours: '10:00 - 22:00 + GMT+4',
		img: {
			src: ljubljanaStore,
			alt: 'Donut image',
		},
	},
];

export const placesFilters = [
	{ name: 'Cafe', colorAct: '#960756', color: '#D30C7B', active: false },
	{ name: 'Newest', colorAct: '#8A5F27', color: '#BC8034', active: false },
	{ name: 'Self-service', colorAct: '#541F46', color: '#7D2E68', active: false },
];

import instagramIcon from './assets/Icons/Instagram.svg';
import facebookIcon from './assets/Icons/Facebook.svg';
import tiktokIcon from './assets/Icons/Tiktok.svg';
import pinterestIcon from './assets/Icons/Pinterest.svg';
export const socials = [
	{ id: 1, icon: instagramIcon, href: 'https://www.instagram.com/', alt: 'instagram' },
	{ id: 2, icon: facebookIcon, href: 'https://www.facebook.com/', alt: 'facebook' },
	{ id: 3, icon: tiktokIcon, href: 'https://www.tiktok.com/', alt: 'tiktok' },
	{ id: 4, icon: pinterestIcon, href: 'https://www.pinterest.com/', alt: 'pinterest' },
];
