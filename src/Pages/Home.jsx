import Hero from '../components/Hero';
import StorePreview from '../components/StorePreview';
import NextEvents from '../components/NextEvents';

const Home = () => {
	return (
		<>
			<Hero />
			<StorePreview menuPage={false} />
			<NextEvents />
		</>
	);
};

export default Home;
