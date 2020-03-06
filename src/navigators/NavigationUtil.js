/**
 * 全局导航跳转工具类 by CrazyCodeBoy
 */
export default class NavigationUtil {
  /**
   * 跳转到指定页面
   * @param params 要传递的参数
   * @param page 要跳转的页面名
   **/
  static goPage(params, page) {
      const navigation = NavigationUtil.navigation;
      if (!navigation) {
          console.log('NavigationUtil.navigation can not be null')
          return;
      }
      navigation.navigate(
          page,
          {
              ...params
          }
      )
  }
}