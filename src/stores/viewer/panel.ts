/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-05-10 16:17:19
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-14 19:45:46
 * @Description  : 全局Panel状态管理
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { defineStore, acceptHMRUpdate } from 'pinia'

export const usePanelStore = defineStore('panel', {
  state: () => ({
    uniquenessPanel: {
      siteAndFiberFilterPanel: false,
      communicationRoomEquPanel: false,
      siteDetailInfoPanel: false,
    },
    nonUniquenessPanel: {
      siteEquListPanel: false,
    },
  }),
  getters: {},
  actions: {
    /**
     * @description: 设置站点与线缆筛选Panel状态
     * @param {boolean} status
     * @return {void}
     */
    setFilterPanel(status: boolean): void {
      this.uniquenessPanel.siteAndFiberFilterPanel = status
    },

    /**
     * @description: 设置站点详细面板的状态
     * @param {boolean} status
     * @return {void}
     */
    setDetailInfoPanel(status: boolean): void {
      this.uniquenessPanel.siteDetailInfoPanel = status
    },

    /**
     * @description: 设置站点机房设备列表Panel的状态
     * @param {boolean} status
     * @return {*}
     */
    setEquListPanel(status: boolean): void {
      this.nonUniquenessPanel.siteEquListPanel = status
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(usePanelStore, import.meta.hot))
}
