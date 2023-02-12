import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './FadeIn.scss';

export default function FadeIn({
	children,
	from = 'bottom',
	tag = 'div',
	className,
	triggerOnce = true,
	duration = 200,
	offset,
	selectChildren,
	threshold = 0.3,
	style,
	...props
}) {
	const [ref, inView] = useInView({
		threshold: threshold,
		triggerOnce: triggerOnce,
	});
	const [isVisible, setVisible] = useState(false);
	const maxDelay = React.Children.toArray(children).length * duration;

	useEffect(() => {
		setVisible(inView);
		setTimeout(() => {
			setVisible(!inView);
		}, maxDelay);
	}, [inView, maxDelay]);

	const Tag = tag;

	return selectChildren ? (
		<Tag ref={ref} className={className} {...props}>
			{React.Children.map(children, (child, index) => {
				return React.cloneElement(child, {
					key: index + 1,
					className: `${child.props.className} fade-in ${
						inView ? 'is-visible' : ''
					}`,
					'data-direction': from,
					style: {
						...child.props.style,
						'--offset': offset || '20vh',
						transitionDelay: !isVisible ? '0ms' : index * duration + 'ms',
					},
				});
			})}
		</Tag>
	) : (
		<Tag
			className={`${className} fade-in ${inView ? 'is-visible' : ''}`}
			ref={ref}
			data-direction={from}
			{...props}
			style={{
				...style,
				'--offset': offset || '20vh',
			}}
		>
			{children}
		</Tag>
	);
}
