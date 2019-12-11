<!--
title: Items 列表项布局组件
sort: 1
-->


### 基础示例

<!--DemoStart--> 
```js
class Demo extends Component {
  render() {
    return (
      <View>
        <Items
          key={index}
          itemLeft={(
            <View style={{ width: 40 }}>
              <CusCheckBoxItem
                value={`${item}`}
              />
            </View>
          )}
          title={<Text>运单号：{`${item}`}</Text>}
          content={`姓名：安能 ${item}KM`}
          extra="妥投：今日"
          description="地址：中国-上海-青浦徐泾E通世界商务园 明珠路徐祥路1018号（德邦双子楼）"
          actions="备注：10前送达"
        />
      </View>
    )
  }
}
```
<!--End-->

## 参数

### Items

| 参数 | 说明 | 类型 | 默认值| 备注 |
|------|------|-----|------|------|
| wrapStyle | 外层样式 | Object | - | - |
| itemLeft | 左边部分 | Enum{'Element','String'} | - | - |
| title | 标题 | Enum{'Element','String'} | - | - |
| content | 内容部分 | Enum{'Element','String'} | - | - |
| extra | 额外内容部分 | Enum{'Element','String'} | - | - |
| description | 下方描述部分 | Enum{'Element','String'} | - | - |
| actions | 更多操作部分 | Enum{'Element','String'} | - | - |
