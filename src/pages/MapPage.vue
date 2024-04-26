<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-19 16:05:05
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-24 09:40:58
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
import 'mars3d/dist/mars3d.css'
import * as mars3d from 'mars3d'

import 'mars3d-space'
import { watch, onMounted } from 'vue'
import { stores } from 'src/stores/index.js'
import { defaultMapSettings } from 'src/config/map/defaultMapSettings.js'

let map: any
const store = stores.viewer.useSceneStore()

watch(store.sceneSetting, (val) => {
  console.log(val)
  map && map.setOptions(val)
})

onMounted(() => {
  map = new mars3d.Map('mars3dContainer', defaultMapSettings)
})
</script>
<style lang="scss" scoped>
.mars3d-container {
  height: 100vh;
}
</style>
