<!--
title: CusCheckBoxItem 复选单个按钮
sort: 1
-->


### 基础示例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <View>
        <CusCheckBoxItem
          value={`${item}`}
        />
      </View>
    )
  }
}
```
<!--End-->

## 参数

### CheckBox.CheckBoxItem

| 参数 | 说明 | 类型 | 默认值| 备注 |
|------|------|-----|------|------|
| isSelected | 是否选中 | Boolean | false | - |
| value | 当前选中值 | String | - | - |
| label | 复选框文本 | String | - | - |
| disabled | 是否禁用 | Boolean | false | - |
| hasBorder | 是否显示底部边框 | Boolean | true | - |


更多信息，参考`ky-mobile-ui` 的  `CheckBox.CheckBoxItem`
