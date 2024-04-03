/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-28 16:44:38
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-29 09:18:28
 * @Description  : web-storage.ts文件单元测试
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { describe, it, vi, expect } from 'vitest'
import {
  setLocalStorage,
  getLocalStorage,
  getAllLocalStorage,
  removeLocalStorage,
} from '../../../../src/utils/web-storage.js'
import { LocalStorage } from 'quasar'

vi.mock('quasar', () => ({
  LocalStorage: {
    set: vi.fn(),
    getItem: vi.fn(),
    getAll: vi.fn(),
    remove: vi.fn(),
  },
}))

describe('测试web-storage函数库内Storage封装正常调用', () => {
  it('setLocalStorage function', () => {
    setLocalStorage('testKey', 'testValue')
    expect(LocalStorage.set).toHaveBeenCalledWith(
      'sjft-tms-0.0.1-testKey',
      'testValue'
    )
  })

  it('getLocalStorage function', () => {
    //@ts-ignore
    LocalStorage.getItem.mockReturnValueOnce('testValue')
    const result = getLocalStorage('testKey')
    expect(result).toBe('testValue')
    expect(LocalStorage.getItem).toHaveBeenCalledWith('sjft-tms-0.0.1-testKey')
  })

  it('getAllLocalStorage function', () => {
    getAllLocalStorage()
    expect(LocalStorage.getAll).toHaveBeenCalled()
  })

  it('removeLocalStorage function', () => {
    removeLocalStorage('testKey')
    expect(LocalStorage.remove).toHaveBeenCalledWith('sjft-tms-0.0.1-testKey')
  })
})
