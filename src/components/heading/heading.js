import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Config from '../../styles/config';
import { motion } from 'framer-motion';
import breakpoint from 'styled-components-breakpoint';


const Text = styled.h2`
	color: ${Config.TEXT};
	background-color: ${Config.DARKER};
	font-family: ${Config.FONT_BOLD};
	font-size: ${Config.HEADING_SIZE_MOBILE};
	margin-top: ${props => props.extraSpace ? '25px' : 0};
	margin-bottom: 0;
	text-align: ${props => props.align};
	line-height: ${props => props.lineHeight};

	${breakpoint('tablet')`
		font-size: ${Config.HEADING_SIZE};
	`}
`;


const Heading = ({children, extraSpace, align, lineHeight}) => {

	return (
		<Text lineHeight={lineHeight} align={align} extraSpace={extraSpace}>{children}</Text>
	);
};

Heading.defaultProps = {
	align: 'center',
	lineHeight: 'inherit'
}

export default Heading;