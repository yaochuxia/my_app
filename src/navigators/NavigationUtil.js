export default class NavigationUtil{
  static goPage(params, page){
    const { navigation } = NavigationUtil.navigation;
    console.log("navigation---",navigation)
    if(!navigation){
      console.log("navigation can not be null")
    }
    navigation.navigate(
      page,
      {
        ...params
      }
    )

  } 
}