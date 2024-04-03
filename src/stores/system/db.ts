/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 16:17:01
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-29 16:33:07
 * @Description  : 数据持久化
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { acceptHMRUpdate, defineStore } from 'pinia'
import { database as getDatabase, dbGet, dbSet } from 'src/utils/db.js'
import { GetPayload, SetPayload, DatabasePayload } from 'src/types/db.js'

export const useDBStore = defineStore('db', {
  state: () => ({}),

  getters: {},

  actions: {
    /**
     * @description 将数据存储到指定位置 | 路径不存在会自动初始化, 效果类似于取值 dbName.path = value
     * @param {SetPayload} payload
     * @param {string} payload.dbName 数据库名称
     * @param {string} payload.path 存储路径
     * @param {any} payload.value 需要存储的值
     * @param {boolean} payload.user 是否区分用户
     */
    set({
      dbName = 'database',
      path = '',
      value = '',
      user = false,
    }: SetPayload) {
      dbSet({ dbName, path, value, user })
    },

    /**
     * @description 获取数据
     * @description 效果类似于取值 dbName.path || defaultValue
     * @param {GetPayload} context
     * @param {string} payload.dbName {String} 数据库名称
     * @param {string} payload.path {String} 存储路径
     * @param {any} payload.defaultValue {*} 取值失败的默认值
     * @param {boolean} payload.user {Boolean} 是否区分用户
     * @returns {any}
     */
    get({
      dbName = 'database',
      path = '',
      defaultValue = '',
      user = false,
    }: GetPayload): any {
      return dbGet({ dbName, path, defaultValue, user })
    },

    /**
     * @description 获取存储数据库对象
     * @param {DatabasePayload} context
     * @param {boolean} payload.user {Boolean} 是否区分用户
     * @return {any}
     */
    database({ user = false }: DatabasePayload): any {
      return getDatabase({
        user,
        defaultValue: '',
      })
    },

    /**
     * @description 清空存储数据库对象
     * @param {Object} payload.user {Boolean} 是否区分用户
     */
    databaseClear({ user = false }: DatabasePayload) {
      return getDatabase({
        user,
        validator: () => true,
        defaultValue: '',
      })
    },
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDBStore, import.meta.hot))
}
