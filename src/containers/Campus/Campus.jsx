import React from 'react';
import './Campus.scss';

import { locations } from '../../constants';

export default function Campus() {
	return (
		<section className='campus | section-padding container'>
			<div>
				<h1 className='section-title'>Our Global Campus</h1>
				<p className='section-subtitle'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>

				<ul className='campus-list'>
					{locations.map((campus, index) => (
						<li
							key={`campus-${index + 1}`}
							style={{ backgroundImage: `url("${campus.image}")` }}
							className='campus-item'
						>
							<h2 className='campus-location'>{campus.location}</h2>
						</li>
					))}
				</ul>
			</div>
		</section>
	);
}
