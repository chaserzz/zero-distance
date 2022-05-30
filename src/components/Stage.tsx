import { StateProps, nameMapToRect } from '../typings';

import React, { memo, useState } from 'react'
import StageContext from '../util/context';

const Stage = memo(({ children }: StateProps) => {
  const [mapNameToRect, setMapNameToRect] = useState<nameMapToRect>({});
  const contextValue = {
    mapNameToRect,
    setMapNameToRect: (value: DOMRectReadOnly,name: string) => {
      setMapNameToRect(preState => Object.assign({},preState,{[name]: value}))
    }
  };
  return (
    <StageContext.Provider value={contextValue}>
      {children}
    </StageContext.Provider>
  )
})

export default Stage