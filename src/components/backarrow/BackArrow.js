import React from 'react';
import styled from 'styled-components'
// import { Link } from 'react-router-dom';
import breakpoint from 'styled-components-breakpoint';
import Config from '../../styles/config';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 50px;
	height: 50px;
	background-color: ${Config.DARK};

	display: flex;
	align-items: center;
	justify-content: center;

	${breakpoint('tablet')`
		display: none;
	`}

	svg {
		margin-left: -5px;
	}
`;

const BackArrow = ({to}) => {

    const navigate = useNavigate();

	const onGoBack = () => {
		// console.log('goBack:', to)
		if(to){
			navigate(to)
			return;
		}
		navigate(-1)
	}

	return (
		<Container onClick={onGoBack}>
			<svg xmlns="http://www.w3.org/2000/svg" width="15.659" height="24.846" viewBox="0 0 15.659 24.846">
				<g data-name="Group 3">
					<path data-name="Path 3" d="M12.423 0L0 12.423l12.423 12.423 3.236-3.236-9.187-9.187 9.187-9.187L12.423 0z" fill="#e1e1e1"/>
				</g>
			</svg>
		</Container>
	);
};

export default BackArrow;