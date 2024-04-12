/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-12 11:05:55
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-12 14:13:45
 * @Description  : HeaderUserSettings组件单元测试
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'
import { mount } from '@vue/test-utils'
import { describe, it, expect, vi, beforeEach } from 'vitest'
import { get } from 'lodash'
import HeaderUserSettings from '../../../../../src/layouts/components/HeaderUserSettings.vue'
import { createTestingPinia } from '@pinia/testing'
import setting from '../../../../../src/config/setting.js'
import { QMenu } from 'quasar'
import {
  themeClassic as classic,
  themeElement as element,
} from '../../../../../src/config/theme/index.js'
import { afterEach } from 'node:test'

installQuasarPlugin()
let wrapper

describe('HeaderUserSettings组件单元测试', () => {
  beforeEach(() => {
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
    wrapper = mount(HeaderUserSettings, {
      global: {
        plugins: [testPinia],
      },
    })
  })
  afterEach(() => {
    wrapper && wrapper.unmount
  })
  it('组件正确的进行了渲染', () => {
    expect(wrapper.find('[data-test="btn"]').exists()).to.be.true
    expect(wrapper.findComponent(QMenu).exists()).to.be.true
  })
})
