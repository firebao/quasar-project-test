/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 16:27:19
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-29 13:47:37
 * @Description  : lowdb本地JSON数据库
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */

import { LowSync } from 'lowdb'
import { LocalStorage } from 'lowdb/browser'
import * as webStorage from './web-storage.js'
import { cloneDeep, get, set } from 'lodash'
import {
  DatabasePayload,
  DatabaseStructure,
  GetPayload,
  PathInitPayload,
  SetPayload,
} from 'src/types/db.js'
const webStoragePrefix = import.meta.env.VITE_VUE_APP_PREFIX
const adapter: LocalStorage<DatabaseStructure> = new LocalStorage(
  `${webStoragePrefix || 'sjft-demo'}-${__APP_VERSION__}`
)
const defaultData: DatabaseStructure = {
  sys: {},
  database: {},
}
const db = new LowSync<DatabaseStructure>(adapter, defaultData)

export default db

/**
 * @description 检查路径是否存在 不存在的话初始化
 * @param {PathInitPayload} payload
 * @param {string} payload.dbName 数据库名称
 * @param {string} payload.path 路径
 * @param {boolean} payload.user 区分用户
 * @param {Function} payload.validator 数据校验钩子 返回 true 表示验证通过
 * @param {any} payload.defaultValue 初始化默认值
 * @returns {string} 可以直接使用的路径
 */
export const pathInit = ({
  dbName = 'database',
  path = '',
  user = true,
  validator = (value: any) => true,
  defaultValue = '',
}: PathInitPayload): string => {
  const uuid = webStorage.getLocalStorage('uuid') || 'ghost-uuid'
  const currentPath = `${dbName}.${user ? `user.${uuid}` : 'public'}${
    path ? `.${path}` : ''
  }`

  const data = db.data
  const value = get(data, currentPath)
  if (!(value !== undefined && validator(value))) {
    db.data = set(db.data, currentPath, defaultValue)
    db.write()
  }
  return currentPath
}

/**
 * @description 将数据存储到指定位置 | 路径不存在会自动初始化
 * @description 效果类似于取值 dbName.path = value
 * @param {SetPayload} payload
 * @param {string} payload.dbName 数据库名称
 * @param {string} payload.path 存储路径
 * @param {any} payload.value 需要存储的值
 * @param {boolean} payload.user 是否区分用户
 */
export const dbSet = ({
  dbName = 'database',
  path = '',
  value = '',
  user = false,
}: SetPayload): void => {
  const combinePath: string = pathInit({ dbName, path, user })
  db.data = set(db.data, combinePath, value)
  db.write()
}

/**
 * @description 获取数据
 * @description 效果类似于取值 dbName.path || defaultValue
 * @param {GetPayload} payload
 * @param {string} payload.dbName 数据库名称
 * @param {string} payload.path 存储路径
 * @param {any} payload.defaultValue 取值失败的默认值
 * @param {boolean} payload.user 是否区分用户
 * @returns {any}
 */
export const dbGet = ({
  dbName = 'database',
  path = '',
  defaultValue = '',
  user = false,
}: GetPayload): any => {
  const combinePath = pathInit({ dbName, path, user, defaultValue })
  const data = db.data
  const value = get(data, combinePath)
  return cloneDeep(value)
}

/**
 * @description 获取存储数据库对象
 * @param {DatabasePayload} payload
 * @param {string} payload.dbName {String} 数据库名称
 * @param {string} payload.path {String} 存储路径
 * @param {any} payload.defaultValue {*} 取值失败的默认值
 * @param {Function} payload.validator 数据校验钩子 返回 true 表示验证通过
 * @param {Object} payload user {Boolean} 是否区分用户
 */
export const database = ({
  dbName = 'database',
  path = '',
  user = false,
  validator = () => true,
  defaultValue = '',
}: DatabasePayload) => {
  const combinePath = pathInit({ dbName, path, user, validator, defaultValue })
  const data = db.data
  const value = get(data, combinePath)
  return value
}
