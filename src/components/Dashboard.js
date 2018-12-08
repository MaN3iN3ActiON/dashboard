import React from 'react'
import './Dashboard.css'
import OrderList from './OrderList'
import logo from '../icons/in-progress-32.png'
import { Grid, Row, Col, Panel, Button } from 'react-bootstrap'

const Dashboard = () => {
	const dummyData = [
		{ icon: '', title: 'Blog Post', wordLen: '400-500' },
		{ icon: '', title: 'White Paper', wordLen: '2500-3000' },
		{ icon: '', title: 'Website Content', wordLen: '250-350' },
		{ icon: '', title: 'Press Release', wordLen: '350-450' },
		{ icon: '', title: 'Product Description', wordLen: '150-200' },
		{ icon: '', title: 'Social Media', wordLen: '30-35' },
		{ icon: '', title: 'Book/Story Writing', wordLen: '500-1000' },
		{ icon: '', title: 'Video Script', wordLen: '1000-4000' },
		{ icon: '', title: 'Newsletter', wordLen: '400-500' },
		{ icon: '', title: 'Brochure Content', wordLen: '850-1000' },
		{ icon: '', title: 'Custom Content', wordLen: '850-1000' },
		{ icon: '', title: 'Contest', wordLen: '10-20' }
	]
	return (
		<Grid className={'custom-dashboard'}>
			<OrderList data={dummyData} />
			<Row>
				<Col sm={6} md={6} >
					<Panel className={'custom-panel'}>
						<Panel.Body className={'custom-panel-body'}>
							<img src={logo} alt={'icon'} />
							<h5>Order from Template</h5>
							<p>you can give an order from templates</p>
							<Button bsStyle="success">Order</Button>
						</Panel.Body>
					</Panel>
				</Col>
				<Col sm={6} md={6}>
					<Panel className={'custom-panel'}>
						<Panel.Body className={'custom-panel-body'}>
							<img src={logo} alt={'icon'} />
							<h5>Order via Spreadsheets</h5>
							<p>{'It\'s useful when giving bulk orders'}</p>
							<Button bsStyle="success">Order</Button>
						</Panel.Body>
					</Panel>
				</Col>
			</Row>
		</Grid>
	)
}

export default Dashboard
