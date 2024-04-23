/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 16:17:06
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-18 16:02:51
 * @Description  : 地图view设置
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import { Pinia } from 'pinia'
import { useSceneStore } from './scene.js'
import { useLayerStore } from './layer.js'
import { useOverlayStore } from './overlay.js'
import { useRenderStore } from './render.js'

// 组件内使用不需要传pinia，组件外使用需要传pinia
export const viewerStore = {
  useSceneStore: (pinia?: Pinia) => useSceneStore(pinia),
  // useLayerStore: (pinia?: Pinia) => useLayerStore(pinia),
  // useOverlayStore: (pinia?: Pinia) => useOverlayStore(pinia),
  // useRenderStore: (pinia?: Pinia) => useRenderStore(pinia),
}
