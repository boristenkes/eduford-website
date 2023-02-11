import React from 'react';
import './Footer.scss';

import { socialsIcons } from '../../constants';

export default function Footer({ ...props }) {
	return (
		<footer className='footer' {...props}>
			<div className='footer-wrapper | container section-padding'>
				<h2 className='head-text'>About Us</h2>
				<p className='body-text'>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem
					quasi ipsum at a quos autem nobis quod, tenetur unde aperiam
					accusantium, cupiditate quae itaque!
				</p>
				<ul className='social-icons'>
					{socialsIcons.map((icon, index) => (
						<li key={`social-icon-${index + 1}`}>
							<a href={icon.link} aria-label={icon.label}>
								{icon.icon}
							</a>
						</li>
					))}
				</ul>
			</div>
		</footer>
	);
}
