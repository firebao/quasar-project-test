/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 16:24:28
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-15 17:12:47
 * @Description  : 主题类型
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
export interface GlobalTheme {
  themeSettingPanelBgColor?: string
  themeCardBgColor?: string
  themeBGColor?: string
  themeBGMaskColor?: string
  themeColor?: string
  themeColorAlpha?: string
  themeColorActive?: string
  themeScrollTopBackgroundColor?: string
  themeQInputColor?: string
  themeQInputBorderColor?: string
  themeQCheckboxTruthyColor?: string
  themeQMenuColor?: string
  themeQMenuBackgroundColor?: string
  themeQCardColor?: string
  themeQCardHeaderBackgroundColor?: string
  themeQCardBackgroundColor?: string
  themeQScrollAreaColor?: string
}

export interface ThemeOptions {
  themeName: string
  global: GlobalTheme
}

export interface ThemeConfig {
  classic: ThemeOptions
  element: ThemeOptions
}

export interface ThemeStoreState {
  list: { name: string }[]
  activeName: string
  oldTheme: string
  themeConfig: ThemeConfig
}
