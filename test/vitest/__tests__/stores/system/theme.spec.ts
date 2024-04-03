/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-29 09:25:37
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-29 11:50:19
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { describe, expect, it, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useDBStore } from '../../../../../src/stores/system/db.js'
import db, * as DbUtil from '../../../../../src/utils/db.js'

vi.mock('../../../../../src/utils/db.js', () => ({
  dbSet: vi.fn(),
  dbGet: vi.fn(),
  database: vi.fn(),
}))

describe('useDbStore 测试', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('set action 测试', () => {
    const db = useDBStore()
    db.set({})
    expect(DbUtil.dbSet).toHaveBeenCalledWith({
      dbName: 'database',
      path: '',
      value: '',
      user: false,
    })
    db.set({ dbName: 'a', path: 'b', value: 'c', user: true })
    expect(DbUtil.dbSet).toHaveBeenCalledWith({
      dbName: 'a',
      path: 'b',
      value: 'c',
      user: true,
    })
  })

  it('get action 测试', () => {
    const db = useDBStore()
    db.get({})
    expect(DbUtil.dbGet).toHaveBeenCalledWith({
      dbName: 'database',
      path: '',
      defaultValue: '',
      user: false,
    })
    db.get({ dbName: 'a', path: 'b', defaultValue: 'c', user: true })
    expect(DbUtil.dbGet).toHaveBeenCalledWith({
      dbName: 'a',
      path: 'b',
      defaultValue: 'c',
      user: true,
    })
  })

  it('database action 测试', () => {
    const db = useDBStore()
    db.database({})
    expect(DbUtil.database).toHaveBeenCalledWith({
      user: false,
      defaultValue: '',
    })

    db.database({ user: true, value: 1, defaultValue: 'a' })
    expect(DbUtil.database).toHaveBeenCalledWith({
      user: true,
      defaultValue: '',
    })
  })

  it('databaseClear action 测试', () => {
    const db = useDBStore()
    db.databaseClear({})
    expect(DbUtil.database).toHaveBeenCalledWith({
      user: false,
      validator: expect.any(Function),
      defaultValue: '',
    })
  })
})
