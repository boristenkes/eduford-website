import React from 'react';
import './Blog.scss';

import { Banner, Button, FadeIn } from '../../components';
import { banners, certificate } from '../../assets';
import { categories } from '../../constants';

export default function Blog() {
	return (
		<>
			<Banner bgImg={banners.blog}>
				<h1 className='head-text'>
					Our Certificate And Programs For {new Date().getFullYear()}
				</h1>
			</Banner>

			<section className='blog | container section-padding'>
				<div className='blog-left'>
					<FadeIn from='left' threshold={0}>
						<img
							className='blog-left-img'
							src={certificate}
							alt='Student holding certificate'
						/>
					</FadeIn>

					<FadeIn selectChildren threshold={0.7} className='blog-left-content'>
						<h2 className='blog-left-title | head-text'>
							Our Certificate & Online Programs for {new Date().getFullYear()}
						</h2>
						<p className='body-text'>
							<strong>Lorem ipsum dolor</strong>, sit amet consectetur
							adipisicing elit. Esse corporis delectus nulla voluptates a
							numquam sit ipsam eveniet modi sequi fuga expedita ducimus harum
							voluptatibus, vel, consequatur qui quas itaque! Lorem ipsum dolor,
							sit amet consectetur adipisicing elit. Nemo, ipsum!
						</p>
						<p className='body-text'>
							<strong>Lorem ipsum dolor</strong>, sit amet consectetur
							adipisicing elit. Esse corporis delectus nulla voluptates a
							numquam sit ipsam eveniet modi sequi fuga expedita ducimus harum
							voluptatibus, vel, consequatur qui quas itaque! Lorem ipsum dolor,
							sit amet consectetur adipisicing elit. Nemo, ipsum!
						</p>
						<p className='body-text'>
							<strong>Lorem ipsum dolor</strong>, sit amet consectetur
							adipisicing elit. Esse corporis delectus nulla voluptates a
							numquam sit ipsam eveniet modi sequi fuga expedita ducimus harum
							voluptatibus, vel, consequatur qui quas itaque! Lorem ipsum dolor,
							sit amet consectetur adipisicing elit. Nemo, ipsum!
						</p>
						<p className='body-text'>
							<strong>Lorem ipsum dolor</strong>, sit amet consectetur
							adipisicing elit. Esse corporis delectus nulla voluptates a
							numquam sit ipsam eveniet modi sequi fuga expedita ducimus harum
							voluptatibus, vel, consequatur qui quas itaque! Lorem ipsum dolor,
							sit amet consectetur adipisicing elit. Nemo, ipsum!
						</p>
					</FadeIn>
					<div className='blog-left-comment'>
						<h2 className='head-text'>Leave a comment</h2>
						<FadeIn selectChildren className='blog-left-form'>
							<input type='text' placeholder='Enter Name' />
							<input type='email' placeholder='Enter Email' />
							<textarea placeholder='Your Comment'></textarea>
							<Button inverted type='submit'>
								Post Comment
							</Button>
						</FadeIn>
					</div>
				</div>

				<div className='blog-right'>
					<h2 className='blog-right-title | head-text'>Post Categories</h2>
					<FadeIn
						tag='ul'
						selectChildren
						threshold={0.1}
						className='blog-right-categories'
						delay={100}
					>
						{categories.map((category, index) => (
							<li className='blog-right-category' key={`category-${index + 1}`}>
								<p>{category.class}</p>
								<p>{category.grade}</p>
							</li>
						))}
					</FadeIn>
				</div>
			</section>
		</>
	);
}
