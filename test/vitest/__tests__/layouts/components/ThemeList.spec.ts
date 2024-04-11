/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-01 17:13:38
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-11 18:56:58
 * @Description  : ThemeList组件单元测试
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { installQuasarPlugin } from '@quasar/quasar-app-extension-testing-unit-vitest'
import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ThemeList from '../../../../../src/layouts/components/ThemeList.vue'
import { createTestingPinia } from '@pinia/testing'
import { get } from 'lodash'
import setting from '../../../../../src/config/setting.js'
import { stores } from '../../../../../src/stores/index.js'
import {
  themeClassic as classic,
  themeElement as element,
} from '../../../../../src/config/theme/index.js'

installQuasarPlugin()

describe('ThemeList组件单元测试', () => {
  it('组件正确的进行了渲染', async () => {
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
    const wrapper = mount(ThemeList, {
      global: {
        plugins: [testPinia],
      },
    })
    expect(wrapper.find('[data-test="table"]').exists()).to.be.true
    expect(wrapper.findAll('[data-test="row"]')).toHaveLength(2)
    expect(wrapper.findAll('[data-test="active"]')).toHaveLength(1)
    const btn = wrapper.findAll('[data-test="inactive"]')[0]
    await btn.trigger('click')
    expect(stores.system.useThemeStore(testPinia).set).toHaveBeenCalled()
  })
})
