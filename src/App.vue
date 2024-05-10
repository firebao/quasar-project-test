<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-19 10:44:36
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-09 14:11:09
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <router-view />
</template>

<script setup lang="ts">
import { useTheme } from 'src/hooks/useTheme.js'
import { setCssVar } from 'quasar'

const { theme } = useTheme()
setCssVar('primary', theme.value.global.themeColor as string)
</script>

<style lang="scss">
:root {
  --q-primary: v-bind('theme.global.themeColor') !important;
}
// 更改cesium-viewer-toolbar的初始位置
.cesium-viewer-toolbar {
  display: flex !important;
  flex-direction: row !important;
  align-items: center !important;
  top: 75px !important;
  left: 6px !important;
}
.cesium-baseLayerPicker-dropDown {
  top: 50px !important;
  left: 6px !important;
}
.cesium-button {
  background: var(--q-primary) !important;
  border: 1px rgba(255, 255, 255, 0.3) solid !important;
  border-radius: 5px !important;
}
.legend-button,
.filter-button {
  display: grid !important;
  align-items: center;
  justify-content: center;
  i {
    font-size: 20px;
  }
  &.active {
    box-shadow: 0 0 8px #fff, 0 0 8px #fff;
  }
}
.cesium-navigation-help-button {
  i {
    font-size: 20px;
  }
}
</style>
