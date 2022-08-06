import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components'; 
import Config from '../../styles/config';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';

export const FullPage = styled.div`
	width: 100vw;
	height: 100vh;
	position: relative;
	overflow: hidden;
	background-color: ${Config.DARKER};
`;

export const Slider = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 300vw;
	height: 100vh;

	${breakpoint('tablet')`
		top: 0;
		left: 0;
		width: 50vw;
	`}
`;

export const ContactMenu = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 100vw;
	width: 100vw;
	height: 50%;

	${breakpoint('tablet')`
		top: 0;
		left: 50vw;
		width: 50vw;
		height: 100%;
	`}
`;

export const ContactHolder = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100%;
	overflow: hidden;
	border-right: solid thin ${Config.LINE};

	${breakpoint('tablet')`
		top: 0;
		left: 0;
		width: 50vw;
		height: 100%;
	`}
`;

export const Us = styled(motion.div)`
	position: absolute;
	top: 50%;
	left: 100vw;
	width: 100vw;
	height: 50%;
	border-top: solid thin ${Config.LINE};

	${breakpoint('tablet')`
		top: 0;
		left: 100vw;
		width: 50vw;
		height: 100%;
		border-top: none;
	`}
`;

export const WorkClients = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 200vw;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;

	${breakpoint('tablet')`
		top: 0;
		left: 150vw;
		width: 50vw;
		height: 100vh;
	`}
`;

// const HLine = styled.div`
// 	position: absolute;
// 	top: 50%;
// 	left: 0;
// 	width: 100%;
// 	height: 1px;
// 	background-color: ${Config.TEXT};
// `;

export const WorkLink = styled(Link)`
	flex: 1;
	display: block;
	width: 100%;
	height: 50%;
	/* calc(50% - 35px); */

	${breakpoint('tablet')`
		height: 50%;
	`}
`;

export const ClientsLink = styled(Link)`
	flex: 1;
	display: block;
	width: 100%;
	height: 50%;
	/* height: calc(50% - 35px); */
	border-top: solid thin ${Config.LINE};

	${breakpoint('tablet')`
		height: 50%;
	`}
`;

export const BackHack = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;

	${breakpoint('tablet')`
		display: none !important;
	`}
`;


export const BackButton = styled.div`
	width: 100%;
	text-align: center;
	text-decoration: none;
	padding: 0;
	line-height: 58px;
	letter-spacing: 0.02em;
	height: 60px;
	color: ${Config.TEXT};
	font-size: 14px; 
	border-top: solid thin ${Config.LINE};
	background-color: ${Config.DARK};

	${breakpoint('tablet')`
		display: none !important;
	`}
`;
