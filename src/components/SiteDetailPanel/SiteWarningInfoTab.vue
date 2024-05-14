<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-05-13 17:17:06
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-14 10:54:37
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-list>
    <q-card :style="{ backgroundColor: theme.global.themeCardBgColor }">
      <q-card-section class="q-pa-none">
        <q-list>
          <q-item>
            <q-item-section>
              <q-item-label class="text-white">告警列表</q-item-label>
              <q-item-label style="height: 760px">
                <div v-for="(item, index) in warningList" :key="index">
                  <div class="row q-pa-sm">
                    <div class="col-5 text-white">{{ item.label }}</div>
                    <div class="col-7 text-right">{{ item.value }}</div>
                  </div>
                  <q-separator></q-separator>
                </div>
              </q-item-label>
              <q-item-label class="flex justify-between">
                <q-btn color="yellow-9" size="md" dense>告警列表</q-btn>
                <q-btn color="yellow-9" size="md" dense>站点平面图</q-btn>
                <q-btn color="yellow-9" size="md" dense>机房3D视角</q-btn>
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
  </q-list>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'src/hooks/useTheme.js'
const { theme } = useTheme()
const warningList = ref([
  { label: '47告警原因:xx站(特高压) OMS1684', value: '设备' },
  { label: '48告警原因:xx站(特高压) OMS1684', value: '设备' },
  { label: '49告警原因:xx站(特高压) OMS1684', value: '设备' },
  { label: '50告警原因:xx站(特高压) OMS1684', value: '设备' },
  { label: '51告警原因:xx站(特高压) OMS1684', value: '设备' },
  { label: '52告警原因:xx站(特高压) OMS1684', value: '设备' },
  { label: '53告警原因:xx站(特高压) OMS1684', value: '设备' },
  { label: '54告警原因:xx站(特高压) OMS1684', value: '设备' },
  { label: '55告警原因:xx站(特高压) OMS1684', value: '设备' },
])
</script>
<style lang="scss" scoped></style>
