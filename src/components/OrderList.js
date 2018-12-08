import React from 'react'
import Order from './Order'
import PropTypes from 'prop-types'
import { Row } from 'react-bootstrap'

const OrderList = ({ data }) => {
	return (
		<Row>
			{data.map(e => {
				return <Order eventKey={e.title} key={e.title} {...e} />
			})}
		</Row>
	)
}
OrderList.propTypes = {
	data: PropTypes.array
}

export default OrderList
