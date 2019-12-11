<!--
title: Menus 菜单项
sort: 1
-->


### 基础示例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <View>
        <Menus
          data={[
            { label: '收件', icon: <Icon type="feather" name="package" size={24} color="#FFF" />, onPress: () => null },
            { label: '已接单数', children: <Text style={styles.menuText}>0/0<Text style={styles.menuTextUnit}>(单)</Text></Text>, onPress: () => null },
            { label: '待打印', children: <Text style={styles.menuText}>0<Text style={styles.menuTextUnit}>(单)</Text></Text>, onPress: () => null },
            { label: '收件图', icon: <Icon type="material-community" name="google-maps" size={24} color="#FFF" />, onPress: () => null },
          ]}
        />
      </View>
    )
  }
}
```
<!--End-->

## 参数

### Menus

| 参数 | 说明 | 类型 | 默认值| 备注 |
|------|------|-----|------|------|
| data | 菜单项数据 | Array | [] | - |

### Menus.data

| 参数 | 说明 | 类型 | 默认值| 备注 |
|------|------|-----|------|------|
| label | 菜单名称 | String | - | - |
| icon | 图标 | Element | - | - |
| onPress | 点击回调 | Function | - | - |
| textStyle | 文本样式 | Object | - | - |
