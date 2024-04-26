<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-15 16:26:41
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-24 14:06:29
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
      label="地图控件"
      class="text-white"
    >
      <q-card :style="{ backgroundColor: theme.global.themeCardBgColor }">
        <q-card-section>
          <control-setting-form></control-setting-form>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>
<script lang="ts" setup>
import { useTheme } from 'src/hooks/useTheme.js'
import GlobeSettingForm from 'src/components/GlobeSettingForm.vue'
import TerrainSettingForm from './TerrainSettingForm.vue'
import ControlSettingForm from './ControlSettingForm.vue'
const { theme } = useTheme()
</script>
