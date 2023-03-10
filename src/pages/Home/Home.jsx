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
						Making website is now one of the easiest things in the world. You
						just need to learn HTML, CSS, Javascipt and you are good to go.
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
