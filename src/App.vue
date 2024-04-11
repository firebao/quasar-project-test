<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-19 10:44:36
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-07 17:23:01
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <router-view />
</template>

<script setup lang="ts">
import { useTheme } from 'src/hooks/useTheme.js'
const { theme } = useTheme()
</script>

<style lang="scss">
:root {
  --q-primary: v-bind('theme.global.themeColor') !important;
}
</style>
