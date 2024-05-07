<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-19 16:05:05
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-07 17:32:09
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
    createLegendPanel()
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

/**
 * @description: 添加wms站点图层
 * @return {*}
 */
const addSiteWmsLayer = () => {
  const siteLayer = new mars3d.layer.WmsLayer({
    url: 'http://localhost:8080/geoserver/wms',
    layers: 'tms:tms_site_grade',
    crs: mars3d.CRS.EPSG3857,
    parameters: {
      transparent: true,
      format: 'image/png',
    },
    getFeatureInfoParameters: {
      feature_count: 10,
    },
    popup: 'all',
    tileWidth: 1024,
    tileHeight: 1024,
  })
  map.addLayer(siteLayer)
}

/**
 * @description: 添加图例面板
 * @return {*}
 */
const createLegendPanel = async () => {
  // 创建一个 div 元素作为图例面板
  const legendPanel = document.createElement('div')
  legendPanel.id = 'legend-panel'
  legendPanel.style.position = 'absolute'
  legendPanel.style.top = '100px'
  legendPanel.style.right = '100px'
  legendPanel.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
  legendPanel.style.padding = '10px'
  legendPanel.style.borderRadius = '5px'
  legendPanel.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'

  const requestUrl =
    'http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=tms:tms_site_grade'
  fetch(requestUrl)
    .then((res) => {
      if (!res.ok) {
        throw new Error('加载图例失败')
      }
      return res.blob()
    })
    .then((blob) => {
      if (blob.type.startsWith('image')) {
        // 添加图片
        const img = document.createElement('img')
        img.src = URL.createObjectURL(blob)
        legendPanel.appendChild(img)
        document.body.appendChild(legendPanel)
      }
    })
}
</script>

<style lang="scss" scoped>
.mars3d-container {
  height: 100vh;
}
</style>
