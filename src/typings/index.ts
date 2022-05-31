import { ReactNode } from "react";

// stage组件的props
export interface StateProps {
	children: ReactNode | ReactNode[]
}

// actor组件的props
export interface ActorProps {
	name: string,
	duration?: number,
	easing?: string,
	children: ReactNode
}

// stage组件的state - 由组件唯一名称映射到组件的rect属性的map 
export interface nameMapToRect {
	[propName: string] : DOMRectReadOnly
}

// set组件名称映射到rect的函数
export type setNameMapToRect = (value: DOMRectReadOnly, name: string) => void;

// statecontext的value
export interface StateContextI {
	mapNameToRect: nameMapToRect,
	setMapNameToRect: setNameMapToRect
}