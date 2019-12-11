// import Alarm from './pages/Alarm';
// import AlarmFilter from './pages/Alarm/Filter';
// import AlarmDetail from './pages/Alarm/Detail';
// import Log from './pages/Log';
// import LogDetail from './pages/Log/Detail';
// import Monitor from './pages/Monitor';
import System from './pages/System';
// import SystemProject from './pages/SystemProject';
// import Settings from './pages/Settings';
// import NotifyDetail from './pages/NotifyDetail';

export const routes = {
  System,
  // Alarm,
  // Monitor,
  // NotifyDetail,
  // Log,
  // LogDetail,
  // Settings,
  // SystemProject,
  // AlarmFilter,
  // AlarmDetail,
};

/**
 * 首页菜单，有权限判断
 * - `path` 匹配权限判断菜单是否显示
 */
export const routesInfo = {
  System: {
    icon: 'system',
    name: '系统监控',
    path: '/view/system',
    description: 'System monitoring.',
  },
};
