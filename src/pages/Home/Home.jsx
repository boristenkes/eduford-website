import React from 'react';
import './Home.scss';

import { Button, CTA, Banner, FadeIn } from '../../components';
import { Courses, Campus, Facilities, Testimonials } from '../../containers';
import { Link } from 'react-router-dom';
import { banners } from '../../assets';

export default function Home() {
	return (
		<>
			<Banner className='hero' fullHeight bgImg={banners.home}>
				<div className='hero-wrapper'>
					<h1 className='hero-title | head-text'>World's Biggest University</h1>
					<p className='hero-description | body-text text-center mx-auto'>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, 
						a labore. Vitae esse doloremque recusandae, quis libero ipsa cum.
					</p>
					<Link to='/contact'>
						<Button className='hero-button'>Visit us to Know More</Button>
					</Link>
				</div>
			</Banner>

			<Courses />
			<Campus />
			<Facilities />
			<Testimonials />
			<CTA />
		</>
	);
}
