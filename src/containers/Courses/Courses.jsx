import React from 'react';
import './Courses.scss';

import { courses } from '../../constants';
import { FadeIn } from '../../components';

export default function Courses() {
	return (
		<section className='courses container section-padding'>
			<div>
				<h2 className='courses-title | section-title'>Courses We Offer</h2>
				<p className='courses-subtitle | section-subtitle'>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
			</div>

			<FadeIn
				selectChildren={true}
				offset='50%'
				threshold={0.5}
				tag='ul'
				className='course-list'
			>
				{courses.map((course, index) => (
					<li className='course' key={`course-${index + 1}`}>
						<h3 className='course-title'>{course.title}</h3>
						<p className='course-desc | body-text'>{course.desc}</p>
					</li>
				))}
			</FadeIn>
		</section>
	);
}
