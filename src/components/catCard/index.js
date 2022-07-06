import React from 'react';
import { Card } from 'react-bootstrap';

const CatCard = () => {
	return (
		<Card
			className="bg-dark text-white"
			style={{ width: '20rem', borderRadius: '20px' }}
		>
			<Card.Img
				src="https://upload.wikimedia.org/wikipedia/commons/6/64/Ragdoll_from_Gatil_Ragbelas.jpg"
				alt="Card image"
				style={{ borderRadius: '20px' }}
			/>
			<Card.ImgOverlay>
				<Card.Title
					style={{
						background: 'rgba( 255, 255, 255, 0.3 )',
						color: 'White',
						borderRadius: '20px',
						textAlign: 'center',
						boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
						backdropFilter: 'blur( 5.5px )',
					}}
				>
					KOCENG
				</Card.Title>
			</Card.ImgOverlay>
		</Card>
	);
};

export default CatCard;
