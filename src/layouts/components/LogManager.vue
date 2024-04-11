<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 11:27:50
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-08 15:19:30
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-dialog v-model="model">
    <q-card style="width: 650px">
      <q-bar class="bg-teal">
        <q-icon name="fa fa-book-journal-whills" color="white"></q-icon>
        <div class="text-h6 text-white">日志管理</div>
        <q-space />
        <q-btn v-close-popup icon="fa fa-close" flat round dense color="white">
          <q-tooltip>关闭</q-tooltip>
        </q-btn>
      </q-bar>
      <q-card-section class="theme-card">
        <!-- <theme-list></theme-list> -->
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
const model = defineModel()
</script>
