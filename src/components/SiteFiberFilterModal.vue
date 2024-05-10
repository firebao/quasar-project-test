<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-05-09 14:17:53
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-10 16:46:32
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-dialog v-model="model" @update:model-value="checkFilterBtnActive">
    <q-card style="width: 650px">
      <q-bar :style="{ backgroundColor: theme.global.themeColor }">
        <q-icon name="fa-brands fa-themeisle " color="white"></q-icon>
        <div class="text-h6 text-white">站点线路筛选</div>
        <q-space />
        <q-btn
          v-close-popup
          icon="fa fa-close"
          flat
          round
          dense
          :style="{ color: 'white' }"
        >
          <q-tooltip>关闭</q-tooltip>
        </q-btn>
      </q-bar>

      <q-card-section class="theme-card q-gutter-md">
        <div class="title">站点筛选</div>
        <div class="q-gutter-md flex">
          <q-option-group
            v-model="checkSiteList"
            type="checkbox"
            :options="siteList"
            color="primary"
            inline
          >
          </q-option-group>
        </div>
      </q-card-section>
      <q-separator />
      <q-card-section class="theme-card q-gutter-md">
        <div class="title">线路筛选</div>
        <div class="q-gutter-md flex">
          <q-option-group
            v-model="checkFiberList"
            type="checkbox"
            :options="fiberList"
            color="primary"
            inline
          >
          </q-option-group>
        </div>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import { useTheme } from 'src/hooks/useTheme.js'

const model = defineModel()
const { theme } = useTheme()
const siteList = ref([
  { label: '750kV变电站', value: "[voltage_type] = '750kV变电站'" },
  { label: '330kV变电站', value: "[voltage_type] = '330kV变电站'" },
  { label: '330kV牵引变', value: "[voltage_type] = '330kV牵引变'" },
  { label: '330kV升压站', value: "[voltage_type] = '330kV升压站'" },
  { label: '220kV变电站', value: "[voltage_type] = '220kV变电站'" },
  { label: '110kV变电站', value: "[voltage_type] = '110kV变电站'" },
  { label: '110kV牵引变', value: "[voltage_type] = '110kV牵引变'" },
  { label: '110kV升压站', value: "[voltage_type] = '110kV升压站'" },
  { label: '省调', value: "[voltage_type] = '省调'" },
  { label: '地调', value: "[voltage_type] = '地调'" },
  { label: '换流站', value: "[voltage_type] = '换流站'" },
  { label: '水电站', value: "[voltage_type] = '水电站'" },
  { label: '火电站', value: "[voltage_type] = '火电站'" },
])

const fiberList = ref([
  { label: '±800kV线路', value: "[volt = '±800kV']" },
  { label: '特高压主线路', value: "[volt = '750kV'] AND is_tgy = 'true'" },
  { label: '750kV线路', value: "[volt = '750'] AND is_tgy = 'false'" },
  { label: '330kV线路', value: "[volt = '330kV']" },
  { label: '220kV线路', value: "[volt = '220kV']" },
  { label: '110kV线路', value: "[volt = '110kV']" },
])
const checkSiteList = ref([
  "[voltage_type] = '750kV变电站'",
  "[voltage_type] = '330kV变电站'",
  "[voltage_type] = '330kV牵引变'",
  "[voltage_type] = '330kV升压站'",
  "[voltage_type] = '220kV变电站'",
  "[voltage_type] = '110kV变电站'",
  "[voltage_type] = '110kV牵引变'",
  "[voltage_type] = '110kV升压站'",
  "[voltage_type] = '省调'",
  "[voltage_type] = '地调'",
  "[voltage_type] = '换流站'",
  "[voltage_type] = '水电站'",
  "[voltage_type] = '火电站'",
])
const checkFiberList = ref([
  "[volt = '±800kV']",
  "[volt = '750kV'] AND is_tgy = 'true'",
  "[volt = '750'] AND is_tgy = 'false'",
  "[volt = '330kV']",
  "[volt = '220kV']",
  "[volt = '110kV']",
])

/**
 * @description: panel关闭的同时也要去掉filterBtn按钮的active状态
 * @param {*} status
 * @return {*}
 */
const checkFilterBtnActive = (status: boolean) => {
  if (!status) {
    const btn = document.getElementById('filterButton')
    btn && btn.classList.remove('active')
  }
}
</script>
