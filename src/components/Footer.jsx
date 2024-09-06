import instagramIcon from '../assets/Icons/Instagram.svg';
import facebookIcon from '../assets/Icons/Facebook.svg';
import tiktokIcon from '../assets/Icons/Tiktok.svg';
import pinterestIcon from '../assets/Icons/Pinterest.svg';
import logo from '../assets/logo.svg';


const Footer = () => {
	const socials = [
		{ id: 1, icon: instagramIcon, href: 'https://www.instagram.com/', alt: 'instagram' },
		{ id: 2, icon: facebookIcon, href: 'https://www.facebook.com/', alt: 'facebook' },
		{ id: 3, icon: tiktokIcon, href: 'https://www.tiktok.com/', alt: 'tiktok' },
		{ id: 4, icon: pinterestIcon, href: 'https://www.pinterest.com/', alt: 'pinterest' },
	];

	return (
		<footer className='section__full-footer section__full-special'>
			<div className='container '>
				<div className='footer'>
					<div className='footer__company'>
						<img src={logo} className='footer__company-logo' alt='logo' />
						<p className='footer__company-text'>Dazzle Donuts</p>
					</div>
					<div className='footer__contacts'>
						<p>Contacts us:</p>
						<p>EMAIL: ricardodiascosta2002@gmail.com</p>
						<p>PHONE: +351 123 456 789</p>

						<div className='footer__contacts-socials'>
							<p>Follow us :</p>
							<ul className='footer__contacts-socials__list'>
								{socials.map(social => (
									<a target='_blank' href={social.href} key={social.id} className='footer__contacts-socials__list-item'>
										<img src={social.icon} alt={social.alt} />
									</a>
								))}
							</ul>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
