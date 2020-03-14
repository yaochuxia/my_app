#### 初始化项目
`react-native init my-app`

#### react-native-vector-icons 矢量图标
- `npm install --save react-native-vector-icons`

###### 配置ios
1. `cd ios/AwesomeProject/Info.plist`
2. 添加代码  

```html
  <key>UIAppFonts</key>
  <array>
    <string>AntDesign.ttf</string>
    <string>Entypo.ttf</string>
    <string>EvilIcons.ttf</string>
    <string>Feather.ttf</string>
    <string>FontAwesome.ttf</string>
    <string>FontAwesome5_Brands.ttf</string>
    <string>FontAwesome5_Regular.ttf</string>
    <string>FontAwesome5_Solid.ttf</string>
    <string>Foundation.ttf</string>
    <string>Ionicons.ttf</string>
    <string>MaterialIcons.ttf</string>
    <string>MaterialCommunityIcons.ttf</string>
    <string>SimpleLineIcons.ttf</string>
    <string>Octicons.ttf</string>
    <string>Zocial.ttf</string>
  </array>
```

3. `cd ios`
4. `pod install`

###### 配置Android
1. `cd android/app/build.gradle`
2. 添加代码   

`apply from: "../../node_modules/react-native-vector-icons/fonts.gradle"`



#### react-navigation 堆栈导航器

`createSwitchNavigator`的用途是一次只显示一个页面。 默认情况下，它不处理返回操作，并在你切换时将路由重置为默认状态

`createSwitchNavigator(RouteConfigs, SwitchNavigatorConfig):`

1. `import { createStackNavigator } from 'react-navigation-stack';` 

2. `import { createBottomTabNavigator,createMaterialTopTabNavigator } from 'react-navigation-tabs';` 

3. `import { createDrawerNavigator,DrawerNavigatorItems }from 'react-navigation-drawer';` 


- `createMaterialTopTabNavigator` 顶部导航器 
- `createBottomTabNavigator` 底部导航器
- `createDrawerNavigator` 抽屉导航器
- `createSwitchNavigator` 切换导航器
