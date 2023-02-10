import React from 'react';
import './About.scss';

import { Footer } from '../../containers';
import { Banner, Button } from '../../components';
import { banners } from '../../assets';
import { meeting } from '../../assets';
import { useMediaQuery } from 'react-responsive';

export default function About() {
	const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });
	return (
		<>
			<Banner bgImg={banners.about}>
				<h1 className='head-text'>About Us</h1>
			</Banner>
			<section className='about | container even-columns section-padding'>
				<div>
					<h2 className='head-text'>
						We are the world's largest{isDesktop && <br />} university
					</h2>
					<p className='body-text'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
						fugiat laudantium iure unde soluta vero alias debitis natus, itaque
						sapiente doloremque cupiditate fugit exercitationem. Eos atque quas
						animi, beatae, ea unde voluptas aperiam sequi libero perspiciatis
						corrupti? Totam nostrum recusandae, labore adipisci obcaecati cum
						quidem, assumenda exercitationem doloribus distinctio hic incidunt
						dolores non, id quis?
					</p>
					<Button inverted>Explore Now</Button>
				</div>
				<div>
					<img src={meeting} alt='Meeting' />
				</div>
			</section>
			<Footer />
		</>
	);
}
