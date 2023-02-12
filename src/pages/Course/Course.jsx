import React from 'react';
import './Course.scss';

import { banners } from '../../assets';
import { Banner } from '../../components';
import { Courses, Facilities } from '../../containers';

export default function Course() {
	return (
		<>
			<Banner bgImg={banners.courses}>
				<h1 className='head-text'>Our Courses</h1>
			</Banner>
			<Courses />
			<Facilities />
		</>
	);
}
