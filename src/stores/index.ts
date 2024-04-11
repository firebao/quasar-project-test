/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-19 10:44:36
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-07 10:43:45
 * @Description  : 项目全局Store
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { createPinia } from 'pinia'
import { systemStore } from './system/index.js'
import { viewerStore } from './viewer/index.js'
import { store } from 'quasar/wrappers'
import { Router } from 'vue-router'

/**
 * When adding new properties to stores, you should also
 * extend the `PiniaCustomProperties` interface.
 * @see https://pinia.vuejs.org/core-concepts/plugins.html#typing-new-store-properties
 */
declare module 'pinia' {
  export interface PiniaCustomProperties {
    readonly router: Router
  }
}

// export const pinia = createPinia()
export default store((/* { ssrContext } */) => {
  const pinia = createPinia()
  // You can add Pinia plugins here
  // pinia.use(SomePiniaPlugin)

  return pinia
})

/** 组件内使用不需要传pinia，组件外使用需要传pinia */
export const stores = {
  system: {
    ...systemStore,
  },
  //   viewer: {
  //     ...viewerStore,
  //   },
}
