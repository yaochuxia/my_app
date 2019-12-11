<!--
title: ScrollLayoutContainer 滚动布局组件
sort: 1
-->

> 内部实现了键盘遮挡，下拉刷新接口。


### 基础示例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <ScrollLayoutContainer hasTab={true} onRefresh={this.onRefresh} refreshing={refreshing}>
        <View style={{ paddingHorizontal: 10 }}>
          <Text>ScrollLayoutContainer</Text>
        </View>
      </ScrollLayoutContainer>
    )
  }
}
```
<!--End-->

## 参数

### ScrollLayoutContainer

| 参数 | 说明 | 类型 | 默认值| 备注 |
|------|------|-----|------|------|
| hasTab | 页面是否包含tab入口，如果存在会自动添加marginBottom | Boolean | false | - |
| refreshing | 是否显示刷新 | Boolean | false | - |
| onRefresh | 刷新执行函数 | Function | ()=>null | - |
| offset | 是否需要设置键盘弹出时offset填充距离 | Number、Boolean | false | 安卓系统上会减去键盘高度 |

更多属性设置参照 `KeyboardAvoidingView` 组件
