import React from 'react';
import { Container } from 'react-bootstrap';
import { BreedNav, CatCard } from '../../components';

const BreedHairPage = () => {
	return (
		<div style={{ margin: '20px 0' }}>
			<BreedNav />
			<Container fluid="sm">
				<CatCard />
			</Container>
		</div>
	);
};

export default BreedHairPage;
