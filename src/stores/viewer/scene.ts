/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-18 08:57:24
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-19 14:07:36
 * @Description  : 地图地球设置
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { defineStore, acceptHMRUpdate } from 'pinia'
import { useDBStore } from '../system/db.js'
import { GlobeSetting, TerrainSetting } from 'src/types/globe.js'
import { defaultMapSettings } from 'src/config/map/defaultMapSettings.js'

export const useSceneStore = defineStore('scene', {
  state: () => ({
    sceneSetting: {
      scene: {
        globe: defaultMapSettings.scene.globe,
      },
      terrain: defaultMapSettings.terrain,
    },
  }),
  getters: {},
  actions: {
    /**
     * @description: 设置地图地球设置
     * @param {GlobeSetting} globeSetting
     * @return {Promise<void>}
     */
    async setGlobe(globeSetting: GlobeSetting): Promise<void> {
      this.sceneSetting.scene.globe = globeSetting
      const dbStore = useDBStore()
      dbStore.set({
        dbName: 'viewer',
        path: 'scene.settings',
        value: this.sceneSetting,
        user: true,
      })
    },

    /**
     * @description: 设置场景的地形设置
     * @param {*} terrainSetting
     * @return {*}
     */
    async setTerrain(terrainSetting: TerrainSetting): Promise<void> {
      this.sceneSetting.terrain = terrainSetting
      const dbStore = useDBStore()
      dbStore.set({
        dbName: 'viewer',
        path: 'scene.settings',
        value: this.sceneSetting,
        user: true,
      })
    },

    /**
     * @description: 恢复地图地球设置到默认
     * @return {Promise<void>}
     */
    async setDefault(): Promise<void> {
      this.sceneSetting = defaultMapSettings
      const dbStore = useDBStore()
      dbStore.set({
        dbName: 'viewer',
        path: 'scene.settings',
        value: this.sceneSetting,
        user: true,
      })
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useSceneStore, import.meta.hot))
}
