/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 16:17:01
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-07 11:20:12
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { Pinia } from 'pinia'
import { useAccountStore } from './account.js'
import { useDBStore } from './db.js'
import { useGrayStore } from './gray.js'
import { useLayoutStore } from './layout.js'
import { useLogStore } from './log.js'
import { useMenuStore } from './menu.js'
import { usePermissionStore } from './permission.js'
import { useSearchStore } from './search.js'
import { useThemeStore } from './theme.js'
import { useTransitionStore } from './transition.js'
import { useUserStore } from './user.js'

// 组件内使用不需要传pinia，组件外使用需要传pinia
export const systemStore = {
  // useAccountStore: (pinia?: Pinia) => useAccountStore(pinia),
  // useDBStore: (pinia?: Pinia) => useDBStore(pinia),
  // useGrayStore: (pinia?: Pinia) => useGrayStore(pinia),
  // useLayoutStore: (pinia?: Pinia) => useLayoutStore(pinia),
  // useLogStore: (pinia?: Pinia) => useLogStore(pinia),
  // useMenuStore: (pinia?: Pinia) => useMenuStore(pinia),
  // usePermissionStore: (pinia?: Pinia) => usePermissionStore(pinia),
  // useSearchStore: (pinia?: Pinia) => useSearchStore(pinia),
  useThemeStore: (pinia?: Pinia) => useThemeStore(pinia),
  // useTransitionStore: (pinia?: Pinia) => useTransitionStore(pinia),
  // useUserStore: (pinia?: Pinia) => useUserStore(pinia)
}
