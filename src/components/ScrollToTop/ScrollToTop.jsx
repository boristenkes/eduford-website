import React, { useEffect, useState } from 'react';
import './ScrollToTop.scss';
import { FaAngleUp } from 'react-icons/fa';

export default function ScrollToTop() {
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => setScrollPosition(window.scrollY);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll, { passive: true });

		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<button
			onClick={() => window.scrollTo({ top: 0 })}
			className={`scroll-to-top ${scrollPosition > 750 ? 'active' : ''}`}
		>
			<FaAngleUp />
		</button>
	);
}
