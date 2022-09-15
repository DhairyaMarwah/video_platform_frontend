import React, { useLayoutEffect } from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components'; 
import Config from '../../styles/config';
// import { withRouter } from 'react-router';
import { BodyWrapper, Header, HeaderItem } from '../../components/common/common';
import GridItem from '../../components/grid-item/grid-item';
import Grid from '../../components/grid/grid';
// import Data from '../../data/data';
import BackArrow from '../../components/backarrow/BackArrow';
import AnimatedLink from '../../components/animated-link/AnimatedLink';
// import useData from '../../data/useData';


const Clients = ({history}) => {

	// const {clients} = useData();
	// console.log(data);

	useLayoutEffect(() => {
		setTimeout(() => {
			window.scrollTo(0, 0);
		}, 30);
	}, [])
	
	return (
		<>
			<Header>
				<AnimatedLink to="/us">US</AnimatedLink>
				<HeaderItem>
				<span className='color-work'>

					CLIENTS
				</span>
					</HeaderItem>
				<BackArrow to="/us" />
			</Header>
			<BodyWrapper>
				<Grid>

					{/* {clients && clients.map((item, index) =>
						<GridItem noScale index={index} fit="contain" key={item.slug} link={`/clients/${item.slug}`} title={item.title} cols={item.columns} rows={item.rows} image={item.image} imageHover={item.image_hover} />
					)} */}

					{/* <GridItem link="/clients/amazon" title="Amazon" cols="2" />
					<GridItem link="/clients/apple" title="Apple" />
					<GridItem link="/clients/guardian" title="Guardian"/>
					<GridItem link="/clients/amazon" title="Client"/>
					<GridItem link="/clients/amazon" title="Client" cols="2"/>
					<GridItem link="/clients/amazon" title="Client"/>
					<GridItem link="/clients/amazon" title="Client"/>
					<GridItem link="/clients/amazon" title="Client"/>
					<GridItem link="/clients/amazon" title="Client" cols="2"/> */}
				</Grid>
				
			</BodyWrapper>
		</>
	);
};

export default Clients;