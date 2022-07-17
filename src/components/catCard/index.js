import React from 'react';
import { Card } from 'react-bootstrap';

const CatCard = () => {
	return (
		<Card
			className="bg-dark text-white"
			style={{
				width: '20rem',
				borderRadius: '20px',
				boxShadow: '6px 6px 28px -5px #938F98',
			}}
		>
			<Card.Img
				src="https://upload.wikimedia.org/wikipedia/commons/6/64/Ragdoll_from_Gatil_Ragbelas.jpg"
				alt="Card image"
				style={{ borderRadius: '20px' }}
			/>
			<Card.ImgOverlay
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'flex-end',
					alignItems: 'stretch',
				}}
			>
				<Card.Title className="ButtonCard">KOCENG</Card.Title>
			</Card.ImgOverlay>
		</Card>
	);
};

export default CatCard;
