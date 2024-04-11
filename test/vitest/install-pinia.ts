/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-07 11:05:47
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-07 11:06:01
 * @Description  : Mocking Pinia
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { config } from '@vue/test-utils'
import { cloneDeep } from 'lodash-es'
import { beforeAll, afterAll } from 'vitest'
import { createTestingPinia, TestingOptions } from '@pinia/testing'
import { Plugin } from 'vue'

export function installPinia(options?: Partial<TestingOptions>) {
  const globalConfigBackup = cloneDeep(config.global)

  beforeAll(() => {
    config.global.plugins.unshift(
      // This is needed because typescript will complain othwerwise
      // Probably due to this being a monorepo as this same setup inside a test project did work correctly
      createTestingPinia(options) as unknown as Plugin
    )
  })

  afterAll(() => {
    config.global = globalConfigBackup
  })
}
