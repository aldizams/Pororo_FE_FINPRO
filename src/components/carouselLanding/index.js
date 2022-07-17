import React from 'react';
import { FaCat } from 'react-icons/fa';

const CarouselLanding = () => {
	return (
		<div
			id="carouselExampleFade"
			class="carousel slide carousel-fade"
			data-bs-ride="carousel"
			style={{ margin: '5px 0' }}
		>
			<div class="carousel-inner">
				<div class="carousel-item active">
					<img
						src="https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
						class="d-block w-100"
						alt="..."
						height="550rem"
						style={{
							borderRadius: '20px',
							filter: 'blur(3px)',
							webkitFilter: 'blur(3px)',
						}}
					/>
					<h1
						style={{
							backgroundImage:
								'url{https://images.unsplash.com/photo-1519052537078-e6302a4968d4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80}',
						}}
					>
						<b style={{ fontFamily: 'Lobster, cursive', fontSize: '25px' }}>
							{' '}
							<FaCat style={{ marginBottom: '9px' }} /> MeowStore
						</b>
					</h1>
				</div>
			</div>
		</div>
	);
};

export default CarouselLanding;
