import React ,{useState,useEffect}from 'react'
import { motion } from 'framer-motion';
import { withRouter } from 'react-router';
import Contact from '../contact/contact';
import { useNavigate } from 'react-router';
import {  useLocation } from 'react-router-dom'; 
import styled from 'styled-components'; 
import Config from '../../styles/config'; 
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

				<ContactMenu onClick={()=>onContactClick()}>
					<TextBox big selected={current === CONTACT} goBack={current === CONTACT}>Contact</TextBox>
				</ContactMenu>

				<Us onClick={()=>onUSClick()}>
					<TextBox big selected={current === US} goBack={current === US}>Us</TextBox>
				</Us>
				
				<WorkClients className="wclients">
					<WorkLink to="/work">
						<TextBox big link="work">WORK</TextBox>
					</WorkLink>
					<ClientsLink to="/clients">
						<TextBox textStyle={{marginTop: '-35px'}} big goBack={false}>CLIENTS</TextBox>
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