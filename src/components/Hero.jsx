import Button from './Button';
import { NavLink } from 'react-router-dom';
import heroImg from '../assets/Hero-img.svg';
import { socials } from '../index.js';

const Hero = () => {
	return (
		<section className='section__full'>
			<div className='container container-special'>
				<div className='hero'>
					<div className='hero__content'>
						<h2>
							<span>DAZZLE</span> DONUTS
						</h2>
						<h3>
							Where Every Bite
							<br />
							<span>Sparkles</span> with Delight!
						</h3>
						<div className='hero__content-buttons'>
							<Button className='hero__content-button btn' id={1} text='Our Donuts' href='#prevStore' />
							<NavLink to='/locations'>
								<Button id={2} className='hero__content-button btn btn-reverse' text='Where to find us' />
							</NavLink>
						</div>
						<div className='hero__content-socials'>
							<p>Follow us :</p>
							<ul className='hero__content-socials__list'>
								{socials.map(social => (
									<a href={social.href} key={social.id} className='hero__content-socials__list-item'>
										<img src={social.icon} alt={social.alt} />
									</a>
								))}
							</ul>
						</div>
					</div>
					<div className='hero__image'>
						<img src={heroImg} alt='hero' />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
