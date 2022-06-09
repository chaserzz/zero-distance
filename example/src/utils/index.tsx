import React from "react";
import Home from "../pages/home";
import Teleport1 from "../pages/teleport1";
import Teleport2 from "../pages/teleport2";

const ROUTERS = [
	{
		path:'/',
		element: <Home />,
		index: true,
		name: 'HOME'
	},
	{
		path: 'teleport1',
		element: <Teleport1 />,
		name: "teleport1",
	},
	{
		path: 'teleport2',
		element: <Teleport2 />,
		name: 'teleport1'
	},
]

export {
	ROUTERS
}