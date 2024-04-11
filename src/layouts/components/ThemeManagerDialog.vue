<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 15:32:54
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-11 18:53:38
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-dialog v-model="dialogVisible">
    <q-card style="width: 650px">
      <q-card-section class="row items-center q-pb-none q-pt-xs card-header">
        <div
          class="text-h6"
          :class="activeName === 'classic' ? 'text-teal' : 'text-blue'"
        >
          主题管理
        </div>
        <q-space />
        <q-btn
          v-close-popup
          icon="fa fa-close"
          flat
          round
          dense
          :color="activeName === 'classic' ? 'teal' : 'blue'"
        >
          <q-tooltip>关闭</q-tooltip>
        </q-btn>
      </q-card-section>

      <q-card-section class="theme-card">
        <theme-list></theme-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { ref } from 'vue'
import ThemeList from './ThemeList.vue'
import { stores } from 'src/stores/index.js'

const store = stores.system.useThemeStore()
const { activeName } = storeToRefs(store)
const dialogVisible = ref(false)
</script>
