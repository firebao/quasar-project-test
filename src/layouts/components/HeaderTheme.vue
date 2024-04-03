<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-21 17:51:13
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-25 13:33:49
 * @Description  : 主题控制按钮
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-btn icon="style" size="md" flat round @click="dialogVisible = true">
    <q-tooltip>主题</q-tooltip>
  </q-btn>
  <q-dialog v-model="dialogVisible">
    <q-card style="width: 650px">
      <q-card-section class="row items-center q-pb-none q-pt-xs card-header">
        <div class="text-h6">主题</div>
        <q-space />
        <q-btn v-close-popup icon="close" flat round dense>
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
import { ref } from 'vue'
// import ThemeList from './ThemeList.vue'
const dialogVisible = ref(false)
</script>
