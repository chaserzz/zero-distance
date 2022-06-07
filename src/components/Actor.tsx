import React, { memo, useContext, useLayoutEffect, useRef, } from 'react'
import { ActorProps } from 'src/typings';
import StageContext from 'src/util/context';
import { calculateInvert } from '../util/index';
const Actor = memo(({children,name,duration,easing}: ActorProps) => {
  const {
    mapNameToRect,
    setMapNameToRect
  } = useContext(StageContext);
	// 设置默认值
  const curDom = useRef(null);

  // 使用layout获取离开前的dom数据
  useLayoutEffect(() => {
    const curRect = curDom.current.getBoundingClientRect();
    if(mapNameToRect[name]){
      const preRect = mapNameToRect[name];
      const {left,top,scalX,scalY} = calculateInvert(preRect,curRect);
      const player = curDom.current.animate([
        {transform: `translate(${left}px,${top}px) scale(${scalX},${scalY})`},
        {transform: 'none'}
      ],{
        duration: duration || 300,
        easing: easing || "cubic-bezier(0,0,0.32,1)",
      });
    }
    setMapNameToRect(curRect,name);
  }, []);

  return (
    <div ref={curDom} style={{width: 'fit-content', height: 'fit-content'}}>
      {children}
    </div>
  )
})

export default Actor