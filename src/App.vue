<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-19 10:44:36
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-13 09:58:34
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

.mars3d-popup-background {
  background: var(--q-primary) !important;
}
.site-panel {
  width: 300px;
  position: absolute;
  left: 16px;
  color: white;
  bottom: 31px;
  cursor: default;
  border-radius: 4px;
  opacity: 0.96;
  // border: 1px solid #14171c;
  background: var(--q-primary) !important;
  box-shadow: 0px 2px 21px 0px rgba(33, 34, 39, 0.55);
  border-radius: 4px;
  box-sizing: border-box;
  background: linear-gradient(0deg, #1e202a 0%, #0d1013 100%);
}
.animation-spaceInDown {
  animation-duration: 1s;
  animation-fill-mode: both;
  animation-name: spaceInDown;
}
.site-panel::before {
  content: '';
  width: calc(100% + 22px);
  height: 39px;
  position: absolute;
  bottom: -39px;
  left: -22px;
  background: url('assets/img/map/popup-lbl.png') 0px 0px no-repeat;
  background-position: 0px 0px;
}
</style>
