/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 16:27:19
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-28 17:46:31
 * @Description  : Storage封装
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { LocalStorage } from 'quasar'

const webStoragePrefix = import.meta.env.VITE_VUE_APP_PREFIX

export function setLocalStorage(key = 'default', value = '') {
  LocalStorage.set(`${webStoragePrefix}-${__APP_VERSION__}-${key}`, value)
}

export function getLocalStorage(key = 'default') {
  return LocalStorage.getItem(`${webStoragePrefix}-${__APP_VERSION__}-${key}`)
}

export function getAllLocalStorage() {
  LocalStorage.getAll()
}

export function removeLocalStorage(key = 'default') {
  LocalStorage.remove(`${webStoragePrefix}-${__APP_VERSION__}-${key}`)
}
