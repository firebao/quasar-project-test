<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-21 11:48:34
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-08 16:17:53
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <div
    class="main-header-wrapper"
    :class="{
      'theme-classic': activeName === 'classic',
      'theme-element': activeName === 'element',
    }"
  >
    <div class="row">
      <!-- 左侧LOGO和标题 -->
      <div class="col-4 log-and-title">
        <div class="row items-center left-row">
          <div class="col-4 log">
            <img src="src/assets/img/common/logo.webp" alt="国网LOGO" />
          </div>
          <div class="col-auto title">TMS深化应用系统</div>
        </div>
      </div>

      <!-- 右侧菜单和工具栏 -->
      <div class="col-8 menu-and-tool">
        <div class="row items-center right-row">
          <!-- TODO: 这部分是否需要,暂时不做 -->
          <div class="menu col-8">
            <q-tabs
              v-model="tab"
              class="text-teal"
              align="justify"
              stretch
              inline-label
              style="width: 100%; height: 56px"
            >
              <q-tab
                name="map"
                icon="fa fa-map-location-dot"
                label="精密观测"
              />
              <q-tab
                name="digitTwins"
                icon="fa fa-hard-drive"
                label="防灾预警"
              />
              <q-tab name="inspection" icon="fa fa-video" label="电力作业" />
              <q-tab name="inspection" icon="fa fa-video" label="分析服务" />
            </q-tabs>
          </div>
          <div class="tool col-4">
            <q-toolbar class="col-4 items-center text">
              <q-space />
              <header-user-settings />
              <header-settings />
            </q-toolbar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import HeaderSettings from './components/HeaderSettings.vue'
import HeaderUserSettings from './components/HeaderUserSettings.vue'
import { useTheme } from 'src/hooks/useTheme.js'

const tab = ref('mails')
const { activeName, theme } = useTheme()
</script>

<style lang="scss" scoped>
.main-header-wrapper {
  width: 100%;
  height: 70px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  &.theme-classic {
    background: url('assets/theme/green/header-bg.webp');
  }
  &.theme-element {
    background: url('assets/theme/blue/header-bg.webp');
  }
  .left-row {
    height: 70px;
    padding-left: 20px;
    .title {
      font-size: 46px;
      font-family: 'YouSheBiaoTiHei';
      color: white;
      line-height: 1;
      text-shadow: 4px 2px 4px rgba(0, 0, 0, 0.5);
    }
  }
  .right-row {
    height: 55px;
    .text {
      color: v-bind('theme.global.themeColor') !important;
    }
  }
}
</style>
