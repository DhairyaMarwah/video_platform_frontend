import React ,{useState,useEffect}from 'react'
import { motion } from 'framer-motion';
import { withRouter } from 'react-router';
import Contact from '../contact/contact';
import { useNavigate } from 'react-router';
import {  useLocation } from 'react-router-dom'; 
import styled from 'styled-components'; 
import Config from '../../styles/config'; 
import ContactImg from "../../assets/contact.svg"
import UsImg from "../../assets/us.svg"
import TextBox from '../../components/text-box/text-box';
import { FullPage, Slider, ContactMenu, Us, WorkClients, ContactHolder, ClientsLink, WorkLink, BackButton, BackHack } from './home-styles';
const HOME 		= 'home';
const US 		= 'us';
const CONTACT 	= 'contact';
const WORK 		= 'work';
const CLIENTS 	= 'clients';
const variants = {
	home: { x: Config.isMobile() ? '-100vw' : '-50vw' },
	us: { x: Config.isMobile() ? '-200vw' : '-100vw' },
	contact: { x: 0 },
}


const transition = {
	type: 'spring',
	stiffness: 170,
	damping: 18
}
function useWindowSize() {
	const isClient = typeof window === 'object';

	function getSize() {
		return {
			width: isClient ? window.innerWidth : undefined,
			height: isClient ? window.innerHeight : undefined
		};
	}

	const [windowSize, setWindowSize] = useState(getSize);

	useEffect(() => {
		if (!isClient) {
			return false;
		}
		
		function handleResize() {
			setWindowSize(getSize());
		}

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount and unmount

	return windowSize;
}


const Home = () => {
	const navigate=useNavigate();
	const location = useLocation();
    // const navigate = useHistory();
	console.log(navigate);
	let entryPage = location.pathname.substr(1).toLowerCase();
	// console.log("navigate.location.pathname", navigate.location.pathname)
	if(entryPage === US || entryPage === WORK || entryPage === CLIENTS){
		entryPage = US;
	} else {
		entryPage = HOME;
	}
	// console.log("entryPage", entryPage)

	const [current, setCurrent] = useState(entryPage);
	const size = useWindowSize();

	useEffect(() => {
		const entry = location.pathname.substr(1).toLowerCase();
        // console.log("Home -> useEffect entry", entry)
		if(entry && entry !== ''){
			setCurrent(entry);
		}

		return (() => {
			// console.log("Home -> useEffect return", current)
			setCurrent(current);
		})
		

		//console.log(navigate);
		// navigate.listen(() => {
		// 	console.log(navigate.location)
		// })
	}, [])

	const onUSClick = () => {
		window.animated = true;
		if(current === US){
			// navigate.push('');
			navigate('/');
			setCurrent(HOME);
		} else {
			// navigate.push(US);
			navigate(US);
			setCurrent(US);
		}
	}
	
	const onContactClick = () => {
		window.animated = true;
		if(current === CONTACT){
			// navigate.push('');
			navigate('/');
			setCurrent(HOME);
		} else {
			// navigate.push(CONTACT);
			navigate(CONTACT);
			setCurrent(CONTACT);
		}
	}

	const onGoHome = () => {
		// navigate.push('');
		navigate('/');
		setCurrent(HOME);
	}

	const style = {
		height: size.height
	}

  return (
  <>
    <FullPage style={style}>
			<Slider
				variants={variants}
				initial={current}
				transition={transition}
				animate={current}
				style={style}
			>
				<ContactHolder style={style}>
					<Contact onBack={()=>onGoHome()} />
				</ContactHolder>

				<ContactMenu  onClick={()=>onContactClick()}>
					<TextBox big selected={current === CONTACT} goBack={current === CONTACT}>
						{/* <img className='contact-img' src={ContactImg} alt="" /> */}
						<svg className='contact-img' width="1083" height="346" viewBox="0 0 1083 346" fill="none" xmlns="http://www.w3.org/2000/svg">
<g className='contact-img-g' filter="url(#filter0_d_54_335)">
<path className='contact-img-g' d="M968.609 266V122.656H908.708V82.8964H1073.5V122.656H1013.6V266H968.609Z" fill="white"/>
</g>
<g filter="url(#filter1_d_54_335)">
<path className='contact-img-g' d="M846.985 268.616C833.034 268.616 820.042 266.262 808.01 261.553C796.152 256.67 785.776 249.957 776.882 241.412C767.989 232.867 761.013 222.927 755.956 211.592C751.073 200.083 748.632 187.701 748.632 174.448C748.632 161.021 751.073 148.639 755.956 137.304C761.013 125.795 767.989 115.768 776.882 107.223C785.95 98.6782 796.413 92.0516 808.271 87.3432C820.304 82.4604 833.208 80.019 846.985 80.019C857.099 80.019 867.039 81.5013 876.805 84.4658C886.57 87.4304 895.551 91.6156 903.747 97.0215C912.117 102.253 919.093 108.531 924.673 115.855L894.33 145.675C887.878 137.479 880.641 131.375 872.619 127.364C864.772 123.354 856.227 121.348 846.985 121.348C839.661 121.348 832.773 122.743 826.32 125.533C820.042 128.149 814.549 131.811 809.841 136.52C805.133 141.228 801.471 146.808 798.855 153.26C796.239 159.713 794.931 166.775 794.931 174.448C794.931 181.947 796.239 188.922 798.855 195.374C801.645 201.652 805.394 207.232 810.103 212.115C814.985 216.824 820.653 220.486 827.105 223.101C833.732 225.717 840.881 227.025 848.554 227.025C857.448 227.025 865.644 225.107 873.142 221.27C880.815 217.434 887.704 211.766 893.807 204.268L923.365 233.303C917.785 240.453 910.897 246.731 902.701 252.136C894.505 257.368 885.611 261.466 876.02 264.431C866.429 267.221 856.75 268.616 846.985 268.616Z" fill="white"/>
</g>
<g filter="url(#filter2_d_54_335)">
<path className='contact-img-g' d="M591.169 266L666.241 82.8964H717.772L791.798 266H743.145L726.404 221.794H654.994L637.991 266H591.169ZM668.596 185.958H713.064L691.091 127.364L668.596 185.958Z" fill="white"/>
</g>
<g filter="url(#filter3_d_54_335)">
<path className='contact-img-g' d="M547.609 266V122.656H487.708V82.8964H652.502V122.656H592.601V266H547.609Z" fill="white"/>
</g>
<g filter="url(#filter4_d_54_335)">
<path className='contact-img-g' d="M327.171 266V82.8964H369.547L452.728 189.096V82.8964H495.104V266H455.344L369.547 155.615V266H327.171Z" fill="white"/>
</g>
<g filter="url(#filter5_d_54_335)">
<path className='contact-img-g' d="M248.462 268.877C234.685 268.877 221.868 266.523 210.01 261.815C198.152 256.932 187.776 250.218 178.882 241.673C169.989 232.954 163.013 222.927 157.956 211.592C153.073 200.083 150.632 187.701 150.632 174.448C150.632 161.195 153.073 148.901 157.956 137.566C163.013 126.057 169.989 116.029 178.882 107.485C187.776 98.7654 198.152 92.0516 210.01 87.3432C221.868 82.4604 234.685 80.019 248.462 80.019C262.238 80.019 275.055 82.4604 286.913 87.3432C298.772 92.0516 309.147 98.7654 318.041 107.485C326.935 116.029 333.823 126.057 338.706 137.566C343.763 148.901 346.291 161.195 346.291 174.448C346.291 187.701 343.763 200.083 338.706 211.592C333.823 222.927 326.935 232.954 318.041 241.673C309.147 250.218 298.772 256.932 286.913 261.815C275.055 266.523 262.238 268.877 248.462 268.877ZM248.462 227.548C255.786 227.548 262.587 226.24 268.865 223.625C275.142 220.834 280.548 217.085 285.082 212.377C289.791 207.668 293.453 202.088 296.069 195.636C298.684 189.009 299.992 181.947 299.992 174.448C299.992 166.775 298.684 159.713 296.069 153.26C293.453 146.808 289.791 141.228 285.082 136.52C280.548 131.811 275.142 128.149 268.865 125.533C262.587 122.743 255.786 121.348 248.462 121.348C241.138 121.348 234.337 122.743 228.059 125.533C221.781 128.149 216.288 131.811 211.579 136.52C207.045 141.228 203.471 146.808 200.855 153.26C198.239 159.713 196.931 166.775 196.931 174.448C196.931 181.947 198.239 189.009 200.855 195.636C203.471 202.088 207.045 207.668 211.579 212.377C216.288 217.085 221.781 220.834 228.059 223.625C234.337 226.24 241.138 227.548 248.462 227.548Z" fill="white"/>
</g>
<g filter="url(#filter6_d_54_335)">
<path className='contact-img-g' d="M106.985 268.616C93.0341 268.616 80.0424 266.262 68.0099 261.553C56.1518 256.67 45.7759 249.957 36.8823 241.412C27.9887 232.867 21.0133 222.927 15.9562 211.592C11.0734 200.083 8.63203 187.701 8.63203 174.448C8.63203 161.021 11.0734 148.639 15.9562 137.304C21.0133 125.795 27.9887 115.768 36.8823 107.223C45.9503 98.6782 56.4134 92.0516 68.2715 87.3432C80.304 82.4604 93.2085 80.019 106.985 80.019C117.099 80.019 127.039 81.5013 136.805 84.4658C146.57 87.4304 155.551 91.6156 163.747 97.0215C172.117 102.253 179.093 108.531 184.673 115.855L154.33 145.675C147.878 137.479 140.641 131.375 132.619 127.364C124.772 123.354 116.227 121.348 106.985 121.348C99.6607 121.348 92.7725 122.743 86.3203 125.533C80.0424 128.149 74.5493 131.811 69.841 136.52C65.1326 141.228 61.4705 146.808 58.8547 153.26C56.239 159.713 54.9311 166.775 54.9311 174.448C54.9311 181.947 56.239 188.922 58.8547 195.374C61.6449 201.652 65.3942 207.232 70.1025 212.115C74.9853 216.824 80.6528 220.486 87.105 223.101C93.7316 225.717 100.881 227.025 108.554 227.025C117.448 227.025 125.644 225.107 133.142 221.27C140.815 217.434 147.704 211.766 153.807 204.268L183.365 233.303C177.785 240.453 170.897 246.731 162.701 252.136C154.505 257.368 145.611 261.466 136.02 264.431C126.429 267.221 116.75 268.616 106.985 268.616Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_54_335" x="908.711" y="82.8965" width="173.894" height="192.209" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="4.55263" dy="4.55263"/>
<feGaussianBlur stdDeviation="2.27632"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_335"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_335" result="shape"/>
</filter>
<filter id="filter1_d_54_335" x="748.633" y="80.0195" width="189.697" height="197.701" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9.10526" dy="4.55263"/>
<feGaussianBlur stdDeviation="2.27632"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_335"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_335" result="shape"/>
</filter>
<filter id="filter2_d_54_335" x="591.172" y="82.8965" width="213.145" height="192.209" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="7.9671" dy="4.55263"/>
<feGaussianBlur stdDeviation="2.27632"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_335"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_335" result="shape"/>
</filter>
<filter id="filter3_d_54_335" x="487.711" y="82.8965" width="177.309" height="192.209" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="7.9671" dy="4.55263"/>
<feGaussianBlur stdDeviation="2.27632"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_335"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_335" result="shape"/>
</filter>
<filter id="filter4_d_54_335" x="327.172" y="82.8965" width="178.173" height="192.209" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="5.69079" dy="4.55263"/>
<feGaussianBlur stdDeviation="2.27632"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_335"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_335" result="shape"/>
</filter>
<filter id="filter5_d_54_335" x="150.633" y="80.0195" width="205.9" height="197.963" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="5.69079" dy="4.55263"/>
<feGaussianBlur stdDeviation="2.27632"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_335"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_335" result="shape"/>
</filter>
<filter id="filter6_d_54_335" x="8.63281" y="80.0195" width="187.421" height="197.701" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="6.82895" dy="4.55263"/>
<feGaussianBlur stdDeviation="2.27632"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_54_335"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_54_335" result="shape"/>
</filter>
</defs>
</svg>


						 </TextBox>
				</ContactMenu>

				<Us onClick={()=>onUSClick()}>
					<TextBox big selected={current === US} goBack={current === US}>
						{/* <img className='us-img' src={UsImg} alt="" /> */}
						<svg className='us-img' width="339" height="345" viewBox="0 0 339 345" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_37_253)">
<path className='contact-img-g' d="M248.476 268.61C233.686 268.61 219.07 265.913 204.628 260.519C190.186 255.125 177.31 247.643 166 238.073L191.056 205.448C202.192 214.496 212.458 221.021 221.854 225.023C231.25 228.851 241.255 230.765 251.869 230.765C258.829 230.765 264.745 230.069 269.617 228.677C274.489 227.285 278.23 225.284 280.84 222.674C283.45 219.89 284.755 216.671 284.755 213.017C284.755 207.971 282.841 204.056 279.013 201.272C275.185 198.488 268.66 196.313 259.438 194.747L219.244 187.7C204.454 185.09 193.057 179.435 185.053 170.735C177.049 162.035 173.047 150.986 173.047 137.588C173.047 125.756 176.005 115.577 181.921 107.051C188.011 98.525 196.624 92 207.76 87.476C219.07 82.952 232.468 80.69 247.954 80.69C261.526 80.69 275.185 83.039 288.931 87.737C302.677 92.261 314.596 98.612 324.688 106.79L300.937 139.937C282.145 125.495 263.44 118.274 244.822 118.274C238.732 118.274 233.425 118.97 228.901 120.362C224.551 121.58 221.158 123.407 218.722 125.843C216.46 128.105 215.329 130.889 215.329 134.195C215.329 138.719 216.982 142.199 220.288 144.635C223.768 147.071 229.336 148.985 236.992 150.377L274.837 156.641C292.411 159.425 305.722 165.254 314.77 174.128C323.992 183.002 328.603 194.486 328.603 208.58C328.603 220.934 325.384 231.635 318.946 240.683C312.508 249.557 303.286 256.43 291.28 261.302C279.274 266.174 265.006 268.61 248.476 268.61Z" fill="white"/>
</g>
<g filter="url(#filter1_d_37_253)">
<path className='contact-img-g' d="M95.526 268.61C78.648 268.61 63.945 265.304 51.417 258.692C39.063 251.906 29.493 242.336 22.707 229.982C15.921 217.628 12.528 203.099 12.528 186.395V83.3H57.42V186.395C57.42 194.573 58.986 201.794 62.118 208.058C65.25 214.148 69.687 218.846 75.429 222.152C81.345 225.458 88.131 227.111 95.787 227.111C103.617 227.111 110.316 225.458 115.884 222.152C121.626 218.846 126.063 214.148 129.195 208.058C132.327 201.794 133.893 194.573 133.893 186.395V83.3H178.785V186.395C178.785 202.925 175.305 217.367 168.345 229.721C161.559 242.075 151.902 251.645 139.374 258.431C127.02 265.217 112.404 268.61 95.526 268.61Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_37_253" x="166" y="80.6895" width="172.602" height="195.92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="6" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_37_253"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_37_253" result="shape"/>
</filter>
<filter id="filter1_d_37_253" x="12.5312" y="83.3008" width="179.25" height="193.309" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_37_253"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_37_253" result="shape"/>
</filter>
</defs>
</svg>


					</TextBox>
				</Us>
				
				<WorkClients className="wclients">
					<WorkLink to="/work">
						<TextBox big link="work">

						
						<svg className='us-img' width="744" height="345" viewBox="0 0 744 345" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_56_354)">
<path className='contact-img-g' d="M556.138 266V83.3H601.03V163.166L674.893 83.3H729.181L644.617 169.169L733.879 266H674.371L601.03 182.219V266H556.138Z" fill="white"/>
</g>
<g filter="url(#filter1_d_56_354)">
<path className='contact-img-g' d="M390.138 266V83.3H483.576C496.104 83.3 507.24 85.823 516.984 90.869C526.728 95.741 534.297 102.614 539.691 111.488C545.259 120.188 548.043 130.193 548.043 141.503C548.043 152.987 544.911 163.253 538.647 172.301C532.383 181.349 524.118 188.222 513.852 192.92L553.785 266H503.673L469.221 199.445H435.03V266H390.138ZM435.03 162.905H479.4C486.36 162.905 491.928 160.991 496.104 157.163C500.454 153.335 502.629 148.376 502.629 142.286C502.629 136.196 500.454 131.237 496.104 127.409C491.928 123.581 486.36 121.667 479.4 121.667H435.03V162.905Z" fill="white"/>
</g>
<g filter="url(#filter2_d_56_354)">
<path className='contact-img-g' d="M308.227 268.871C294.481 268.871 281.692 266.522 269.86 261.824C258.028 256.952 247.675 250.253 238.801 241.727C229.927 233.027 222.967 223.022 217.921 211.712C213.049 200.228 210.613 187.874 210.613 174.65C210.613 161.426 213.049 149.159 217.921 137.849C222.967 126.365 229.927 116.36 238.801 107.834C247.675 99.134 258.028 92.435 269.86 87.737C281.692 82.865 294.481 80.429 308.227 80.429C321.973 80.429 334.762 82.865 346.594 87.737C358.426 92.435 368.779 99.134 377.653 107.834C386.527 116.36 393.4 126.365 398.272 137.849C403.318 149.159 405.841 161.426 405.841 174.65C405.841 187.874 403.318 200.228 398.272 211.712C393.4 223.022 386.527 233.027 377.653 241.727C368.779 250.253 358.426 256.952 346.594 261.824C334.762 266.522 321.973 268.871 308.227 268.871ZM308.227 227.633C315.535 227.633 322.321 226.328 328.585 223.718C334.849 220.934 340.243 217.193 344.767 212.495C349.465 207.797 353.119 202.229 355.729 195.791C358.339 189.179 359.644 182.132 359.644 174.65C359.644 166.994 358.339 159.947 355.729 153.509C353.119 147.071 349.465 141.503 344.767 136.805C340.243 132.107 334.849 128.453 328.585 125.843C322.321 123.059 315.535 121.667 308.227 121.667C300.919 121.667 294.133 123.059 287.869 125.843C281.605 128.453 276.124 132.107 271.426 136.805C266.902 141.503 263.335 147.071 260.725 153.509C258.115 159.947 256.81 166.994 256.81 174.65C256.81 182.132 258.115 189.179 260.725 195.791C263.335 202.229 266.902 207.797 271.426 212.495C276.124 217.193 281.605 220.934 287.869 223.718C294.133 226.328 300.919 227.633 308.227 227.633Z" fill="white"/>
</g>
<g filter="url(#filter3_d_56_354)">
<path className='contact-img-g' d="M46.719 266L6.003 83.3H52.2L74.385 196.052L106.227 83.3H148.248L180.09 196.052L202.275 83.3H246.906L206.19 266H158.688L126.585 149.594L94.221 266H46.719Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_56_354" x="556.141" y="83.3008" width="187.742" height="190.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="6" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_354"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_354" result="shape"/>
</filter>
<filter id="filter1_d_56_354" x="390.141" y="83.3008" width="176.641" height="190.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_354"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_354" result="shape"/>
</filter>
<filter id="filter2_d_56_354" x="210.609" y="80.4297" width="208.234" height="196.441" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_354"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_354" result="shape"/>
</filter>
<filter id="filter3_d_56_354" x="6" y="83.3008" width="253.906" height="190.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_354"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_354" result="shape"/>
</filter>
</defs>
</svg>
</TextBox>


					</WorkLink>
					<ClientsLink to="/clients">
						<TextBox textStyle={{marginTop: '-35px'}} big goBack={false}>
						<svg className='clients-img' width="943" height="345" viewBox="0 0 943 345" fill="none" xmlns="http://www.w3.org/2000/svg">
<g filter="url(#filter0_d_56_370)">
<path className='contact-img-g' d="M852.476 268.61C837.686 268.61 823.07 265.913 808.628 260.519C794.186 255.125 781.31 247.643 770 238.073L795.056 205.448C806.192 214.496 816.458 221.021 825.854 225.023C835.25 228.851 845.255 230.765 855.869 230.765C862.829 230.765 868.745 230.069 873.617 228.677C878.489 227.285 882.23 225.284 884.84 222.674C887.45 219.89 888.755 216.671 888.755 213.017C888.755 207.971 886.841 204.056 883.013 201.272C879.185 198.488 872.66 196.313 863.438 194.747L823.244 187.7C808.454 185.09 797.057 179.435 789.053 170.735C781.049 162.035 777.047 150.986 777.047 137.588C777.047 125.756 780.005 115.577 785.921 107.051C792.011 98.525 800.624 92 811.76 87.476C823.07 82.952 836.468 80.69 851.954 80.69C865.526 80.69 879.185 83.039 892.931 87.737C906.677 92.261 918.596 98.612 928.688 106.79L904.937 139.937C886.145 125.495 867.44 118.274 848.822 118.274C842.732 118.274 837.425 118.97 832.901 120.362C828.551 121.58 825.158 123.407 822.722 125.843C820.46 128.105 819.329 130.889 819.329 134.195C819.329 138.719 820.982 142.199 824.288 144.635C827.768 147.071 833.336 148.985 840.992 150.377L878.837 156.641C896.411 159.425 909.722 165.254 918.77 174.128C927.992 183.002 932.603 194.486 932.603 208.58C932.603 220.934 929.384 231.635 922.946 240.683C916.508 249.557 907.286 256.43 895.28 261.302C883.274 266.174 869.006 268.61 852.476 268.61Z" fill="white"/>
</g>
<g filter="url(#filter1_d_56_370)">
<path className='contact-img-g' d="M687.467 266V122.972H627.698V83.3H792.128V122.972H732.359V266H687.467Z" fill="white"/>
</g>
<g filter="url(#filter2_d_56_370)">
<path className='contact-img-g' d="M474.138 266V83.3H516.42L599.418 189.266V83.3H641.7V266H602.028L516.42 155.858V266H474.138Z" fill="white"/>
</g>
<g filter="url(#filter3_d_56_370)">
<path className='contact-img-g' d="M343.138 266V83.3H487.21V122.189H388.03V155.075H453.541V192.659H388.03V227.111H488.254V266H343.138Z" fill="white"/>
</g>
<g filter="url(#filter4_d_56_370)">
<path className='contact-img-g' d="M294.138 266V83.3H339.03V266H294.138Z" fill="white"/>
</g>
<g filter="url(#filter5_d_56_370)">
<path className='contact-img-g' d="M165.138 266V83.3H210.03V226.328H306.339V266H165.138Z" fill="white"/>
</g>
<g filter="url(#filter6_d_56_370)">
<path className='contact-img-g' d="M106.749 268.61C92.829 268.61 79.866 266.261 67.86 261.563C56.028 256.691 45.675 249.992 36.801 241.466C27.927 232.94 20.967 223.022 15.921 211.712C11.049 200.228 8.613 187.874 8.613 174.65C8.613 161.252 11.049 148.898 15.921 137.588C20.967 126.104 27.927 116.099 36.801 107.573C45.849 99.047 56.289 92.435 68.121 87.737C80.127 82.865 93.003 80.429 106.749 80.429C116.841 80.429 126.759 81.908 136.503 84.866C146.247 87.824 155.208 92 163.386 97.394C171.738 102.614 178.698 108.878 184.266 116.186L153.99 145.94C147.552 137.762 140.331 131.672 132.327 127.67C124.497 123.668 115.971 121.667 106.749 121.667C99.441 121.667 92.568 123.059 86.13 125.843C79.866 128.453 74.385 132.107 69.687 136.805C64.989 141.503 61.335 147.071 58.725 153.509C56.115 159.947 54.81 166.994 54.81 174.65C54.81 182.132 56.115 189.092 58.725 195.53C61.509 201.794 65.25 207.362 69.948 212.234C74.82 216.932 80.475 220.586 86.913 223.196C93.525 225.806 100.659 227.111 108.315 227.111C117.189 227.111 125.367 225.197 132.849 221.369C140.505 217.541 147.378 211.886 153.468 204.404L182.961 233.375C177.393 240.509 170.52 246.773 162.342 252.167C154.164 257.387 145.29 261.476 135.72 264.434C126.15 267.218 116.493 268.61 106.749 268.61Z" fill="white"/>
</g>
<defs>
<filter id="filter0_d_56_370" x="770" y="80.6895" width="172.602" height="195.92" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="6" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_370"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_370" result="shape"/>
</filter>
<filter id="filter1_d_56_370" x="627.695" y="83.3008" width="177.43" height="190.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_370"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_370" result="shape"/>
</filter>
<filter id="filter2_d_56_370" x="474.141" y="83.3008" width="180.562" height="190.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_370"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_370" result="shape"/>
</filter>
<filter id="filter3_d_56_370" x="343.141" y="83.3008" width="158.117" height="190.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_370"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_370" result="shape"/>
</filter>
<filter id="filter4_d_56_370" x="294.141" y="83.3008" width="57.8906" height="190.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_370"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_370" result="shape"/>
</filter>
<filter id="filter5_d_56_370" x="165.141" y="83.3008" width="154.195" height="190.699" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_370"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_370" result="shape"/>
</filter>
<filter id="filter6_d_56_370" x="8.60938" y="80.4297" width="188.656" height="196.18" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
<feOffset dx="9" dy="4"/>
<feGaussianBlur stdDeviation="2"/>
<feComposite in2="hardAlpha" operator="out"/>
<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_56_370"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_56_370" result="shape"/>
</filter>
</defs>
</svg>


						</TextBox>
					</ClientsLink>
					<BackHack>
						<BackButton className="backb" onClick={()=>onGoHome()}>BACK</BackButton>
					</BackHack>
				</WorkClients>
			</Slider>

			{!window.animated && current === 'home' && null}

		</FullPage>
  </>
  )
}

export default Home