// 创建 Context 填入默认值（任何一个 js 变量）
import React from "react"
import { StateContextI } from "../typings";
const StageContext = React.createContext<StateContextI>(null)

export default StageContext;