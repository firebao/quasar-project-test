<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-25 11:26:54
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-15 10:31:04
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-dialog v-model="model" position="right" seamless>
    <map-setting-dialog></map-setting-dialog>
  </q-dialog>
</template>

<script lang="ts" setup>
import MapSettingDialog from 'src/components/MapSettingDialog.vue'
const model = defineModel()
</script>
