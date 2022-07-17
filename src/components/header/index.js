import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { FaCat } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<Navbar
			expand="lg"
			style={{
				backgroundImage:
					'url("https://images.unsplash.com/photo-1442291928580-fb5d0856a8f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80")',
				color: '#232528',
				backgroundPosition: 'center',
				backgroundRepeat: 'no-repeat',
				backgroundSize: '100% 250px',
				height: '100px',
				borderRadius: '0px 0px 20px 20px',
			}}
		>
			<Container>
				<Navbar.Brand as={Link} to="/">
					<b style={{ fontFamily: 'Lobster, cursive', fontSize: '25px' }}>
						{' '}
						<FaCat style={{ marginBottom: '9px' }} /> MeowStore
					</b>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav
						className="me-auto"
						style={{ fontSize: '15px', color: '#232528' }}
					>
						<Nav.Link as={Link} to="/">
							Breed
						</Nav.Link>
						<Nav.Link as={Link} to="/care">
							Cat Care
						</Nav.Link>
						<Nav.Link href="#link">Adopt</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
