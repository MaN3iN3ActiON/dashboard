import React from 'react'
import './Sidebar.css'
import logo from '../icons/in-progress-32.png'

const Sidebar = () => (
	<nav id={'sidebar'}>
		<ul className="list-unstyled components">
			<li className={'spacing'}>
				<img src={logo} alt={'icon'} />
			</li>
			<li className={'spacing'}>
				<img src={logo} alt={'icon'} />
			</li>
			<li className={'spacing'}>
				<img src={logo} alt={'icon'} />
			</li>
		</ul>
	</nav>
)

export default Sidebar
