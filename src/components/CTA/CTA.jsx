import React from 'react';

import './CTA.scss';
import { Button, FadeIn } from '../../components';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';

export default function CTA() {
	const isPhone = useMediaQuery({ query: '(max-width: 480px)' });

	return (
		<FadeIn>
			<section className='cta | container section-padding'>
				<h2 className='head-text'>
					Enroll For Our Various Online Courses {!isPhone && <br />}
					Anywhere From The World
				</h2>
				<Link to='/contact'>
					<Button>Contact Us</Button>
				</Link>
			</section>
		</FadeIn>
	);
}
