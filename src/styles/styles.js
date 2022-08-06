import styled, { createGlobalStyle } from 'styled-components';
import breakpoint from 'styled-components-breakpoint';
import Config from './config';

//font-family: 'Trade Gothic LT Pro Cn';

export const BodyStyles = createGlobalStyle`

	html, body {
		background-color: ${Config.DARKER};
		color: ${Config.TEXT};
		padding: 0;
		margin: 0;
		font-size: ${Config.BODY_SIZE};
		font-family: ${Config.FONT_NORMAL};
		letter-spacing: -0.05em;
	}

	p {
		line-height: 1.35em;
	}
	
	*, *:before, *:after {
		position: relative;
		box-sizing: border-box;
		-webkit-backface-visibility: hidden;
	}
	
	img {
		max-width: 100%;
	}
`;
