/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 16:23:50
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-26 13:12:25
 * @Description  : 设置相关配置
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
export default {
  theme: {
    list: [
      {
        title: '经典国网绿',
        name: 'classic',
        preview: 'images/theme/classic/preview@2x.png',
      },
      {
        title: '淡雅科技蓝',
        name: 'element',
        preview: 'images/theme/element/preview@2x.png',
      },
    ],
  },
  menu: {
    asideCollapse: false,
    asideTransition: true,
  },
  // 快捷键
  // 支持快捷键 例如 ctrl+shift+s
  hotkey: {
    search: {
      open: 's',
      close: 'esc',
    },
  },
  // 是否默认开启页面切换动画
  transition: {
    active: true,
  },
}
