/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-07 17:43:29
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-12 16:53:01
 * @Description  : HeaderSettings组件测试
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'
import { mount } from '@vue/test-utils'
import { describe, expect, it, beforeEach, afterEach, vi } from 'vitest'
import HeaderSettings from '../../../../../src/layouts/components/HeaderSettings.vue'
import { createTestingPinia } from '@pinia/testing'
import { get } from 'lodash'
import setting from '../../../../../src/config/setting.js'
import {
  themeClassic as classic,
  themeElement as element,
} from '../../../../../src/config/theme/index.js'

installQuasarPlugin()

describe('HeaderSettings组件单元测试', () => {
  let wrapper: any

  beforeEach(async () => {
    const testPinia = createTestingPinia({
      initialState: {
        list: get(setting, 'theme.list', []),
        activeName: get(setting, 'theme.list[0].name', 'classic'),
        oldTheme: '',
        themeConfig: {
          classic,
          element,
        },
      },
      createSpy(fn) {
        return vi.fn()
      },
    })
    wrapper = mount(HeaderSettings, {
      global: {
        plugins: [testPinia],
      },
    })
  })

  afterEach(() => {
    wrapper && wrapper.unmount()
  })

  it('组件正确的进行了渲染', () => {
    expect(wrapper.exists()).toBe(true)
  })
  it('主题管理弹窗点击正常显示', async () => {
    let dropdown = wrapper.findComponent('[data-test="dropdown"]')
    await dropdown.trigger('click')
    await wrapper.findComponent('[data-test="theme"]').trigger('click')
    expect(wrapper.vm.isThemeDialogShow).toBe(true)
  })
  it('日志管理弹窗点击正常显示', async () => {
    let dropdown = wrapper.findComponent('[data-test="dropdown"]')
    await dropdown.trigger('click')
    await wrapper.findComponent('[data-test="log"]').trigger('click')
    expect(wrapper.vm.isLogDialogShow).toBe(true)
  })
  it('图层管理弹唱点击正常显示', async () => {
    let dropdown = wrapper.findComponent('[data-test="dropdown"]')
    await dropdown.trigger('click')
    await wrapper.findComponent('[data-test="layer"]').trigger('click')
    expect(wrapper.vm.isLayerDialogShow).toBe(true)
  })
})
