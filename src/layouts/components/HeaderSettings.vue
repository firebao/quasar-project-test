<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-21 17:51:13
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-15 09:47:44
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
      icon="fa fa-gear"
      style="margin-bottom: 4px"
      menu-anchor="bottom end"
      menu-self="top end"
      data-test="dropdown"
      :menu-offset="[0, 10]"
      :style="{ backgroundColor: theme.global.themeColor, color: 'white' }"
    >
      <q-list
        style="min-width: 200px"
        bordered
        :style="{ color: theme.global.themeColor }"
      >
        <q-item
          clickable
          v-close-popup
          data-test="theme"
          @click="isThemeDialogShow = true"
        >
          <q-item-section avatar>
            <q-icon name="fa-brands fa-themeisle"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>主题管理</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
          data-test="log"
          @click="isLogDialogShow = true"
        >
          <q-item-section avatar>
            <q-icon name="fa fa-book-journal-whills"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>日志管理</q-item-label>
          </q-item-section>
        </q-item>
        <q-item
          clickable
          v-close-popup
          data-test="layer"
          @click="isMapSettingsDialogShow = true"
        >
          <q-item-section avatar>
            <q-icon name="fa fa-layer-group"></q-icon>
          </q-item-section>
          <q-item-section>
            <q-item-label>地图设置</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>
  <theme-manager v-model="isThemeDialogShow" />
  <log-manager v-model="isLogDialogShow" />
  <layer-manager v-model="isMapSettingsDialogShow" />
</template>

<script lang="ts" setup>
import LayerManager from './LayerManager.vue'
import LogManager from './LogManager.vue'
import ThemeManager from './ThemeManager.vue'
import { ref } from 'vue'
import { useTheme } from 'src/hooks/useTheme.js'

const isThemeDialogShow = ref(false)
const isLogDialogShow = ref(false)
const isMapSettingsDialogShow = ref(false)
const { theme } = useTheme()
</script>
