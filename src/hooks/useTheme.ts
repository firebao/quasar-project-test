/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-07 14:52:13
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-07 14:56:47
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { stores } from 'src/stores/index.js'
import { computed } from 'vue'
import { ThemeOptions } from 'src/types/theme.js'
import { storeToRefs } from 'pinia'

export const useTheme = () => {
  const store = stores.system.useThemeStore()
  const { activeName, oldTheme, list, themeConfig } = storeToRefs(store)

  const theme = computed<ThemeOptions>(() => {
    const themeStore = stores.system.useThemeStore()
    const activeName =
      themeStore.activeName as keyof typeof themeStore.themeConfig
    return themeStore.themeConfig[activeName]
  })

  return { theme, activeName, oldTheme, list, themeConfig }
}
