<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-15 17:24:03
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-18 16:03:32
 * @Description  : 地球设置表单
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-form>
    <q-field
      label="是否显示地球:"
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
      <template v-slot:hint> 是否显示地球 </template>
    </q-field>
    <q-field
      label="地球背景色:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.baseColor"
    >
      <template v-slot:control>
        <q-input
          v-model="form.baseColor"
          filled
          rounded
          :rules="['anyColor' || '请填入正确的颜色']"
        >
          <template v-slot:append>
            <q-icon
              name="fa fa-eye-dropper"
              class="cursor-pointer"
              color="primary"
            >
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color v-model="form.baseColor" />
              </q-popup-proxy>
            </q-icon>
          </template>
          <template v-slot:error> 请填入正确的颜色 </template>
        </q-input>
      </template>
      <template v-slot:hint> 地球背景色，CSS颜色值 </template>
    </q-field>
    <q-field
      label="深度监测:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.depthTestAgainstTerrain"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.depthTestAgainstTerrain"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.depthTestAgainstTerrain"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint>
        是否启用深度监测（测试矢量对象是否被遮挡）
      </template>
    </q-field>
    <q-field
      label="地面大气:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.showGroundAtmosphere"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.showGroundAtmosphere"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.showGroundAtmosphere"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint> 是否在地球上绘制的地面大气 </template>
    </q-field>
    <q-field
      label="晨昏线:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.enableLighting"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.enableLighting"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.enableLighting"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint>是否显示晨昏线，可以看到地球的昼夜区域</template>
    </q-field>
    <q-field
      label="地形图块缓存大小:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.tileCacheSize"
    >
      <template v-slot:control>
        <q-input
          v-model.number="form.tileCacheSize"
          type="number"
          filled
          debounce="1000"
          rounded
          clearable
        />
      </template>
      <template v-slot:hint> 地形图块缓存的大小，表示为图块数 </template>
    </q-field>
    <q-field
      label="真实高度:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.realAlt"
    >
      <template v-slot:control>
        <q-radio v-model="form.realAlt" :val="true" label="是" size="sm" />
        <q-radio v-model="form.realAlt" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint>
        高度信息是否将地形夸张倍率后的值转换为真实高度
      </template>
    </q-field>
  </q-form>
</template>
<script lang="ts" setup>
import { watch } from 'vue'
import { stores } from 'src/stores/index.js'
import { GlobeSetting } from 'src/types/globe.js'

const store = stores.viewer.useSceneStore()
const form = store.sceneSetting.scene.globe

watch(form, (val: GlobeSetting) => {
  store.setGlobe(val)
})
</script>
<style lang="scss" scoped>
:deep(.q-field__bottom) {
  padding: 4px 12px;
}
:deep(.q-field) {
  width: 100%;
}
</style>
