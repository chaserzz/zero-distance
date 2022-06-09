import React from 'react'
import { HashRouter, Link } from 'react-router-dom'
import {Stage} from 'zero-distance'

import { ROUTERS } from './utils'
import renderRouter from './router'
export default function App() {
	return (
		<HashRouter>
			<Stage>
				{
					ROUTERS.map(route => 
						<Link to={route.path} key={route.path}>{route.name}</Link>
					)
				}
				{
					renderRouter(ROUTERS)
				}
			</Stage>
		</HashRouter>
	)
}
