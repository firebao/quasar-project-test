/*
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-18 09:39:33
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-08 11:20:52
 * @Description  : 默认的地球设置
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
 */
import TdtIcon from 'src/assets/img/basemaps-icon/tdt_img.png'
import OfflineIcon from 'src/assets/img/basemaps-icon/offline_img.png'
import SingleIcon from 'src/assets/img/basemaps-icon/single_img.png'
export const defaultMapSettings = {
  basemaps: [
    {
      name: '天地图影像',
      icon: TdtIcon,
      type: 'tdt',
      layer: 'img_d',
      show: true,
    },
    {
      name: '离线地图',
      icon: OfflineIcon,
      type: 'xyz',
      url: '//data.mars3d.cn/tile/img/{z}/{x}/{y}.jpg',
      minimumLevel: 0,
      maximumLevel: 13,
    },
    {
      name: '单张图片',
      icon: SingleIcon,
      type: 'image',
      url: '//data.mars3d.cn/file/img/world/world.jpg',
    },
  ],
  scene: {
    center: {
      lat: 37.720758,
      lng: 100.706864,
      alt: 2388704.7,
      heading: 355.9,
      pitch: -89.7,
    },
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
    show: true,
    requestVertexNormals: false,
    requestWaterMask: false,
    requestMetadata: true,
    clip: false,
    flat: false,
    uplift: false,
    flood: false,
  },
  control: {
    homeButton: true,
    zoom: true,
    sceneModePicker: true,
    projectionPicker: true,
    fullscreenButton: true,
    vrButton: false,
    geocoder: true,
    navigationHelpButton: true,
    navigationInstructionsInitiallyVisible: false,
    baseLayerPicker: true,
    compass: {
      top: '70px',
      right: '10px',
    },
    locationBar: true,
    distanceLegend: true,
    clockAnimate: true,
    animation: true,
    timeline: true,
    overViewMap: false,
    mapSplit: false,
    keyboardRoam: true,
    mouseDownView: true,
    infoBox: true,
    selectionIndicator: true,
    showRenderLoopErrors: true,
    contextmenu: true,
    popup: true,
    tooltip: true,
  },
}
