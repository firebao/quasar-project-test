<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-19 16:05:05
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-20 16:41:42
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-page no-padding>
    <!-- content -->
    <div id="mars3dContainer" class="mars3d-container"></div>
  </q-page>
</template>

<script setup lang="ts">
import 'mars3d-cesium/Build/Cesium/Widgets/widgets.css'
// import * as Cesium from 'mars3d-cesium'

//导入mars3d主库
import 'mars3d/dist/mars3d.css'
import * as mars3d from 'mars3d'

//导入mars3d插件（按需使用，需要先npm install）
import 'mars3d-space'
import { onMounted } from 'vue'

const mapOptions = {
  basemaps: [{ name: '天地图', type: 'tdt', layer: 'img_d', show: true }],
}
onMounted(() => {
  const map = new mars3d.Map('mars3dContainer', mapOptions)
  console.log('map对象', map)
})
</script>
