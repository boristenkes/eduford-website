import styled, { css } from 'styled-components';

const Button = styled.button`
	font-size: 1rem;
	font-family: var(--ff-button);
	border: 1px solid var(--clr-neutral-100);
	border-radius: 0.25rem;
	padding: 1rem 2rem;
	color: var(--clr-neutral-100);
	background: transparent;
	transition: background, color, 0.25s ease-in-out;
	cursor: pointer;
	display: block;

	&:hover {
		background: var(--clr-primary-500);
		color: var(--clr-neutral-100);
		border-color: var(--clr-primary-500);
	}

	${props =>
		props.inverted &&
		css`
			color: var(--clr-primary-500);
			border-color: var(--clr-primary-500);
		`}
`;

export default Button;
