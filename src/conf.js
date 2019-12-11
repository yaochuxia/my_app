import { getUniqueId } from 'react-native-device-info';

const conf = {
  fetchHeader: {
    // x-auth-id 手机唯一编码
    'x-auth-id': getUniqueId(),
    // x-appId 系统唯一id
    // 'x-appId': 'e5bb804c-f66a-42e3-a9e4-5cc9bc4b27a0',
    'x-appId': 'peas',
    // 'x-appId': 'configure',
  },
  /**
   * 登录系统指定 `sys` 其它可以自定义，如 `peasRegion`
   * - `sysId`=peasRegion
   * - `loginSysId`=sys
   */
  sysId: 'peasRegion',
  loginSysId: 'sys',
  // 项目id
  projectId: 'dashboard',
  // 推送项目id
  jpushId: 'jgpush',
  hosts: [
    {
      label: '生产环境地址1',
      url: 'http://103.20.249.82:18901',
    },
    {
      label: '测试环境网关外网',
      url: 'http://122.144.220.210:50119',
    },
    {
      label: '本机 Mock API',
      url: 'http://localhost:3721',
    },
    {
      label: '本地测试环境1',
      url: 'http://192.168.12.61:6762',
    },
    {
      label: '本地测试环境2',
      url: 'http://192.168.9.165:8399',
    },
  ],
  // 登录系统指定 `sys` 其它可以自定义
  // host: 'http://192.168.12.61:6762',
  // host: 'http://localhost:3721',
  // host: 'http://192.168.9.165:8399/peasRegion/configure',
  host: 'http://192.168.9.165:8399/sys/configure',
};

export default conf;
