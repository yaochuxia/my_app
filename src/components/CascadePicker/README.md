<!--
title: CascadePicker 级联选择
sort: 1
-->

### 基础示例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <CascadePicker
        data={cascadeData}
        value={['01', '01-01']}
        onSelect={() => { }}
      />
    )
  }
}
```
<!--End-->

## 参数

### CascadePicker

| 参数 | 说明 | 类型 | 默认值| 备注 |
|------|------|-----|------|------|
| containerStyle | 组件样式 | Object | - | - |
| onSelect | 选择回调 | Function | ()=>null | - |
| value | 选中值 | Array | [] | - |
| data | 级联选择数据 | Object | [] | 数据格式参考data.json（id作为唯一标示，label为显示文字,children为下一级属性） |
| initialNumToRender | 初始渲染数据条数 | Number | - | 14 |
