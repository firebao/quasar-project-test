<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-19 16:05:05
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-11 15:57:45
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-page no-padding>
    <div id="mars3dContainer" class="mars3d-container"></div>
  </q-page>
  <site-fiber-filter-modal
    v-model="uniquenessPanel.siteAndFiberFilterPanel"
    class="filter-wrapper"
    @cql-change="handleCqlChange"
  />
</template>

<script setup lang="ts">
import 'mars3d-cesium/Build/Cesium/Widgets/widgets.css'
import 'mars3d/dist/mars3d.css'
import * as mars3d from 'mars3d'
import 'mars3d-space'
import SiteFiberFilterModal from 'src/components/SiteFiberFilterModal.vue'
import { watch, onMounted, ref } from 'vue'
import { stores } from 'src/stores/index.js'
import { defaultMapSettings } from 'src/config/map/defaultMapSettings.js'
import ChinaGeoJson from 'src/assets/data/geojson/gansu.json'
import { Cesium } from 'mars3d'
import { useTheme } from 'src/hooks/useTheme.js'
import { usePanel } from 'src/hooks/usePanel.js'
import {
  sitePanelTemplate,
  sitePanelContent,
} from 'src/utils/template-render.js'

let map: any
const store = stores.viewer.useSceneStore()
const { theme, activeName } = useTheme()
const { uniquenessPanel, setFilterStatus } = usePanel()
let siteLayer: any, fiberLayer: any
const siteLayerOptions = {
  url: 'http://localhost:8080/geoserver/tms/wms',
  subdomains: ['a', 'b', 'c'],
  layers: 'tms:tms_site',
  crs: mars3d.CRS.EPSG3857,

  parameters: {
    transparent: true,
    format: 'image/png',
    version: '1.1.1',
    cql_filter: '',
    time: new Date().getTime(),
  },
  featureIndex: 0,
  rectangle: {
    xmin: 92.16090393066406,
    xmax: 108.64656829833984,
    ymin: 32.63811111450195,
    ymax: 43.21143341064453,
  },
  getFeatureInfoParameters: {
    feature_count: 10,
  },
  zIndex: 2,
  // popup: 'all',
  tileWidth: 256,
  tileHeight: 256,
}

const fiberLayerOptions = {
  url: 'http://localhost:8080/geoserver/tms/wms',
  subdomains: ['a', 'b', 'c'],
  layers: 'tms:tms_fiber_grade',
  crs: mars3d.CRS.EPSG3857,
  parameters: {
    transparent: true,
    format: 'image/png',
    version: '1.1.1',
    cql_filter: '',
    time: new Date().getTime(),
  },
  zIndex: 1,
  getFeatureInfoParameters: {
    feature_count: 10,
  },
  popup: 'all',
  tileWidth: 256,
  tileHeight: 256,
}

watch(store.sceneSetting, (val) => {
  map && map.setOptions(val)
})

/**
 * @description: 这里追踪activeName是要重新渲染legendPanel，不然主题改变，legendPanel不会改变
 * @return {*}
 */
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
    createFilterBtn()
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
      addFiberWmsLayer()
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
  siteLayer && map.removeLayer(siteLayer)
  siteLayer = new mars3d.layer.WmsLayer(siteLayerOptions)
  map.addLayer(siteLayer)
  siteLayer.bindPopup(sitePanelContent, sitePanelTemplate)
  siteLayer.on(mars3d.EventType.popupOpen, (event: any) => {
    const container = event.container
    console.log('图层上打开了popup', container)
  })
  siteLayer.on(mars3d.EventType.popupClose, (event: any) => {
    const container = event.container
    console.log('图层上移除了popup', container)
  })
}

/**
 * @description: 添加wms线路图层
 * @return {*}
 */
const addFiberWmsLayer = () => {
  fiberLayer && map.removeLayer(fiberLayer)
  fiberLayer = new mars3d.layer.WmsLayer(fiberLayerOptions)
  map.addLayer(fiberLayer)
}

/**
 * @description: 添加图例按钮
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
 * @description: 添加筛选按钮
 * @return {*}
 */
const createFilterBtn = async () => {
  const ToolButtonContainer = document.getElementsByClassName(
    'cesium-viewer-toolbar'
  )[0]
  if (!ToolButtonContainer) {
    throw new Error('cesium-viewer-toolbar容器不存才')
  }
  const filterButton = new mars3d.control.ToolButton({
    id: 'filterButton',
    icon: 'fa fa-filter',
    className: 'filter-button',
    parentContainer: ToolButtonContainer as HTMLElement,
    click: () => {
      const btn = document.getElementById('filterButton')
      // const panel = document.getElementById('legendPanel')
      //TODO: vue组件
      if (!btn) return
      if (btn.classList.contains('active')) {
        btn.classList.remove('active')
        setFilterStatus(false)
      } else {
        btn.classList.add('active')
        setFilterStatus(true)
      }
    },
  })
  map.addControl(filterButton)
}

/**
 * @description: 创建图例面板
 * @return {*}
 */
const createLegendPanel = () => {
  let legendPanel: any
  legendPanel = document.getElementById('legendPanel')
  if (legendPanel) return
  legendPanel = document.createElement('div')
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

/**
 * @description: 站点cql筛选条件变动
 * @return {*}
 */
const handleCqlChange = (val: any) => {
  if (!siteLayer || !fiberLayer) return
  siteLayerOptions.parameters.cql_filter = val.siteCqlStr
  siteLayerOptions.parameters.time = new Date().getTime()
  siteLayer.remove(true)
  addSiteWmsLayer()
  // siteLayer = new mars3d.layer.WmsLayer(siteLayerOptions)
  // map.addLayer(siteLayer)

  fiberLayerOptions.parameters.cql_filter = val.fiberCqlStr
  fiberLayerOptions.parameters.time = new Date().getTime()
  fiberLayer.remove(true)
  addFiberWmsLayer()
  // fiberLayer = new mars3d.layer.WmsLayer(fiberLayerOptions)
  // map.addLayer(fiberLayer)
}
</script>

<style lang="scss" scoped>
.mars3d-container {
  height: 100vh;
}
</style>
