<!--
title: Header 自定义头部组件
sort: 1
-->


### 基础示例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <View>
        <Header
          headerRight={<Location />}
        >
          <View style={{ flex: 1, paddingLeft: 15 }}>
            <SearchBar
              style={{ height: 35, alignItems: 'center', paddingRight: 0 }}
              placeholder="Search"
            />
          </View>
        </Header>
      </View>
    )
  }
}
```
<!--End-->

## 参数

### Header

| 参数 | 说明 | 类型 | 默认值| 备注 |
|------|------|-----|------|------|
| headerLeft | 左边按钮 | Element | - | - |
| headerRight | →边按钮 | Element | - | - |
| wrapStyle | 外层样式 | Object | - | - |
