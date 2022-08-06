import React from 'react';
import styled from 'styled-components'
import Config from '../../styles/config';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';

export const BodyWrapper = styled.div`
	width: 100vw;
	margin: 0 auto 10vw auto;

	${breakpoint('tablet')`
		width: 80vw;
	`}
`;

export const Header = styled.div`
	width: 100vw;
	height: auto;
	margin: 40px auto 25px;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	${breakpoint('tablet')`
		width: 80vw;
		height: 10vw;
		margin: 15px auto 0 auto;
		align-items: flex-end;
		min-height: 170px;
	`}
`;

export const HeaderLink = styled(Link)`
	color: ${Config.TEXT};
	font-family: ${Config.FONT_BOLD};
	font-size: ${Config.HEADING_SIZE_MOBILE};
	margin-top: 0;
	margin-bottom: 0;
	text-decoration: none;
	background-color: ${Config.DARK};
	padding: 1px 15px;
	text-transform: uppercase;

	transition: all 450ms ease-out;

	${breakpoint('tablet')`
		font-size: ${Config.HEADING_SIZE};
	`}
	
	:hover{
		color: ${Config.DARK};
		background-color: ${Config.TEXT};
	}
`;

export const HeaderItem = styled.h2`
	color: ${Config.TEXT};
	font-family: ${Config.FONT_BOLD};
	font-size: ${Config.HEADING_SIZE_MOBILE};
	letter-spacing: -0.3px;
	margin-top: ${props => props.lineHeight === 'inherit' ? '0' : '5px'};
	margin-bottom: 0;
	padding: 1px 15px;
	text-transform: ${props => props.uppercase ? 'uppercase': ''};
	text-align: center;
	line-height: ${props => props.lineHeight};

	${breakpoint('tablet')`
		font-size: ${Config.HEADING_SIZE};
	`}
`;

HeaderItem.defaultProps = {
	lineHeight: 'inherit'
}

export const TextContainer = styled.div`
	letter-spacing: 0em;
	font-weight: normal !important;
`;