import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Config from '../../styles/config';
import { motion } from 'framer-motion';
import Heading from '../../components/heading/heading';
import { BackButton, BackHack } from '../home/home-styles';
import breakpoint from 'styled-components-breakpoint';
// import useData from '../../data/useData';

function exists(value) {
	return (value && value.length > 0);
}


const Container = styled.div`
	width: 100%;
	height: 100%;
	margin: 0;
	padding: 0;
	
	display: flex;
	flex-direction: column;

	color: ${Config.TEXT};
	background-color: ${Config.DARKER};
	font-family: ${Config.FONT_BOLD};

	font-size: 23px;

	${breakpoint('tablet')`
		font-size: ${Config.HEADING_SIZE};
	`}
`;

const Address = styled.div`
	flex: 1;
	height: 50%;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const AddressText = styled.h2`
	color: ${Config.TEXT};
	background-color: ${Config.DARKER};
	font-family: ${Config.FONT_BOLD};
	font-size: 24px;
	margin-top: ${props => props.extraSpace ? '25px' : 0};
	margin-bottom: 0;
	text-align: ${props => props.align};

	${breakpoint('tablet')`
		font-size: 36px;
	`}
`;

const AddressCopy = styled.div`
	flex: 1;

	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	letter-spacing: 0;
`;

const Social = styled.div`
	width: 100%;
	height: 25%;
	display: flex;
`;

const SocialItem = styled.a`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	color: ${Config.TEXT};
	text-decoration: none;
	font-size: 14px;
	letter-spacing: 0;

	border-top: solid thin ${Config.LINE};
	border-bottom: solid thin ${Config.LINE};
	border-right: solid thin ${Config.LINE};

	&:last-child{
		border-right: none;
	}

	transition: all 450ms ease-out;

	:hover {
		background-color: ${Config.TEXT};
		color: ${Config.DARKER};
	}

	${breakpoint('tablet')`
		font-size: 24px;
	`}
`;

const Map = styled.a`
	flex: 1;
	height: 50%;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;

// const iframeMap = '<iframe width="100%" height="100%" frameborder="0" style="border:0" src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJSbtzuSobdkgREL1ltpUxYb8&key=..." allowfullscreen></iframe>';

const Contact = ({onBack}) => {
	
	// const {options} = useData();
console.log(onBack);
	return (
		<Container>

			<Address>
				<AddressCopy>
					<AddressText>12 Avenue Street</AddressText>
					<AddressText>Mexico</AddressText>
					<AddressText>Lorem Ipsum</AddressText>
					<AddressText extraSpace>+12 3456789</AddressText>
				</AddressCopy>
				
				{/* <Social>
					{options && options.contact_email && <SocialItem href={options.contact_email} target="_blank">EMAIL</SocialItem>}
					{options && options.contact_instagram && <SocialItem href={options.contact_instagram} target="_blank">INSTAGRAM</SocialItem>}
					{options && options.contact_linkedin && <SocialItem href={options.contact_linkedin} target="_blank">LINKEDIN</SocialItem>}
					{options && options.contact_facebook && <SocialItem href={options.contact_facebook} target="_blank">FACEBOOK</SocialItem>}
					{options && options.contact_twitter && <SocialItem href={options.contact_twitter} target="_blank">TWITTER</SocialItem>}
				</Social> */}
			</Address>

			

			{/* {options && <Map href={options.map_link} target="_blank">
				{exists(options.map_image) && <img src={options.map_image} />}
			</Map>} */}

			{Config.isMobile() && onBack &&
				<BackHack>
					<BackButton onClick={onBack}>BACK</BackButton>
				</BackHack>
			}
			
		</Container>
	);
};

export default Contact;