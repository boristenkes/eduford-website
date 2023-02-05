import React from 'react';
import { Navbar } from './components';
import { Route, Routes } from 'react-router-dom';
import { About, Blog, Contact, Course, Home } from './pages';

export default function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/course' element={<Course />} />
				<Route path='/blog' element={<Blog />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</>
	);
}
