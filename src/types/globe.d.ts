import { HomeButton } from 'mars3d-cesium'

/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-18 09:29:26
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-24 17:12:43
 * @Description  : 地图Globe设置类型
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
export interface GlobeSetting {
  // 是否显示地球
  show: boolean
  // 地球背景色，CSS颜色值
  baseColor: string
  // 是否启用深度监测，可以开启来测试矢量对象是否在地形下面或者背遮挡
  depthTestAgainstTerrain: boolean
  // 是否在地球上绘制地面大气
  showGroundAtmosphere: boolean
  // 是否显示晨昏线，可以看到地球的昼夜区域
  enableLighting: boolean
  // 地形图块的魂村的大小，标识为图块数。任何其他只要不需要渲染，就会释放超出此数目的图块的这个框架，较大的数字将消耗更多的内存，但显示细节更快
  tileCacheSize: number
  // 在测量高度和下册提示的高度信息中是否将地形夸张倍率的值转换为实际真实高度值
  realAlt: boolean
}

export interface TerrainSetting {
  // 地形类型
  type: string
  // 地形服务地址
  url: string
  // 是否启用显示地形
  show: boolean
  // 是否应该从服务器请求额外的光照信息，如果可用，以每个顶点法线的形式
  requestVertexNormals: boolean
  // 是否应该向服务器请求每个瓦的水掩膜(如果有的话)
  requestWaterMask: boolean
  // 是否应该从服务器请求每个块元数据(如果可用)
  requestMetadata: boolean
  // 是否默认启用地形开挖，如果后续打开，缓存数据不会裁剪
  clip: boolean
  // 是否默认启用地形压平
  flat: boolean
  // 是否默认启用地形抬升
  uplift: boolean
  // 是否默认启用地形区域材质(淹没，等高线)
  flood: boolean
}

export interface ControlSetting {
  homeButton: boolean
  zoom: boolean
  sceneModePicker: boolean
  projectionPicker: boolean
  fullscreenButton: boolean
  vrButton: boolean
  geocoder: boolean
  navigationHelpButton: boolean
  navigationInstructionsInitiallyVisible: boolean
  baseLayerPicker: boolean
  compass: boolean
  locationBar: boolean
  distanceLegend: boolean
  clockAnimate: boolean
  animation: boolean
  timeline: boolean
  overViewMap: boolean
  mapSplit: boolean
  keyboardRoam: boolean
  mouseDownView: boolean
  infoBox: boolean
  selectionIndicator: boolean
  showRenderLoopErrors: boolean
  contextmenu: boolean
  popup: boolean
  tooltip: boolean
}

interface HomeButtonOptions {
  title?: string
  icon?: string
  id?: string | number
  enabled?: boolean
  parentContainer?: HTMLElement
  insertIndex?: number
  insertBefore?: HTMLElement | string
}
