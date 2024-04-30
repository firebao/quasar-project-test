<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-19 16:05:05
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-30 16:41:26
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-page no-padding>
    <div id="mars3dContainer" class="mars3d-container"></div>
  </q-page>
</template>

<script setup lang="ts">
import 'mars3d-cesium/Build/Cesium/Widgets/widgets.css'
import 'mars3d/dist/mars3d.css'
import * as mars3d from 'mars3d'

import 'mars3d-space'
import { watch, onMounted } from 'vue'
import { stores } from 'src/stores/index.js'
import { defaultMapSettings } from 'src/config/map/defaultMapSettings.js'
import ChinaGeoJson from 'src/assets/data/geojson/gansu.json'
import { Cesium } from 'mars3d'

let map: any
const store = stores.viewer.useSceneStore()

watch(store.sceneSetting, (val) => {
  console.log(val)
  map && map.setOptions(val)
})

onMounted(() => {
  map = new mars3d.Map('mars3dContainer', defaultMapSettings)
  map.on(mars3d.EventType.load, () => {
    console.log('地图加载完成')
    startAnimation()
  })
})

const startAnimation = () => {
  map.flyHome()
  map.openFlyAnimation({
    callback: () => {
      addGansuJsonLayer()
      addSiteWmsLayer()
    },
  })
}
/**
 * @description: 添加甘肃省行政区域的反选遮罩
 * @return {void}
 */
const addGansuJsonLayer = () => {
  const gansuGeoJsonLayer = new mars3d.layer.GeoJsonLayer({
    data: ChinaGeoJson,
    mask: true,
    symbol: {
      styleOptions: {
        fill: true,
        color: 'rgb(2,26,79)',
        opacity: 0.9,
        outline: true,
        outlineColor: '#39E09B',
        outlineWidth: 4,
        outlineOpacity: 0.8,
        arcType: Cesium.ArcType.GEODESIC,
        clampToGround: true,
      },
    },
  })
  map.addLayer(gansuGeoJsonLayer)
}

const addSiteWmsLayer = () => {
  const siteLayer = new mars3d.layer.WmsLayer({
    url: 'http://localhost:8080/geoserver/wms',
    layers: 'tms:site',
    parameters: {
      transparent: true,
      format: 'image/png',
    },
    getFeatureInfoParameters: {
      feature_count: 10,
    },
    popup: 'all',
  })
  map.addLayer(siteLayer)
}
</script>
<style lang="scss" scoped>
.mars3d-container {
  height: 100vh;
}
</style>
