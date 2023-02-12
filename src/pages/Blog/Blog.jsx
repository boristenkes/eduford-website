import React from 'react';
import './Blog.scss';

import { Banner, Button } from '../../components';
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
					<div>
						<img
							className='blog-left-img'
							src={certificate}
							alt='Student holding certificate'
						/>
					</div>

					<div className='blog-left-content'>
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
							Lorem ipsum dolor sit, <em>amet consectetur adipisicing elit</em>.
							Fuga odit quas eligendi sunt voluptatibus est accusantium vitae
							molestias perspiciatis maiores, earum similique adipisci ut, aut
							dolorem aspernatur nemo accusamus delectus. Laborum aliquid,
							deleniti dolorum id totam praesentium numquam harum reprehenderit
							a unde quae reiciendis similique placeat in sint necessitatibus
							ab. <strong>Doloremque perferendis</strong> assumenda sequi neque
							corrupti laboriosam ea praesentium voluptatum. Lorem ipsum dolor
							sit amet consectetur adipisicing elit. Molestiae libero illo quis
							explicabo a facere vero pariatur ea ab molestias. Lorem ipsum
							dolor sit amet consectetur adipisicing elit. Molestiae adipisci
							ullam iure omnis! Officiis iusto officia facere aspernatur
							deserunt nostrum perferendis reiciendis fugit ducimus dolor!
							Suscipit excepturi nihil sapiente molestias!
						</p>
						<p className='body-text'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
							fuga non minima, unde ipsam tempora alias? Veritatis nulla
							necessitatibus possimus. Eos vitae, magni ipsa similique
							reprehenderit odio accusantium <strong>cumque perferendis</strong>
							! Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
							excepturi quo perferendis maxime, commodi ex!
							<em>Lorem ipsum dolor sit, amet consectetur adipisicing elit</em>.
							Porro vitae fugiat dignissimos sapiente quas suscipit,
							perspiciatis fugit sequi culpa nulla!
						</p>
						<p className='body-text'>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
							voluptate animi est placeat assumenda quos reiciendis illum
							deleniti. Soluta, fugit quo blanditiis reiciendis consequuntur
							molestias commodi dolores ab dolorem.
							<strong>Necessitatibus</strong> in dolorem fuga eaque ipsum! Lorem
							ipsum dolor sit amet consectetur, adipisicing elit. Ex,
							accusantium.
						</p>
					</div>
					<div className='blog-left-comment'>
						<h2 className='head-text'>Leave a comment</h2>
						<form className='blog-left-form'>
							<input type='text' placeholder='Enter Name' />
							<input type='email' placeholder='Enter Email' />
							<textarea placeholder='Your Comment'></textarea>
							<Button inverted type='submit'>
								Post Comment
							</Button>
						</form>
					</div>
				</div>

				<div className='blog-right'>
					<h2 className='blog-right-title | head-text'>Post Categories</h2>
					<ul className='blog-right-categories'>
						{categories.map((category, index) => (
							<li className='blog-right-category' key={`category-${index + 1}`}>
								<p>{category.class}</p>
								<p>{category.grade}</p>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	);
}
