<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-05-13 17:17:06
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-14 10:56:38
 * @Description  : 监控信息面板
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
              <q-item-label class="text-white">摄像头列表</q-item-label>
              <q-item-label>
                <div v-for="(item, index) in monitorList" :key="index">
                  <div class="row q-pa-sm">
                    <div class="col-5 text-white">{{ item.label }}</div>
                    <div class="col-7 text-right">{{ item.value }}</div>
                  </div>
                  <q-separator></q-separator>
                </div>
              </q-item-label>
            </q-item-section>
          </q-item>
          <q-item>
            <q-item-section>
              <q-item-label class="text-white">视频监控算法配置</q-item-label>
              <q-item-label>
                <div v-for="(item, index) in monitorList" :key="index">
                  <div class="row q-pa-sm">
                    <div class="col-5 text-white">{{ item.label }}</div>
                    <div class="col-7 text-right">{{ item.value }}</div>
                  </div>
                  <q-separator></q-separator>
                </div>
              </q-item-label>
              <q-item-label class="flex center">
                <q-btn color="yellow-9" size="md" dense>监控面板</q-btn>
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
const monitorList = ref([
  { label: 'xxx摄像头', value: '点击查看' },
  { label: 'xxx摄像头', value: '点击查看' },
  { label: 'xxx摄像头', value: '点击查看' },
  { label: 'xxx摄像头', value: '点击查看' },
  { label: 'xxx摄像头', value: '点击查看' },
  { label: 'xxx摄像头', value: '点击查看' },
])
</script>
<style lang="scss" scoped></style>
