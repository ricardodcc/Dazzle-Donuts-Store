import oldSpot from '../assets/oldBaquery.webp';
import Donut from '../components/Donut';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { storyStages, infoSatges } from '../index.js';

const Story = () => {
	const [newStage, setNewStage] = useState('stage1');
	const handleStoryStage = stageName => {
		const updatedStages = [...storyStages];
		updatedStages.forEach(item => {
			item.to === stageName ? (item.active = true) : (item.active = false);
		});
		setNewStage(stageName);
		handleNewStoryStage(stageName);
	};

	const handleNewStoryStage = stageName => {
		const allStories = document.querySelectorAll('.story__content-item');
		allStories.forEach(item => {
			if (item.id === `story${stageName}`) {
				item.classList.add('active');
			} else {
				item.classList.remove('active');
			}
		});
	};

	useEffect(() => {
		const updatedStages = [...storyStages];
		updatedStages.forEach(item => {
			item.to === 'stage1' ? (item.active = true) : (item.active = false);
		});
		setNewStage('stage1');
	}, []);

	return (
		<section className='section__full'>
			<div className='container story'>
				<h2 className='story__heading'>Our Story</h2>
				<p>
					Welcome to a unique journey through time, where the charm of the past intertwines harmoniously with the innovation of the present. Here, in our beloved bakery, each division tells its own
					story, reflecting the rich heritage of past generations and the vibrant glow of the modern world. <br />
					<br />
					Click on the chocolate donuts to explore our story!
				</p>
				<div className='div'>
					<div className='trace'>
						{storyStages.map(stage => (
							<div className='ball' style={stage.style} id={stage.to} onClick={() => handleStoryStage(stage.to)}>
								{stage.active ? <Donut size={60} /> : <Donut size={60} color={'white'} />}
							</div>
						))}
					</div>
				</div>
				<div className='story__content container-special'>
					{infoSatges.map(stage => (
						<div className={`story__content-item ${stage.active ? 'active' : ''}`} id={stage.id}>
							<h3 className='story__content-item__title'>{stage.stageTitle}</h3>
							<div className='story__content-item__story'>
								<p className='story__content-item__paragraph'>
									{stage.stageStory.firstP}
									<br />
									<br />
									{stage.stageStory.secondP}
								</p>
								<img src={stage.img.src} alt='' className='story__content-item__img' />
							</div>
						</div>
					))}
				</div>
				<NavLink to={'/locations'} className={'story__button'}>
					<button className=' btn btn-reverse'>Where to find us</button>
				</NavLink>
			</div>
		</section>
	);
};

export default Story;
