/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-27 14:22:26
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-28 16:40:08
 * @Description  : db文件单元测试
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { describe, it, expect } from 'vitest'
import { pathInit, dbSet, dbGet, database } from '../../../../src/utils/db.js'
import * as db from '../../../../src/utils/db.js'
import * as webStorage from '../../../../src/utils/web-storage.js'

describe('数据库初始化', () => {
  it('数据库localStorage有正确的前缀', () => {
    const webStoragePrefix = import.meta.env.VITE_VUE_APP_PREFIX
    const key = `${webStoragePrefix || 'sjft-demo'}-${__APP_VERSION__}`
    const value = localStorage.getItem(key)
    expect(value).toBeDefined()
  })
})

describe('pathInit函数功能正确', () => {
  it('检查函数是否返回预期的路径,默认参数', () => {
    const result = pathInit({})
    expect(result).toBe('database.user.ghost-uuid')
  })

  it('检查函数是否返回预期的路径, 带参数 path and user = false', () => {
    const result = pathInit({ path: 'customPath', user: false })
    expect(result).toBe('database.public.customPath')
  })

  it('模拟数据库已有相应路径的数据', () => {
    // @ts-ignore
    db.data = {
      database: {
        user: {
          'existing-uuid': {
            someData: 'existingValue',
          },
        },
      },
    }
    webStorage.setLocalStorage('uuid', 'existing-uuid')

    const result = pathInit({})

    // 检查函数是否返回预期的路径
    expect(result).toBe('database.user.existing-uuid')

    // 检查数据库数据是否未被更改
    // @ts-ignore
    expect(db.data).toEqual({
      database: {
        user: {
          'existing-uuid': {
            someData: 'existingValue',
          },
        },
      },
    })
    webStorage.removeLocalStorage('uuid')
  })
})

describe('dbSet函数, dbGet函数功能正确', () => {
  it('dbSet和dbGet函数使用默认参数', () => {
    dbSet({})
    expect(dbGet({})).toBe('')
  })

  it('dbSet和dbGet函数使用默认参数使用数据库名称和存储路径,并且设置值', () => {
    dbSet({ dbName: 'testDb', path: 'cus', value: 'aaa' })
    expect(dbGet({ dbName: 'testDb', path: 'cus' })).toBe('aaa')
  })

  it('dbSet和dbGet函数使用默认参数使用数据库名称和存储路径，启用用户区分,并且设置值', () => {
    dbSet({ dbName: 'testDb', path: 'cus', user: true, value: 'aa1' })
    expect(dbGet({ dbName: 'testDb', path: 'cus', user: true })).toBe('aa1')
  })
})

describe('database函数功能正确', () => {
  it('database函数使用默认参数', () => {
    dbSet({})
    expect(database({})).toBe('')
  })
  it('database函数使用自定义路径', () => {
    dbSet({ dbName: 'a', path: 'b', user: true, value: 'test' })
    expect(database({ dbName: 'a', path: 'b', user: true })).toBe('test')
  })
  it('database函数使用验证函数,验证函数不通过是否使用默认值', () => {
    dbSet({ dbName: 'a', path: 'b', user: true, value: 'test' })
    expect(
      database({
        dbName: 'a',
        path: 'b',
        user: true,
        validator: (val: any) => val === 1,
        defaultValue: 1,
      })
    ).toBe(1)
  })
})
