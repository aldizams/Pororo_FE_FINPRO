import React from 'react';
import { Nav } from 'react-bootstrap';

const BreedNav = () => {
	return (
		<Nav fill variant="tabs" defaultActiveKey="/home">
			<Nav.Item>
				<Nav.Link href="/home">Long Hair</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-1">Medium Hair</Nav.Link>
			</Nav.Item>
			<Nav.Item>
				<Nav.Link eventKey="link-2">Short Hair</Nav.Link>
			</Nav.Item>
		</Nav>
	);
};

export default BreedNav;
