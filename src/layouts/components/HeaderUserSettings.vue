<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-21 17:51:13
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-03-25 10:39:18
 * @Description  : 主题控制按钮
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-btn flat round size="12px" icon="fa fa-user-gear">
    <q-menu>
      <div class="row no-wrap q-pa-md">
        <div class="column">
          <div class="text-h6 q-mb-md text-teal">用户设置</div>
          <q-toggle
            v-model="mobileData"
            label="使用移动数据"
            class="text-teal"
            color="teal"
          />
          <q-toggle
            v-model="bluetooth"
            label="使用蓝牙数据"
            class="text-teal"
            color="teal"
          />
        </div>

        <q-separator vertical inset class="q-mx-lg" />

        <div class="column items-center">
          <q-avatar size="72px">
            <img src="https://cdn.quasar.dev/img/avatar4.jpg" />
          </q-avatar>

          <div class="text-subtitle1 q-mt-md q-mb-xs text-teal">张三</div>

          <q-btn color="teal" label="退出登录" push size="sm" v-close-popup />
        </div>
      </div>
    </q-menu>
  </q-btn>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
const mobileData = ref(false)
const bluetooth = ref(false)
</script>
