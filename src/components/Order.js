import React from 'react'
import './Order.css'
import logo from '../icons/in-progress-32.png'
import { Panel, Col, Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

const Order = props => {
	return (
		<Col sm={3} md={3} xs={12}>
			<Panel className={'custom-panel'}>
				<Panel.Body className={'custom-panel-body'}>
					<img src={logo} alt={'icon'}></img>
					<h5>{props.title}</h5>
					<p>{props.wordLen} Words</p>
					<Button bsStyle='success'>Order</Button>
				</Panel.Body>
			</Panel>
		</Col>
	)
}
Order.propTypes = {
	title: PropTypes.string,
	wordLen: PropTypes.string
}
export default Order
