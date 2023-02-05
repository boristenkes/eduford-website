import React, { useState } from 'react';
import { logo } from '../../assets';
import { ReactComponent as LogoIcon } from '../../assets/logo-icon.svg';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { Spin as Hamburger } from 'hamburger-react';
import { navLinks } from '../../constants';
import './Navbar.scss';

export default function Navbar() {
	const isDesktop = useMediaQuery({ query: '(min-width: 992px)' });
	const isVerySmallScreen = useMediaQuery({ query: '(max-width: 425px)' });
	const [isOpen, setOpen] = useState(false);

	return (
		<div className='navbar'>
			<Link to='/' className='navbar-logo-wrapper'>
				{isVerySmallScreen ? (
					<LogoIcon className='navbar-logo-icon' />
				) : (
					<img src={logo} alt='Eduford logo' className='navbar-logo' />
				)}
			</Link>
			<nav
				className={`navbar-nav ${isDesktop ? 'desktop' : 'mobile'} ${
					isOpen ? 'active' : ''
				}`}
				aria-expanded={isOpen}
			>
				<ul className='navbar-list'>
					{navLinks.map((link, index) => (
						<CustomLink
							key={`nav-link-${index + 1}`}
							aria-hidden={!isOpen}
							onClick={() => setOpen(false)}
							to={link.to}
						>
							{link.title}
						</CustomLink>
					))}
				</ul>
			</nav>
			{!isDesktop && (
				<Hamburger
					color='var(--clr-neutral-100)'
					duration={0.5}
					label='Toggle Menu'
					hideOutline={false}
					toggled={isOpen}
					toggle={setOpen}
				/>
			)}
		</div>
	);
}

function CustomLink({ to, children, ...props }) {
	const resolvedPath = useResolvedPath(to);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true });

	return (
		<li className={'navbar-item ' + (isActive && 'active')}>
			<Link to={to} {...props}>
				{...children}
			</Link>
		</li>
	);
}
