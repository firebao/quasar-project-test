/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 16:17:01
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-26 12:45:41
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { Pinia } from 'pinia'
import { useAccountStore } from './account'
import { useDBStore } from './db'
import { useGrayStore } from './gray'
import { useLayoutStore } from './layout'
import { useLogStore } from './log'
import { useMenuStore } from './menu'
import { usePermissionStore } from './permission'
import { useSearchStore } from './search'
import { useThemeStore } from './theme'
import { useTransitionStore } from './transition'
import { useUserStore } from './user'

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
