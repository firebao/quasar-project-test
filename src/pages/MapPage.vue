<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-19 16:05:05
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-09 11:46:44
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
import { useTheme } from 'src/hooks/useTheme.js'

let map: any
const store = stores.viewer.useSceneStore()
const { theme, activeName } = useTheme()

watch(store.sceneSetting, (val) => {
  map && map.setOptions(val)
})

watch(activeName, () => {
  destroyLegendPanel()
  createLegendPanel()
})

onMounted(() => {
  map = new mars3d.Map('mars3dContainer', defaultMapSettings)
  map.on(mars3d.EventType.load, () => {
    console.log('地图加载完成')
    // 开始入场动画
    startAnimation()
    // 添加Legend控件
    createLegendBtn()
    createLegendPanel()
  })
})

/**
 * @description: 地图入场动画,效果为地球旋转并将视角转移到预设位置，然后添加反选遮罩和图层
 * @return {*}
 */
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
        opacity: 0.6,
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
    subdomains: ['a', 'b', 'c'],
    layers: 'tms:tms_fiber_grade,tms:tms_site_grade',
    crs: mars3d.CRS.EPSG3857,
    parameters: {
      transparent: true,
      format: 'image/png',
      version: '1.1.1',
    },
    featureIndex: 'end',
    getFeatureInfoParameters: {
      feature_count: 10,
    },
    popup: 'all',
    tileWidth: 256,
    tileHeight: 256,
  })
  map.addLayer(siteLayer)
}

/**
 * @description: 添加图例面板
 * @return {*}
 */
const createLegendBtn = async () => {
  const ToolButtonContainer = document.getElementsByClassName(
    'cesium-viewer-toolbar'
  )[0]
  if (!ToolButtonContainer) {
    throw new Error('cesium-viewer-toolbar容器不存才')
  }
  const legendButton = new mars3d.control.ToolButton({
    id: 'legendButton',
    icon: 'fa fa-clipboard',
    className: 'legend-button',
    parentContainer: ToolButtonContainer as HTMLElement,
    click: () => {
      const btn = document.getElementById('legendButton')
      const panel = document.getElementById('legendPanel')
      if (!btn || !panel) return
      if (btn.classList.contains('active')) {
        btn.classList.remove('active')
        panel.style.display = 'none'
      } else {
        btn.classList.add('active')
        panel.style.display = 'flex'
      }
    },
  })
  map.addControl(legendButton)
}

/**
 * @description: 创建图例面板
 * @return {*}
 */
const createLegendPanel = () => {
  const legendPanel = document.createElement('div')
  legendPanel.id = 'legendPanel'
  legendPanel.style.position = 'absolute'
  legendPanel.style.top = '120px'
  legendPanel.style.right = '1535px'
  legendPanel.style.width = '300px'
  legendPanel.style.backgroundColor = theme.value.global
    .themeQCardColor as string
  legendPanel.style.padding = '10px'
  legendPanel.style.borderRadius = '5px'
  legendPanel.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)'
  legendPanel.style.border = '1px solid #ffffff33'
  legendPanel.style.display = 'none'
  legendPanel.style.alignItems = 'flex-start'
  legendPanel.style.justifyContent = 'space-around'
  const legendTitle = document.createElement('div')

  const requestUrls = [
    `http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=tms:tms_site_grade&LEGEND_OPTIONS=bgColor:${theme.value.global.themeQCardColor?.replace(
      /^#/,
      '0x'
    )};fontColor:0xffffff`,
    `http://localhost:8080/geoserver/wms?REQUEST=GetLegendGraphic&VERSION=1.0.0&FORMAT=image/png&WIDTH=20&HEIGHT=20&LAYER=tms:tms_fiber_grade&LEGEND_OPTIONS=bgColor:${theme.value.global.themeQCardColor?.replace(
      /^#/,
      '0x'
    )};fontColor:0xffffff`,
  ]
  const requests = requestUrls.map((url) => fetch(url))
  document.body.appendChild(legendPanel)
  Promise.allSettled(requests).then((responses) => {
    responses.forEach((res) => {
      if (res.status === 'fulfilled') {
        res.value.blob().then((blob) => {
          if (blob.type.startsWith('image')) {
            const img = document.createElement('img')
            img.src = URL.createObjectURL(blob)
            legendPanel.appendChild(img)
          }
        })
      }
    })
  })
}

/**
 * @description: 销毁图例面板
 * @return {*}
 */
const destroyLegendPanel = () => {
  const btn = document.getElementById('legendButton')
  if (btn && btn.classList.contains('active')) {
    btn.classList.remove('active')
  }
  const panel = document.getElementById('legendPanel')
  panel && panel.parentNode?.removeChild(panel)
}
</script>

<style lang="scss" scoped>
.mars3d-container {
  height: 100vh;
}
</style>
