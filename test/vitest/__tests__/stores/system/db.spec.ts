/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-29 09:25:37
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-01 17:08:51
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { describe, expect, it, vi, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useThemeStore } from '../../../../../src/stores/system/theme.js'
import setting from '../../../../../src/config/setting.js'
import {
  themeClassic as classic,
  themeElement as element,
} from '../../../../../src/config/theme/index.js'
import { get } from 'lodash'

vi.mock('../../../../../src/utils/db.js', () => ({
  dbSet: vi.fn(),
  dbGet: vi.fn(),
  database: vi.fn(),
}))
const activeName = get(setting, 'theme.list[0].name')

describe('useDbStore 测试', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('切换主题是应该正确更新样式', () => {
    const themeStore = useThemeStore()
    themeStore.dom()
    expect(document.body.className).toContain(`theme-${activeName}`)
    expect(
      window.getComputedStyle(document.body).getPropertyValue('--themeColor')
    ).toBe(classic.global.themeColor)
  })

  it('set action 测试', () => {
    const themeStore = useThemeStore()
    themeStore.set('unknown')
    expect(themeStore.activeName).toBe(`${activeName}`)
    expect(document.body.className).toContain(`theme-${activeName}`)
    expect(
      window.getComputedStyle(document.body).getPropertyValue('--themeColor')
    ).toBe(classic.global.themeColor)

    const themeNew = get(setting, 'theme.list[1].name')
    themeStore.set(themeNew)
    expect(themeStore.activeName).toBe(themeNew)
    expect(document.body.className).toContain(`theme-${themeNew}`)
    expect(
      window.getComputedStyle(document.body).getPropertyValue('--themeColor')
    ).toBe(element.global.themeColor)
  })

  it('load action 测试', () => {
    const themeStore = useThemeStore()
    themeStore.load()
    expect(themeStore.activeName).toBe(`${activeName}`)
  })
})
