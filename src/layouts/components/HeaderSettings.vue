<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-21 17:51:13
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-25 16:11:02
 * @Description  : 主题控制按钮
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <div class="q-pa-md">
    <q-btn-dropdown
      rounded
      class="glossy"
      size="10px"
      color="teal"
      icon="fa fa-gear"
      style="margin-bottom: 4px"
      menu-anchor="bottom end"
      menu-self="top end"
      :menu-offset="[0, 10]"
    >
      <q-list style="min-width: 200px" bordered class="text-teal">
        <q-item clickable v-close-popup @click="isThemeDialogShow = true">
          <q-item-section avatar>
            <q-icon name="fa-brands fa-themeisle"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>主题管理</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="isLogDialogShow = true">
          <q-item-section avatar>
            <q-icon name="fa fa-book-journal-whills"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>日志管理</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable v-close-popup @click="isLayerDialogShow = true">
          <q-item-section avatar>
            <q-icon name="fa fa-layer-group"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>图层管理</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
  <theme-manager v-model="isThemeDialogShow" />
  <log-manager v-model="isLogDialogShow" />
  <layer-manager v-model="isLayerDialogShow" />
</template>

<script lang="ts" setup>
import LayerManager from './LayerManager.vue'
import LogManager from './LogManager.vue'
import ThemeManager from './ThemeManager.vue'
import { ref } from 'vue'

const isThemeDialogShow = ref(false)
const isLogDialogShow = ref(false)
const isLayerDialogShow = ref(false)
</script>
