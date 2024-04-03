/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 16:17:01
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-01 17:10:19
 * @Description  : 主题全局变量
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { acceptHMRUpdate, defineStore } from 'pinia'
import setting from 'src/config/setting.js'
import { get } from 'lodash'
import { useDBStore } from './db.js'
import {
  themeClassic as classic,
  themeElement as element,
} from 'src/config/theme/index.js'
import {
  ThemeOptions,
  ThemeStoreState,
  ThemeConfig,
  GlobalTheme,
} from 'src/types/theme.js'

export const useThemeStore = defineStore('theme', {
  state: (): ThemeStoreState => {
    return {
      list: get(setting, 'theme.list', []),
      activeName: get(setting, 'theme.list[0].name', 'classic'),
      oldTheme: '',
      themeConfig: {
        classic,
        element,
      },
    }
  },

  getters: {
    /**
     * @description 返回当前的主题信息,不是一个名字,而是当前激活主题的所有数据
     * @param {ThemeStoreState} state state
     */
    activeSetting(state: ThemeStoreState) {
      return state.list.find((theme) => theme.name === state.activeName)
    },
  },

  actions: {
    /**
     * @description 将vuex中的主题应用到dom
     */
    dom() {
      const oldThemeClass = `theme-${this.oldTheme}`
      const themeClass = `theme-${this.activeName}`

      if (document.body.className.includes(oldThemeClass)) {
        document.body.className = document.body.className.replace(
          oldThemeClass,
          themeClass
        )
      } else {
        document.body.className += ' ' + themeClass
      }

      const theme: ThemeOptions =
        this.themeConfig[this.activeName as keyof ThemeConfig]
      const keys = Object.keys(theme.global) as (keyof GlobalTheme)[]
      keys.forEach((key) => {
        const value = theme.global[key]
        if (value !== undefined) {
          document.body.style.setProperty(`--${key}`, value)
        }
      })
    },

    /**
     * @description 激活一个主题
     * @param {string} themeName 需要激活的主题名称
     */
    async set(themeName: string) {
      this.oldTheme = this.activeName

      this.activeName = this.list.find((e) => e.name === themeName)
        ? themeName
        : this.list[0].name

      this.dom()

      const dbStore = useDBStore()
      dbStore.set({
        dbName: 'sys',
        path: 'theme.activeName',
        value: this.activeName,
        user: true,
      })
    },

    /**
     * @description 从持久化数据加载主题设置
     */
    async load() {
      this.oldTheme = this.activeName
      const dbStore = useDBStore()
      const activeName = dbStore.get({
        dbName: 'sys',
        path: 'theme.activeName',
        defaultValue: this.list[0].name,
        user: true,
      })

      if (this.list.find((e) => e.name === activeName)) {
        this.activeName = activeName
      } else {
        this.activeName = this.list[0].name
        dbStore.set({
          dbName: 'sys',
          path: 'theme.activeName',
          value: this.activeName,
          user: true,
        })
      }
      this.dom()
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot))
}
