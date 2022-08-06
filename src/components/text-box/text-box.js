import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
import Config from '../../styles/config';
import { motion } from 'framer-motion';
import breakpoint from 'styled-components-breakpoint';

const Container = styled.div`
	width: 100%;
	height: 100%;

	color: ${Config.TEXT};
	background-color: ${Config.DARKER};
	background-color: ${props => props.selected===true ? Config.GREY : Config.DARKER};
	text-transform: uppercase;
	font-family: ${Config.FONT_BOLD};

	font-size: ${props => props.big ? '80px' : '65px'};
	letter-spacing: ${props => props.big ? '-0.05em' : 'inherit'};
	transition: all 450ms ease-out;

	${breakpoint('tablet')`
		border-right: solid thin ${Config.LINE};
		
		&:hover {
			cursor: pointer;
			background-color: #E1E1E1;
			color: #2c2c2c;
		}
	`}

	/* :hover {
		cursor: pointer;
		background-color: ${Config.TEXT};
		color: ${Config.DARKER};
	} */
`;

const Outter = styled.div`
	position: absolute;
	text-align: center;
	top: 50%;
	transform: translateY(-50%);
	left: 0;
	width: 100%;
	overflow: hidden;
`;

const BackInner = styled.div`
	background-color: red;
	position: relative;
	width: 100%;
	text-align: center;
	padding: 0 20px;
	line-height: 0.90em;
	overflow: hidden;
`;

const Text = styled(motion.div)`
	margin-left: ${props => props.big ? '-0.03em' : '-0.03em'};
`;

const goUp = {
	visible: { y: 0 },
	hidden: { y: '100%' },
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

const TextBox = ({children, goBack, link, selected, big, textStyle}) => {

	const [showBack, setShowBack] = useState(false);

	useEffect(() => {
		if(!goBack && showBack)
			setShowBack(false);
	}, [goBack]);

	return (
		<Container 
        big={big}
         selected={selected}
          onMouseEnter={()=>{goBack && setShowBack(true)}}
        //   onMouseLeave={goBack?setShowBack(false):null}
        onMouseLeave={
            ()=>{
                if(goBack)
                    setShowBack(false)
            }
        }

        //   }
        //    onMouseLeave={()=>{goBack?setShowBack(false):null}}
           >
			<Outter style={textStyle}>
				<Text
					big={big} 
					variants={goDown}
					initial='visible'
					transition={transition}
					animate={!showBack ? 'visible' : 'hidden'}	
				>{children}</Text>
			</Outter>
			<Outter style={textStyle}>
				<Text
					big={big} 
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
export default TextBox;