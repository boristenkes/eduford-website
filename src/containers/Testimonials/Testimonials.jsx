import React from 'react';
import {
	FaStar as FullStar,
	FaStarHalfAlt as HalfStar,
	FaRegStar as EmptyStar,
} from 'react-icons/fa';

import './Testimonials.scss';
import { testimonials } from '../../constants';
import { FadeIn } from '../../components';

export default function Testimonials() {
	return (
		<section className='testimonials | section-padding container'>
			<div>
				<h2 className='section-title'>What Our Students Say</h2>
				<p className='section-subtitle'>
					Lorem ipsum dolor sit amet consectetur adipisicing elit.
				</p>
			</div>
			<FadeIn selectChildren className='testimonials-list'>
				{testimonials.map((testimonial, index) => (
					<li className='testimonials-item' key={`testimonial-${index + 1}`}>
						<img src={testimonial.avatar} alt={testimonial.name} />
						<div className='testimonials-item-content'>
							<p>{testimonial.content}</p>
							<h3>{testimonial.name}</h3>
							<ul className='rating'>{getStars(testimonial.rating)}</ul>
						</div>
					</li>
				))}
			</FadeIn>
		</section>
	);
}

function getStars(rating) {
	let fullStars = Math.floor(rating);
	let halfStars = rating % 1 >= 0.5 ? 1 : 0;
	let emptyStars = 5 - fullStars - halfStars;

	let stars = [];
	for (let i = 0; i < fullStars; i++) {
		stars.push(
			<li key={i}>
				<FullStar />
			</li>,
		);
	}
	if (halfStars) {
		stars.push(
			<li key={fullStars + 0.5}>
				<HalfStar />
			</li>,
		);
	}
	for (let i = 0; i < emptyStars; i++) {
		stars.push(
			<li key={fullStars + halfStars + i}>
				<EmptyStar />
			</li>,
		);
	}
	return stars;
}
