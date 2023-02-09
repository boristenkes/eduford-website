import styled, { css } from 'styled-components';

const Banner = styled.section`
	background-image: linear-gradient(rgba(2 2 2 / 0.65), rgba(2 2 2 / 0.65)),
		url(${props => props.bgImg});
	background-size: cover;
	background-position: center;
	height: 50vh;
	height: 50dvh;
	display: grid;
	place-items: center;
	text-align: center;

	h1 {
		color: var(--clr-neutral-100);
		font-size: 2.75rem;
	}

	${props =>
		props.fullHeight &&
		css`
			height: 100vh;
			height: 100dvh;
		`}
`;

export default Banner;
