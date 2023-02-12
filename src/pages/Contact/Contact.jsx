import React from 'react';
import './Contact.scss';

import { Banner, Button } from '../../components';
import { banners } from '../../assets';
import { contactInfo } from '../../constants';

export default function Contact() {
	return (
		<>
			<Banner bgImg={banners.contact}>
				<h1 className='head-text'>Contact Us</h1>
			</Banner>
			<section className='container section-padding'>
				<iframe
					src='https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22198.243598212957!2d20.41474155!3d45.935687699999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ssr!2srs!4v1676021066632!5m2!1ssr!2srs'
					width='100%'
					height='650'
					style={{ border: 0 }}
					allowFullScreen=''
					loading='lazy'
					referrerPolicy='no-referrer-when-downgrade'
				></iframe>
			</section>

			<section className='contact | container section-padding even-columns'>
				<div className='contact-info'>
					<ul className='contact-info-list'>
						{contactInfo.map((info, index) => (
							<li
								className='contact-info-item'
								key={`contact-info-${index + 1}`}
							>
								{info.icon}
								<div>
									<h2 className='head-text'>{info.main}</h2>
									<p className='body-text'>{info.sub}</p>
								</div>
							</li>
						))}
					</ul>
				</div>

				<div className='contact-form'>
					<input type='text' placeholder='Enter your name' />
					<input type='email' placeholder='Enter your email address' />
					<input type='text' placeholder='Enter your subject' />
					<textarea placeholder='Message' />
					<Button inverted type='submit'>
						Send Message
					</Button>
				</div>
			</section>
		</>
	);
}
