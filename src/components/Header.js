import React from 'react'
import './Header.css'
import Rupees from '../icons/rupee-24.png'
import { Navbar, Nav, NavItem, Image } from 'react-bootstrap'
const Header = () => (
	<Navbar staticTop inverse collapseOnSelect className={'custom-header'}>
		<Navbar.Header>
			<Navbar.Brand>
				<a href="#home">whitepanda</a>
			</Navbar.Brand>
			<Navbar.Toggle />
		</Navbar.Header>
		<Navbar.Collapse>
			<Nav pullRight>
				<NavItem eventKey={1} href="#">
					<Image src={Rupees} rounded />
				</NavItem>
				<NavItem eventKey={2} href="#">
					notifications
				</NavItem>
				<NavItem eventKey={3} href="#">
					user
				</NavItem>
				<NavItem eventKey={4} href="#">
					cart
				</NavItem>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
