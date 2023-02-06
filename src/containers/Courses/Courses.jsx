import React from 'react';
import './Courses.scss';

import { courses } from '../../constants';

export default function Courses() {
	return (
		<section className='courses container section-padding'>
			<div>
				<h1 className='head-text | courses-title'>Courses We Offer</h1>
				<p
					className='body-text | courses-subtitle'
					style={{ textAlign: 'center' }}
				>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit.
				</p>
			</div>

			<ul className='course-list'>
				{courses.map((course, index) => (
					<li className='course' key={`course-${index + 1}`}>
						<h2 className='course-title'>{course.title}</h2>
						<p className='course-desc | body-text'>{course.desc}</p>
					</li>
				))}
			</ul>
		</section>
	);
}
