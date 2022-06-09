import React,{ReactNode} from "react";
import {Route, Routes} from 'react-router-dom'

export interface routeConfig {
	path: string,
	element: ReactNode,
	index?: boolean
}

function renderRouter(config: routeConfig[]){
	return <Routes>
		{
			config.map(route => {
				return <Route key={route.path} element={route.element} path={route.path} index={route.index}/>
			})
		}
	</Routes>
}

export default renderRouter