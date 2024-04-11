<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 11:16:31
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-07 17:32:31
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-dialog v-model="model">
    <q-card style="width: 650px">
      <q-bar :style="{ backgroundColor: theme.global.themeColor }">
        <q-icon name="fa-brands fa-themeisle " color="white"></q-icon>
        <div class="text-h6 text-white">主题管理</div>
        <q-space />
        <q-btn
          v-close-popup
          icon="fa fa-close"
          flat
          round
          dense
          :style="{ color: theme.global.themeColor }"
        >
          <q-tooltip>关闭</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section class="theme-card">
        <theme-list></theme-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import ThemeList from './ThemeList.vue'
import { useTheme } from 'src/hooks/useTheme.js'
const model = defineModel()

const { theme } = useTheme()
</script>
