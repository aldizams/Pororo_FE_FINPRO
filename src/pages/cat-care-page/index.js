import React from 'react';
import { Container } from 'react-bootstrap';
import { ArticleCard } from '../../components';

const CatCarePage = () => {
	return (
		<>
			<div className="CareBg">
				<Container fluid="sm">
					<h1>Let's Take Care Our Cat!</h1>
					<h4>Treat your cat better by learning from our articles</h4>
				</Container>
			</div>
			<Container fluid="sm">
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
				<ArticleCard />
			</Container>
		</>
	);
};

export default CatCarePage;
