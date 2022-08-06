import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Config from '../../styles/config';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';


const Container = styled(Link)`
	width: 100%;
	height: 100%;
	overflow: hidden;

	text-decoration: none;

	grid-column: ${props => `span ${props.cols}`};
	grid-row: ${props => `span ${props.rows}`};

	pointer-events: ${props => props.disable_click === 1 ? 'none' : 'auto'};

	${breakpoint('tablet')`
		&:hover {
			.hoverbg{
				opacity: 0.2;
			}

			.imagehover{
				opacity: 1;
			}
		}
	`}
`;

Container.defaultProps = {
	cols: '1',
	rows: '1',
	link: ''
}

const Inner = styled(motion.div)`
	width: 100%;
	height: 100%;

	padding: 10px;

	display: flex;
	align-items: center;
	justify-content: center;

	color: ${Config.TEXT};
	background-color: ${Config.DARK};
	text-transform: uppercase;
	font-family: ${Config.FONT_BOLD};

	font-size: ${Config.HEADING_SIZE_MOBILE};
	transition: all 410ms ease-out;

	${breakpoint('tablet')`
		font-size: ${Config.HEADING_SIZE};
		&:hover {
			background-color: #E1E1E1;
			color: #2c2c2c;
		}
	`}

	/* :hover {
		background-color: ${Config.TEXT};
		color: ${Config.DARKER};
	} */
`;

const Text = styled.span`
	z-index: 1;
	text-align: center;
	line-height: 1.05em;
	margin-left: -0.03em;
`;

const Video = styled.video`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
	z-index: 3;
`;

const Image = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	object-fit: cover;
	transition: all 220ms ease-out;
`;

const ImageHover = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 2;
	object-fit: cover;
	transition: all 220ms ease-out;
	opacity: 0;
	background-color: #E1E1E1;

	&:hover {
		opacity: 1;
	}
`;

const HoverTitle = styled.div`
	/* position: absolute;
	bottom: 0;
	left: 0; */
	width: 100%;
	padding: 0 ${Config.GRID_GAP};
	/* color: ${Config.TEXT}; */
	color: #FFFFFF;
	font-size: 33px;
	letter-spacing: -0.2px;
	font-weight: bold;
	margin: 0;
`;

const HoverTitleBG = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: ${Config.DARKER};
	opacity: 0;
	transition: all 250ms ease-out;
`;

const HoverContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 3;

	padding-bottom: 10px;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	opacity: ${props => props.fixedTitles===true ? 1 : 0};

	transition: opacity 290ms ease-out;
	:hover{
		opacity: 1;
	}
`;


function checkVideo(video, webm){
	return (video && video.url) || (webm && webm.url);
}




const GridItem = ({title, subtitle, link, image, imageHover, video, videoWebM, cols, rows, from, fromTitle, fit, index, showHover, fixedTitles, noScale, disable_click}) => {
    // console.log("GridItem ->", cols, rows);
	if(!index) index = 0;
	let delay = index * 0.07;
	if(delay > 0.9) delay = 0.9;

	const hasImage = image && image.length >= 5;
	const hasImageHover = imageHover && imageHover.length >= 5;
    // console.log("GridItem -> hasImageHover", hasImageHover, imageHover)
	
	const hasVideo = checkVideo(video, videoWebM);

	return (
		<Container
			disable_click={disable_click === true ? 1 : 0}
			to={{pathname:link, state:{fromTitle, from}}}
			cols={cols}
			rows={rows}>

			<Inner
				className="inner"
				fit={fit}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{duration: 0.320, type: 'tween', delay, ease: 'easeOut'}}
			>
				{!hasImage && !hasVideo && <Text dangerouslySetInnerHTML={{__html: title}}></Text>}

				{!hasVideo && hasImage && <Image className="imagebase" fit={fit} src={image} />}
				{!Config.isMobile() && !hasVideo && hasImageHover && <ImageHover className="imagehover" fit={fit} src={imageHover} />}

				{hasVideo &&
				<Video width="100%" height="100%" playsInline controls={false} autoPlay muted loop poster={image} >
					{!Config.isMobile() && videoWebM && videoWebM.url && <source src={videoWebM.url} type='video/webm' />}
					{video && video.url && <source src={video.url} type='video/mp4' />}
				</Video>
				}
			</Inner>
			{!Config.isMobile() && showHover && !hasImageHover &&
				<HoverContainer fixedTitles={fixedTitles}>
					<HoverTitleBG className="hoverbg" />
					<HoverTitle dangerouslySetInnerHTML={{__html: title}}></HoverTitle>
					<HoverTitle dangerouslySetInnerHTML={{__html: subtitle}}></HoverTitle>
				</HoverContainer>
			}
			
		</Container>
	);
};

GridItem.defaultProps = {
	disable_click: 'false'
}

export default GridItem;