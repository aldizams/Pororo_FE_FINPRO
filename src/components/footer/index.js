import React from 'react';
import { Container } from 'react-bootstrap';
import MasAzmiProf from '../../img/WhatsApp Image 2022-06-27 at 11.27.06 AM.jpeg';
import DizaProf from '../../img/20200916141629_IMG_3263.JPG';
import MasRenoProf from '../../img/WhatsApp Image 2022-07-17 at 6.44.19 PM.jpeg';

const Footer = () => {
	return (
		<div
			style={{
				backgroundColor: '#ECEFF6',
				height: '20rem',
				borderRadius: '20px 20px 0px 0px',
			}}
		>
			<Container
				fluid="sm"
				style={{
					backgroundColor: '#DBD8D3',
					height: '12rem',
					borderRadius: '0px 0px 20px 20px',
					display: 'flex',
					justifyContent: 'space-around',
					alignItems: 'center',
					flexDirection: 'row',
				}}
			>
				<div style={{ color: 'white' }} className="profileFooter">
					<img src={MasAzmiProf} className="profPic" />
					<h5>M.Shofi Azmi</h5>
				</div>
				<div style={{ color: 'white' }} className="profileFooter">
					<img src={DizaProf} className="profPic" />
					<h5>Aldiza M. S</h5>
				</div>
				<div style={{ color: 'white' }} className="profileFooter">
					<img src={MasRenoProf} className="profPic" />
					<h5>Reno Dwijaya</h5>
				</div>
			</Container>
			<div
				style={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					marginTop: '50px',
				}}
			>
				<h3> &#169;PORORO</h3>
			</div>
		</div>
	);
};

export default Footer;
