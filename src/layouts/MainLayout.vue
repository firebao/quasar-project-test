<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-19 10:44:36
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-15 15:24:23
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-layout view="hHh lpr lFf">
    <q-header class="custom-header">
      <main-header></main-header>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import MainHeader from 'layouts/MainHeader.vue'
import MapSettingDialog from 'src/components/MapSettingDialog.vue'

const rightDrawerOpen = ref(true)
</script>
