import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components'; 
import Config from '../../styles/config';
// import { withRouter } from 'react-router';
import { BodyWrapper, Header, HeaderItem } from '../../components/common/common';
import GridItem from '../../components/grid-item/grid-item';
import Grid from '../../components/grid/grid';
// import Data from '../../data/data';
import BackArrow from '../../components/backarrow/BackArrow';
import TextBox from '../../components/text-box/text-box';
import AnimatedLink from '../../components/animated-link/AnimatedLink';
// import useData from '../../data/useData';

const Work = ({history}) => {

	// const {work, laoding} = useData();

	useEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 30);
	} , [])
	
	return (
		<>
			<Header>
				<AnimatedLink to="/us">US</AnimatedLink>
				<HeaderItem>WORK</HeaderItem>
				<BackArrow to="/us" />
			</Header>
			<BodyWrapper>
				<Grid>
					{/* {work && work.map((item, index) =>
						<GridItem noScale index={index} key={item.slug} link={`/work/${item.slug}`} title={item.title} cols={item.columns} rows={item.rows} image={item.image} />
					)} */}
				</Grid>
				
			</BodyWrapper>
		</>
	);
};

export default Work