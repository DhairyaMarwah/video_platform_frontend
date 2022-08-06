import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Config from '../../styles/config';
import { motion } from 'framer-motion';
import breakpoint from 'styled-components-breakpoint';


const Container = styled.div`
	width: 100%;

	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-auto-rows: 50vw;

	column-gap: ${Config.GRID_GAP_MOBILE};
	row-gap: ${Config.GRID_GAP_MOBILE};
	
	${breakpoint('tablet')`
		grid-template-columns: repeat(4, 1fr);
		grid-auto-rows: 20vw;
		column-gap: ${Config.GRID_GAP};
		row-gap: ${Config.GRID_GAP};
	`}

	/* pointer-events: ${props => props.disable_click === 1 ? 'none': 'auto'}; */
`;



const Grid = ({children, link, disable_click}) => {
// console.log("Grid -> disable_click", disable_click)

	return (
		<Container disable_click={disable_click === true ? 1 : 0}>
			{children}
		</Container>
	);
};

export default Grid;