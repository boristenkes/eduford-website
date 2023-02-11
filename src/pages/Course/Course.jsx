import React from 'react';
import './Course.scss';

import { banners } from '../../assets';
import { Banner } from '../../components';
import { Courses, Facilities, Footer } from '../../containers';

export default function Course() {
	return (
		<>
			<section>
				<Banner bgImg={banners.courses}>
					<h1 className='head-text'>Our Courses</h1>
				</Banner>
			</section>
			<Courses />
			<Facilities />
		</>
	);
}
