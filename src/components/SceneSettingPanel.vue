<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-15 16:26:41
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-18 15:43:25
 * @Description  : 场景设置组件
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-list>
    <q-expansion-item
      icon="fa fa-chess-king"
      label="地球设置"
      class="text-white"
    >
      <q-card :style="{ backgroundColor: theme.global.themeCardBgColor }">
        <q-card-section class="q-pa-none">
          <globe-setting-form />
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      icon="fa fa-chess-king"
      label="地形设置"
      class="text-white bg-transparent"
    >
      <q-card :style="{ backgroundColor: theme.global.themeCardBgColor }">
        <q-card-section>
          <terrain-setting-form />
        </q-card-section>
      </q-card>
    </q-expansion-item>
    <q-expansion-item
      icon="fa fa-chess-king"
      label="鼠标交互"
      class="text-white"
    >
      <q-card :style="{ backgroundColor: theme.global.themeCardBgColor }">
        <q-card-section>333</q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>
<script lang="ts" setup>
import { useTheme } from 'src/hooks/useTheme.js'
import GlobeSettingForm from 'src/components/GlobeSettingForm.vue'
import TerrainSettingForm from './TerrainSettingForm.vue'
const { theme } = useTheme()
</script>
