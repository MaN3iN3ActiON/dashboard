import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import './Main.css'

const Main = () => (
	<main className={'wrapper'}>
		<Sidebar />
		<Dashboard />
	</main>
)

export default Main
