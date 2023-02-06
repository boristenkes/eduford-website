import React from 'react';
import './Home.scss';

import { Button } from '../../components';
import { Courses } from '../../containers';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<>
			<header className='hero'>
				<div className='hero-wrapper'>
					<h1 className='hero-title | head-text'>World's Biggest University</h1>
					<p className='hero-description | body-text'>
						Making website is now one of the easiest things in the world. You
						just need to learn HTML, CSS, Javascipt and you are good to go.
					</p>
					<Link to='/contact'>
						<Button className='hero-button'>Visit us to Know More</Button>
					</Link>
				</div>
			</header>

			<Courses />
		</>
	);
}
