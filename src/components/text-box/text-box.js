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
			background-color: #EEE2CD;
			color: #2c2c2c;
			.contact-img-g{
				fill:#629080;
			}
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
				>
					<svg className='clients-img' width="657" height="345" viewBox="0 0 657 345" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_56_389)">
<path className='contact-img-g' d="M469.138 266V83.3H514.03V163.166L587.893 83.3H642.181L557.617 169.169L646.879 266H587.371L514.03 182.219V266H469.138Z" fill="white"/>
</g>
<g filter="url(#filter1_d_56_389)">
<path className='contact-img-g' d="M413.749 268.61C399.829 268.61 386.866 266.261 374.86 261.563C363.028 256.691 352.675 249.992 343.801 241.466C334.927 232.94 327.967 223.022 322.921 211.712C318.049 200.228 315.613 187.874 315.613 174.65C315.613 161.252 318.049 148.898 322.921 137.588C327.967 126.104 334.927 116.099 343.801 107.573C352.849 99.047 363.289 92.435 375.121 87.737C387.127 82.865 400.003 80.429 413.749 80.429C423.841 80.429 433.759 81.908 443.503 84.866C453.247 87.824 462.208 92 470.386 97.394C478.738 102.614 485.698 108.878 491.266 116.186L460.99 145.94C454.552 137.762 447.331 131.672 439.327 127.67C431.497 123.668 422.971 121.667 413.749 121.667C406.441 121.667 399.568 123.059 393.13 125.843C386.866 128.453 381.385 132.107 376.687 136.805C371.989 141.503 368.335 147.071 365.725 153.509C363.115 159.947 361.81 166.994 361.81 174.65C361.81 182.132 363.115 189.092 365.725 195.53C368.509 201.794 372.25 207.362 376.948 212.234C381.82 216.932 387.475 220.586 393.913 223.196C400.525 225.806 407.659 227.111 415.315 227.111C424.189 227.111 432.367 225.197 439.849 221.369C447.505 217.541 454.378 211.886 460.468 204.404L489.961 233.375C484.393 240.509 477.52 246.773 469.342 252.167C461.164 257.387 452.29 261.476 442.72 264.434C433.15 267.218 423.493 268.61 413.749 268.61Z" fill="white"/>
</g>
<g filter="url(#filter2_d_56_389)">
<path className='contact-img-g' d="M149.173 266L224.08 83.3H275.497L349.36 266H300.814L284.11 221.891H212.857L195.892 266H149.173ZM226.429 186.134H270.799L248.875 127.67L226.429 186.134Z" fill="white"/>
</g>
<g filter="url(#filter3_d_56_389)">
<path className='contact-img-g' d="M15.138 266V83.3H105.705C118.233 83.3 129.195 85.475 138.591 89.825C148.161 94.175 155.643 100.265 161.037 108.095C166.431 115.751 169.128 124.625 169.128 134.717C169.128 142.199 167.214 149.246 163.386 155.858C159.732 162.296 154.686 167.777 148.248 172.301C156.426 176.651 162.864 182.306 167.562 189.266C172.434 196.226 174.87 203.882 174.87 212.234C174.87 222.848 172.173 232.244 166.779 240.422C161.385 248.426 153.816 254.69 144.072 259.214C134.328 263.738 123.018 266 110.142 266H15.138ZM60.03 156.119H102.834C109.446 156.119 114.666 154.466 118.494 151.16C122.322 147.854 124.236 143.504 124.236 138.11C124.236 132.542 122.322 128.192 118.494 125.06C114.666 121.754 109.446 120.101 102.834 120.101H60.03V156.119ZM60.03 229.199H106.749C113.709 229.199 119.19 227.459 123.192 223.979C127.368 220.499 129.456 215.801 129.456 209.885C129.456 203.969 127.368 199.271 123.192 195.791C119.19 192.311 113.709 190.571 106.749 190.571H60.03V229.199Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_56_389" x="469.141" y="83.3008" width="187.742" height="190.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="6" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_389"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_389" result="shape"/>
</filter>
<filter id="filter1_d_56_389" x="315.609" y="80.4297" width="188.656" height="196.18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_389"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_389" result="shape"/>
</filter>
<filter id="filter2_d_56_389" x="149.172" y="83.3008" width="213.188" height="190.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_389"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_389" result="shape"/>
</filter>
<filter id="filter3_d_56_389" x="15.1406" y="83.3008" width="172.727" height="190.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_389"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_389" result="shape"/>
</filter>
</defs>
</svg>

				</Text>
			</Outter>
		</Container>
	);
};
export default TextBox;