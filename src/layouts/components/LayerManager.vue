<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 11:26:54
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-25 15:56:47
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-dialog v-model="model">
    <q-card style="width: 650px">
      <q-card-section class="row items-center q-pb-none q-pt-xs card-header">
        <div class="text-h6 text-teal">图层管理</div>
        <q-space />
        <q-btn v-close-popup icon="fa fa-close" flat round dense color="teal">
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
const model = defineModel()
</script>
