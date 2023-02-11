import React, { useState } from 'react';
import { Loader, Navbar, ScrollToTop } from './components';
import { Route, Routes } from 'react-router-dom';
import { About, Blog, Contact, Course, Home } from './pages';
import { Footer } from './containers';

export default function App() {
	const [isLoading, setIsLoading] = useState(true);

	window.onload = () => setIsLoading(false);

	return (
		<>
			<Loader className={isLoading && 'active'} />
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/course' element={<Course />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
			<Footer />
			<ScrollToTop />
		</>
	);
}
