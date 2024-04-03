<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-21 11:48:34
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-25 10:38:59
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <div class="main-header-wrapper">
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
          <div class="menu col-8" style="height: 55px; padding: 0 20px">
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
                label="通信一张图"
              />
              <q-tab
                name="digitTwins"
                icon="fa fa-hard-drive"
                label="机房数字孪生"
              />
              <q-tab name="inspection" icon="fa fa-video" label="智慧巡检" />
            </q-tabs>
          </div>
          <div class="tool col-4" style="height: 55px; padding: 0 20px">
            <q-toolbar
              class="col-4 text-teal items-center"
              style="height: 60px"
            >
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
import HeaderTheme from './components/HeaderTheme.vue'
import HeaderSettings from './components/HeaderSettings.vue'
import HeaderUserSettings from './components/HeaderUserSettings.vue'
const tab = ref('mails')
</script>

<style lang="scss" scoped>
.main-header-wrapper {
  background: url('assets/theme/green/header-bg.webp');
  width: 100%;
  height: 70px;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
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
  }
}
</style>
