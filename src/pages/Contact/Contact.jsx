import React from 'react'
import './Contact.scss'

import { banners } from '../../assets'
import { Banner, Button, FadeIn } from '../../components'
import { contactInfo } from '../../constants'

export default function Contact() {
	return (
		<>
			<Banner bgImg={banners.contact}>
				<h1 className='head-text'>Contact Us</h1>
			</Banner>
			<section className='container section-padding'>
				<FadeIn>
					<iframe
						src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929769.9994394854!2d18.271434658255668!3d44.18433396455311!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47571ddff2898095%3A0x55e50ea3723865d!2z0KHRgNCx0LjRmNCw!5e0!3m2!1ssr!2srs!4v1721214056359!5m2!1ssr!2srs'
						width='100%'
						height='650'
						style={{ border: 0 }}
						allowfullscreen=''
						loading='lazy'
						referrerpolicy='no-referrer-when-downgrade'
					/>
				</FadeIn>
			</section>

			<section className='contact | container section-padding even-columns'>
				<div className='contact-info'>
					<FadeIn
						tag='ul'
						selectChildren
						className='contact-info-list'
					>
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
					</FadeIn>
				</div>

				<FadeIn
					selectChildren
					className='contact-form'
				>
					<input
						type='text'
						placeholder='Enter your name'
					/>
					<input
						type='email'
						placeholder='Enter your email address'
					/>
					<input
						type='text'
						placeholder='Enter your subject'
					/>
					<textarea placeholder='Message' />
					<Button
						inverted
						type='submit'
					>
						Send Message
					</Button>
				</FadeIn>
			</section>
		</>
	)
}
