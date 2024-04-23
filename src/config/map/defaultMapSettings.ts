/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-18 09:39:33
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-23 17:14:37
 * @Description  : 默认的地球设置
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
export const defaultMapSettings = {
  scene: {
    globe: {
      show: true,
      baseColor: '#546a53',
      depthTestAgainstTerrain: false,
      showGroundAtmosphere: true,
      enableLighting: false,
      tileCacheSize: 100,
      realAlt: false,
    },
  },
  terrain: {
    type: 'xyz',
    url: 'http://localhost:18080/',
    show: false,
    requestVertexNormals: false,
    requestWaterMask: false,
    requestMetadata: false,
    clip: false,
    flat: false,
    uplift: false,
    flood: false,
  },
}
