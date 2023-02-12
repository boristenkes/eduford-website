import React from 'react';
import './Facilities.scss';

import { facilities } from '../../constants';
import { FadeIn } from '../../components';

export default function Facilities() {
	return (
		<section className='facilities | container section-padding'>
			<div>
				<h2 className='section-title'>Our Facilities</h2>
				<p className='section-subtitle'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</div>
			<FadeIn selectChildren tag='ul' className='facilities-list'>
				{facilities.map((facility, index) => (
					<li className='facilities-item' key={`facility-${index + 1}`}>
						<div className='img-wrapper'>
							<img src={facility.image} alt={facility.title} />
						</div>
						<h3>{facility.title}</h3>
						<p>{facility.content}</p>
					</li>
				))}
			</FadeIn>
		</section>
	);
}
