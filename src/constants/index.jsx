import { campus, facilityImages, avatars } from '../assets';
import { FaHome, FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';

export const navLinks = [
	{
		title: 'Home',
		to: '/',
	},
	{
		title: 'About',
		to: '/about',
	},
	{
		title: 'Course',
		to: '/course',
	},
	{
		title: 'Blog',
		to: '/blog',
	},
	{
		title: 'Contact',
		to: '/contact',
	},
];

export const courses = [
	{
		title: 'Intermediate',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque cum odio amet dicta accusamus suscipit autem placeat, voluptatibus voluptate accusantium vitae animi aliquid et libero eos rerum nam sapiente?',
	},
	{
		title: 'Degree',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque cum odio amet dicta accusamus suscipit autem placeat, voluptatibus voluptate accusantium vitae animi aliquid et libero eos rerum nam sapiente?',
	},
	{
		title: 'Post Graduation',
		desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore cumque cum odio amet dicta accusamus suscipit autem placeat, voluptatibus voluptate accusantium vitae animi aliquid et libero eos rerum nam sapiente?',
	},
];

export const locations = [
	{
		location: 'London',
		image: campus.london,
	},
	{
		location: 'New York',
		image: campus.newyork,
	},
	{
		location: 'Washington',
		image: campus.washington,
	},
];

export const facilities = [
	{
		title: 'World Class Library',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium quasi eum!',
		image: facilityImages.library,
	},
	{
		title: 'Largest Playground',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium quasi eum!',
		image: facilityImages.basketball,
	},
	{
		title: 'Tasty and Healthy Food',
		content:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laudantium quasi eum!',
		image: facilityImages.cafeteria,
	},
];

export const testimonials = [
	{
		avatar: avatars.christine,
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, ea placeat? Repellat adipisci amet consequatur. Delectus, sequi iure ab at aspernatur rerum ut nihil!',
		name: 'Christine Berkley',
		rating: 4.0,
	},
	{
		avatar: avatars.david,
		content:
			'Lorem ipsum dolor sit amet consectetur, adipisicing elit. In, ea placeat? Repellat adipisci amet consequatur. Delectus, sequi iure ab at aspernatur rerum ut nihil!',
		name: 'Daving Byer',
		rating: 4.5,
	},
];

export const categories = [
	{
		class: 'Business Analytics',
		grade: 21,
	},
	{
		class: 'Data Science',
		grade: 28,
	},
	{
		class: 'Machine Learning',
		grade: 15,
	},
	{
		class: 'Computer Science',
		grade: 34,
	},
	{
		class: 'AutoCAD',
		grade: 42,
	},
	{
		class: 'Journalism',
		grade: 22,
	},
	{
		class: 'Commerce',
		grade: 13,
	},
];

export const contactInfo = [
	{
		icon: <FaHome />,
		main: 'XYZ Road, ABC Building',
		sub: 'Bangalore, Karmataka, IN',
	},
	{
		icon: <FaPhoneAlt />,
		main: '+1 0123456789',
		sub: 'Monday to Saturday 10 AM to 6 PM',
	},
	{
		icon: <FaRegEnvelope />,
		main: 'info@eduford.com',
		sub: 'Email us your query',
	},
];
