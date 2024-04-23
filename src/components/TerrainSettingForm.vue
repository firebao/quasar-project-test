<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-18 15:35:08
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-19 09:12:36
 * @Description  : 地形设置表单
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-form>
    <q-field
      label="是否显示地形:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.show"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.show" :val="true" label="是" size="sm" />
        <q-radio v-model="form.show" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint> 选择提供的地形服务 </template>
    </q-field>
    <q-field
      label="是否从服务器请求额外的光照信息:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.requestVertexNormals"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.requestVertexNormals"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.requestVertexNormals"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint> 选择提供的地形服务 </template>
    </q-field>
    <q-field
      label="是否从服务器请求水掩膜信息:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.requestWaterMask"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.requestWaterMask"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.requestWaterMask"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint> 选择提供的地形服务 </template>
    </q-field>
    <q-field
      label="是否从服务器请求每个块的元数据:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.show"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.requestMetadata"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.requestMetadata"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint> 选择提供的地形服务 </template>
    </q-field>
    <q-field
      label="是否启用地形开挖:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.clip"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.clip" :val="true" label="是" size="sm" />
        <q-radio v-model="form.clip" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint> 选择提供的地形服务 </template>
    </q-field>
    <q-field
      label="是否启用地形压平:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.flat"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.flat" :val="true" label="是" size="sm" />
        <q-radio v-model="form.flat" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint> 选择提供的地形服务 </template>
    </q-field>
    <q-field
      label="是否启用地形抬升:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.uplift"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.uplift" :val="true" label="是" size="sm" />
        <q-radio v-model="form.uplift" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint> 选择提供的地形服务 </template>
    </q-field>
    <q-field
      label="是否启用地形区域材质:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.flood"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.flood" :val="true" label="是" size="sm" />
        <q-radio v-model="form.flood" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint> 选择提供的地形服务 </template>
    </q-field>
  </q-form>
</template>

<script setup lang="ts">
import { watch } from 'vue'
import { stores } from 'src/stores/index.js'

const store = stores.viewer.useSceneStore()
const form = store.sceneSetting.terrain

watch(form, (val) => {
  store.setTerrain(val)
})
</script>

<style lang="scss" scoped></style>
