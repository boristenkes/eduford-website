import styled from 'styled-components';

const Button = styled.button`
	font-size: 1rem;
	font-family: var(--ff-button);
	border: 1px solid var(--clr-neutral-100);
	background: transparent;
	padding: 1rem 2rem;
	color: var(--clr-neutral-100);
	transition: background, color, 0.25s ease-in-out;
	cursor: pointer;
	display: block;

	&:hover {
		background: var(--clr-primary-500);
		color: var(--clr-neutral-100);
		border-color: var(--clr-primary-500);
	}
`;

export default Button;
