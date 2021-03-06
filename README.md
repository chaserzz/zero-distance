<br>
<br>
<p align="center" >
	zero-distance
</p>
快速在react中实现两个路由中的相同组件的动画效果。
<br>
<br>

## 灵感
来源于Vue官方文档中的<a href="https://cn.vuejs.org/v2/guide/transitions.html">transition-group</a>的介绍，其中原理是使用的是<a href="https://aerotwist.com/blog/flip-your-animations/">flip</a>实现，因此想到如果将这个效果使用到不同路由的相同组件中应该会很有趣。
<br>
<br>

## 兼容性说明
由于采用react-hook进行的开发，所以需要项目中使用的react版本>16.9	
<br>
<br>

## 安装
<br>

```js
npm install zero-distance
```
<br>

## 使用
<br>

### 快速使用
```jsx
// 在你的Router组件之前使用Stage包裹
// 如以下的代码

import {Stage} from 'zero-distance'
<BrowerRouter>
	<Stage>
		...你的路由组件
	</Stage>
</BrowerRouter>

// 在两个路由组件中使用Actor包裹需要使用动画的子组件
// 如以下的代码

// route1
import {Actor} from 'zero-distance'
<div>
	<Actor name="signleName">
		<span>something else...</span>
	</Actor>
</div>

// route2
import {Actor} from 'zero-distance'
<div>
	<Actor name="signleName">
		<span>something else...</span>
	</Actor>
</div>
```
<br />
查看<a href="https://github.com/chaserzz/zero-distance/tree/main/example">example</a>来获得具体示例
### Api
<br />

#### Actor
<br />

| 参数    | 描述 | 类型          |  默认值   |
| :---:       |    :----:   |    :---:      |    :---:   |
| name   | 动画组件的唯一表示  | string   |          |
| duration   | 完成动画的时间(ms)  | number   |     300     |
| easing   | 动画随时间变化的速率  | string   |     cubic-bezier(0,0,0.32,1)     |

#### ⚠️ easing 属性需要时css可识别的动画速率.
<br />
<br />

### 测试

建设中...

### 
<br />