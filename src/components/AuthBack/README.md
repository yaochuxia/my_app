<!--
title: AuthBack 登录背景图
sort: 1
-->

### 基础示例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <AuthBack>
        <Text style={styles.anneng}>安 能 快 递</Text>
      </AuthBack>
    )
  }
}
```
<!--End-->

## 参数

### AuthBack

| 参数 | 说明 | 类型 | 默认值| 备注 |
|------|------|-----|------|------|
| style | 组件样式 | Object | - | - |
| imgUrl | 自定义图片URL | URI | - | 参考Image组件用法 |
