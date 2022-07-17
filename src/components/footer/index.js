import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
	return (
		<div
			style={{
				backgroundColor: '#ECEFF6',
				height: '16rem',
				borderRadius: '20px 20px 0px 0px',
			}}
		>
			<Container
				fluid="sm"
				style={{
					backgroundColor: '#938F98',
					height: '9rem',
					borderRadius: '0px 0px 20px 20px',
				}}
			>
				Footer atas
			</Container>
			<p>Footer Bawah</p>
		</div>
	);
};

export default Footer;
