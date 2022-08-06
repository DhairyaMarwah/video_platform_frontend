import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Config from '../../styles/config';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';
// import { useHistory } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const mobileHeight = '50px';

//const Container = styled(Link)`
const Container = styled.div`
	display: inline-block;
	cursor: pointer;
	overflow: hidden;
	min-width: 125px;
	min-height: ${mobileHeight};

	color: ${Config.TEXT};
	background-color: transparent;
	text-transform: uppercase;
	font-family: ${Config.FONT_BOLD};
	font-size: ${Config.HEADING_SIZE_MOBILE};

	${breakpoint('tablet')`
		font-size: ${Config.HEADING_SIZE};
		font-size: 65px;
	`}
`;

const Outter = styled.div`
	position: absolute;
	text-align: center;
	top: 50%;
	transform: translateY(-50%);
	left: 0;
	width: 100%;
	min-height: ${mobileHeight};
	overflow: hidden;
`;

const BackInner = styled.div`
	background-color: red;
	position: relative;
	width: 100%;
	min-height: ${mobileHeight};
	text-align: center;
	padding: 0 20px;
	line-height: 0.90em;
	overflow: hidden;
`;

const Text = styled(motion.div)`
	color: ${props => props.back ? Config.DARK : Config.TEXT};
	font-family: ${Config.FONT_BOLD};
	font-size: ${Config.HEADING_SIZE_MOBILE};
	text-decoration: none;
	background-color: ${props => props.back ? Config.TEXT : Config.DARK};
	padding: 1px 15px;
	min-height: ${mobileHeight};
	text-transform: uppercase;
	line-height: 45px;
	/* margin-top: -4px; */

	${breakpoint('tablet')`
		font-size: ${Config.HEADING_SIZE};
	`}
`;

const TextHolder = styled.div`
	display: block;
	font-family: ${Config.FONT_BOLD};
	font-size: ${Config.HEADING_SIZE_MOBILE};
	text-decoration: none;
	background-color: ${Config.DARK};
	padding: 1px 15px;
	min-height: ${mobileHeight};
	text-transform: uppercase;
	visibility: hidden;
	
	${breakpoint('tablet')`
		font-size: ${Config.HEADING_SIZE};
	`}
`;

const goUp = {
	visible: { y: 0 },
	hidden: { y: '101%' },
}

const goDown = {
	visible: { y: 0 },
	hidden: { y: '-100%' },
}

const transition = {
	type: 'spring',
	stiffness: 170,
	damping: 18
}

const AnimatedLink = ({children, to, link}) => {
    const location = useLocation();
    const navigate = useNavigate();
	// let history = useHistory();

	const [showBack, setShowBack] = useState(false);
	const isMobile = Config.isMobile();

	const onGoBack = () => {
		// console.log('goBack:', to)
		if(to){
			// history.push(to);
            navigate(to);
			return;
		}
		navigate(-1);
	}

	return (
		<Container onClick={onGoBack} onMouseEnter={()=>{!isMobile && setShowBack(true)}} onMouseLeave={()=>{!isMobile && setShowBack(false)}}>
			<TextHolder>{children}</TextHolder>
			<Outter>
				<Text
					variants={goDown}
					initial='visible'
					transition={transition}
					animate={!showBack ? 'visible' : 'hidden'}	
				>{children}</Text>
			</Outter>
			<Outter>
				<Text
					back
					variants={goUp}
					initial='hidden'
					transition={transition}
					animate={showBack ? 'visible' : 'hidden'}	
				>BACK</Text>
			</Outter>
		</Container>
	);
};

export default AnimatedLink;