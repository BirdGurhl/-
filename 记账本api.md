## /记账本

```text
暂无描述
```

#### 公共Header参数

| 参数名 | 示例值 | 参数描述 |
| --- | --- | ---- |
| 暂无参数 |

#### 公共Query参数

| 参数名 | 示例值 | 参数描述 |
| --- | --- | ---- |
| 暂无参数 |

#### 公共Body参数

| 参数名 | 示例值 | 参数描述 |
| --- | --- | ---- |
| 暂无参数 |

#### 预执行脚本

```javascript
暂无预执行脚本
```

#### 后执行脚本

```javascript
暂无后执行脚本
```

## /记账本/获取所有账单

```text
暂无描述
```

#### 接口状态

> 开发中

#### 接口URL

> /list

#### 请求方式

> GET

#### Content-Type

> none

#### 预执行脚本

```javascript
暂无预执行脚本
```

#### 后执行脚本

```javascript
暂无后执行脚本
```

#### 成功响应示例

```javascript
{
	"code": "200",
	"msg": "成功",
	"data": [
		{
			"_id": "6433afab064008dd419af02f",
			"name": "买烟",
			"date": "2023-04-10T06:41:47.962Z",
			"type": "支出",
			"money": 23,
			"remark": "百乐蓝莓爆珠",
			"__v": 0
		}
    ]
}
```

## /记账本/添加账单

```text
暂无描述
```

#### 接口状态

> 开发中

#### 接口URL

> /account

#### 请求方式

> POST

#### Content-Type

> json

#### 请求Body参数

```javascript
{
    "name": "买烟",
    "type": "支出",
    "money": 20,
    "remark": "百乐蓝莓爆珠"
}
```

| 参数名 | 示例值 | 参数类型 | 是否必填 | 参数描述 |
| --- | --- | ---- | ---- | ---- |
| name | 买烟 | String | 是 | 事项名称 |
| type | 支出 | String | 是 | '支出','收入' |
| money | 20 | Integer | 是 | 金额 |
| remark | 百乐蓝莓爆珠 | String | 是 | 备注 |

#### 预执行脚本

```javascript
暂无预执行脚本
```

#### 后执行脚本

```javascript
暂无后执行脚本
```

#### 成功响应示例

```javascript
{
	"code": "200",
	"msg": "成功",
	"data": {
		"name": "买烟",
		"date": "2023-04-10T06:41:47.962Z",
		"type": "支出",
		"money": 23,
		"remark": "百乐蓝莓爆珠",
		"_id": "6433afab064008dd419af02f",
		"__v": 0
	}
}
```

| 参数名 | 示例值 | 参数类型 | 参数描述 |
| --- | --- | ---- | ---- |
| code | 200 | String |  |
| msg | 成功 | String |  |
| data | - | Object |  |
| data.name | 买烟 | String |  |
| data.date | 2023-04-10T06:41:47.962Z | String |  |
| data.type | 支出 | String |  |
| data.money | 23 | Integer |  |
| data.remark | 百乐蓝莓爆珠 | String |  |
| data._id | 6433afab064008dd419af02f | String |  |
| data.__v | 0 | Integer |  |

## /记账本/获取单个账单

```text
暂无描述
```

#### 接口状态

> 开发中

#### 接口URL

> /list/:id

#### 请求方式

> GET

#### Content-Type

> none

#### 路径变量

| 参数名 | 示例值 | 参数描述 |
| --- | --- | ---- |
| id | 6432894f4d9fdf4bba9722bc | 账单id |

#### 预执行脚本

```javascript
暂无预执行脚本
```

#### 后执行脚本

```javascript
暂无后执行脚本
```

#### 成功响应示例

```javascript
{
	"code": "200",
	"msg": "成功",
	"data": {
		"_id": "6432894f4d9fdf4bba9722bc",
		"name": "买电影票",
		"date": "2023-04-07T00:00:00.000Z",
		"type": "支出",
		"money": 60,
		"remark": "看了最新的电影",
		"__v": 0
	}
}
```

## /记账本/删除账单

```text
暂无描述
```

#### 接口状态

> 开发中

#### 接口URL

> /list/:id

#### 请求方式

> DELETE

#### Content-Type

> none

#### 路径变量

| 参数名 | 示例值 | 参数描述 |
| --- | --- | ---- |
| id | 6433af6eb1ae02fc8f88207a | 账单id |

#### 预执行脚本

```javascript
暂无预执行脚本
```

#### 后执行脚本

```javascript
暂无后执行脚本
```

#### 成功响应示例

```javascript
{
	"code": "200",
	"msg": "成功",
	"data": {
		"_id": "6433af6eb1ae02fc8f88207a",
		"name": "买烟",
		"date": null,
		"type": "支出",
		"money": 23,
		"remark": "百乐蓝莓爆珠",
		"__v": 0
	}
}
```
