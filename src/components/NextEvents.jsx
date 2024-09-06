import workshopImg from '../assets/events.svg';
/*import rightArrow from '../assets/Icons/Arrow-right.svg';
import workshopImgSec from '../assets/eventDL.png'; */
import { nextEvents } from '../index.js';
const NextEvents = () => {
	return (
		<section className='section__full'>
			<div className='container container-grid'>
				<div className='nextEvents'>
					<h2 className='nextEvents__heading'>NEXT EVENTS</h2>
					<div className='nextEvents__content'>
						{nextEvents.map(item => (
							<div className={`nextEvents__content-${item.classSufix} container-special nextEvents__content-item`} key={item.id}>
								<img src={item.img.src} alt={item.img.alt} className='nextEvents__content-img' />
								<div className='nextEvents__content-info'>
									<h3 className='nextEvents__content-info__title'>{item.name}</h3>
									<p className='nextEvents__content-info__date'>
										{item.date} - {item.time}
									</p>
									<p className='nextEvents__content-info__location'>
										{item.location.city}, {item.location.country}
									</p>
									<button className='btn btn-donut nextEvents__content-info__button'>Subscribe</button>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default NextEvents;
