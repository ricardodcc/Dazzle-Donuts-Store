import { NavLink } from 'react-router-dom';
import Donut from '../assets/lightDonut.svg';
import PopularDonuts from './PopularDonuts.jsx';
import ExoticDonuts from './ExoticDonuts.jsx';

const StorePreview = ({ menuPage }) => {
	return (
		<section className='section__full' id='prevStore'>
			<div className='container'>
				<div className='prevStore'>
					{menuPage ? (
						<h2 className='prevStore__heading'>
							SWEET D
							<span>
								<img src={Donut} alt='Donut' />
							</span>
							NUTS
						</h2>
					) : (
						<h2 className='prevStore__heading'>
							M
							<span>
								<img src={Donut} alt='Donut' />
							</span>
							ST WANTED
						</h2>
					)}
					<PopularDonuts />
					{menuPage ? (
						<>
							<h2 className='prevStore__heading' style={{ marginTop: '2rem' }}>
								EX
								<span>
									<img src={Donut} alt='Donut' />
								</span>
								TIC DONUTS
							</h2>
							<ExoticDonuts />
						</>
					) : (
						<NavLink to={'/menu'} className={'prevStore__button'}>
							<button className=' btn'>Check all donuts</button>
						</NavLink>
					)}
				</div>
			</div>
		</section>
	);
};

export default StorePreview;
