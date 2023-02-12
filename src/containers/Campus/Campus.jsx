import React from 'react';
import './Campus.scss';

import { locations } from '../../constants';
import { FadeIn } from '../../components';

export default function Campus() {
	return (
		<section className='campus | section-padding container'>
			<div>
				<h2 className='section-title'>Our Global Campus</h2>
				<p className='section-subtitle'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>

				<FadeIn selectChildren tag='ul' className='campus-list'>
					{locations.map((campus, index) => (
						<li
							key={`campus-${index + 1}`}
							style={{ backgroundImage: `url("${campus.image}")` }}
							className='campus-item'
						>
							<h3 className='campus-location'>{campus.location}</h3>
						</li>
					))}
				</FadeIn>
			</div>
		</section>
	);
}
