import React from 'react';
import './Loader.scss';

export default function Loader({ className }) {
	return (
		<div className={`loader-wrapper ${className}`}>
			<span className='loader'></span>
		</div>
	);
}
