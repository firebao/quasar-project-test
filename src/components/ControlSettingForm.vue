<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-24 09:59:07
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-26 16:41:57
 * @Description  : 控件设置表单
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-form>
    <q-field
      label="视角复位按钮:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.homeButton"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.homeButton" :val="true" label="是" size="sm" />
        <q-radio v-model="form.homeButton" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint> 是否显示视角复位按钮 </template>
    </q-field>
    <q-field
      label="放大缩小按钮:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.zoom"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.zoom" :val="true" label="是" size="sm" />
        <q-radio v-model="form.zoom" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint> 是否显示放大缩小按钮 </template>
    </q-field>
    <q-field
      label="二三维切换按钮:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.sceneModePicker"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.sceneModePicker"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.sceneModePicker"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint>
        二三维切换按钮，是否显示二维、三维、2.5D视图切换按钮
      </template>
    </q-field>
    <q-field
      label="投影切换按钮:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.projectionPicker"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.projectionPicker"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.projectionPicker"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint>
        是否显示用于在透视和正投影之间进行切换按钮
      </template>
    </q-field>
    <q-field
      label="全屏按钮:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.fullscreenButton"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.fullscreenButton"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.fullscreenButton"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint> 是否显示全屏按钮 </template>
    </q-field>
    <q-field
      label="VR效果按钮:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.vrButton"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.vrButton" :val="true" label="是" size="sm" />
        <q-radio v-model="form.vrButton" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint> 是否显示VR效果按钮 </template>
    </q-field>
    <q-field
      label="地名查找按钮:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.geocoder"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.geocoder" :val="true" label="是" size="sm" />
        <q-radio v-model="form.geocoder" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint> 是否显示地名查找按钮 </template>
    </q-field>
    <q-field
      label="帮助按钮:"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.navigationHelpButton"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.navigationHelpButton"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.navigationHelpButton"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint> 是否显示帮助按钮 </template>
    </q-field>
    <q-field
      label="底图切换按钮"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.baseLayerPicker"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.baseLayerPicker"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.baseLayerPicker"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint>是否显示底图切换按钮</template>
    </q-field>
    <q-field
      label="导航球"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.compass"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.compass" :val="true" label="是" size="sm" />
        <q-radio v-model="form.compass" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint>是否显示导航球</template>
    </q-field>
    <q-field
      label="状态栏"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.locationBar"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.locationBar" :val="true" label="是" size="sm" />
        <q-radio v-model="form.locationBar" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint>是否显示状态栏</template>
    </q-field>
    <q-field
      label="比列尺"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.distanceLegend"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.distanceLegend"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.distanceLegend"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint>是否显示比例尺</template>
    </q-field>
    <q-field
      label="时钟控制"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.clockAnimate"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.clockAnimate" :val="true" label="是" size="sm" />
        <q-radio
          v-model="form.clockAnimate"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint>是否显示时钟控制</template>
    </q-field>
    <q-field
      label="时钟控制"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.animation"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.animation" :val="true" label="是" size="sm" />
        <q-radio v-model="form.animation" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint>是否显示时钟仪表控制</template>
    </q-field>
    <q-field
      label="时间线"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.timeline"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.timeline" :val="true" label="是" size="sm" />
        <q-radio v-model="form.timeline" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint>是否显示时间线</template>
    </q-field>
    <q-field
      label="鹰眼地图"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.overviewMap"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.overviewMap" :val="true" label="是" size="sm" />
        <q-radio v-model="form.overviewMap" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint>是否显示鹰眼地图</template>
    </q-field>
    <q-field
      label="卷帘对比"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.mapSplit"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.mapSplit" :val="true" label="是" size="sm" />
        <q-radio v-model="form.mapSplit" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint>是否显示卷帘对比</template>
    </q-field>
    <q-field
      label="键盘漫游"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.keyboardRoam"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.keyboardRoam" :val="true" label="是" size="sm" />
        <q-radio
          v-model="form.keyboardRoam"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint>是否显示键盘漫游</template>
    </q-field>
    <q-field
      label="键盘漫游"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.keyboardRoam"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.keyboardRoam" :val="true" label="是" size="sm" />
        <q-radio
          v-model="form.keyboardRoam"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint>是否显示键盘漫游</template>
    </q-field>
    <q-field
      label="指示图标"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.mouseDownView"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.mouseDownView"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.mouseDownView"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint>鼠标滚轮缩放美化样式(指示图标)</template>
    </q-field>
    <q-field
      label="信息面板"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.infoBox"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.infoBox" :val="true" label="是" size="sm" />
        <q-radio v-model="form.infoBox" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint>信息面板，是否显示点击要素之后显示的信息</template>
    </q-field>
    <q-field
      label="选中框"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.selectionIndicator"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio
          v-model="form.selectionIndicator"
          :val="true"
          label="是"
          size="sm"
        />
        <q-radio
          v-model="form.selectionIndicator"
          :val="false"
          label="否"
          size="sm"
        />
      </template>
      <template v-slot:hint>选中框，是否显示选择模型时的绿色框</template>
    </q-field>
    <q-field
      label="右键菜单"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.contextmenu"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.contextmenu" :val="true" label="是" size="sm" />
        <q-radio v-model="form.contextmenu" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint>是否显示右键菜单</template>
    </q-field>
    <q-field
      label="popup弹出框"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.popup"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.popup" :val="true" label="是" size="sm" />
        <q-radio v-model="form.popup" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint>是否显示popup</template>
    </q-field>
    <q-field
      label="tooltip弹出框"
      standout
      stack-label
      square
      bottom-slots
      label-color="white"
      :model-value="form.tooltip"
      :hide-bottom-space="true"
    >
      <template v-slot:control>
        <q-radio v-model="form.tooltip" :val="true" label="是" size="sm" />
        <q-radio v-model="form.tooltip" :val="false" label="否" size="sm" />
      </template>
      <template v-slot:hint>是否显示tooltip</template>
    </q-field>
  </q-form>
</template>
<script lang="ts" setup>
import { defaultMapSettings } from 'src/config/map/defaultMapSettings.js'
import { watch, ref } from 'vue'
import { stores } from 'src/stores/index.js'

const store = stores.viewer.useSceneStore()
const formStore = store.sceneSetting.control
const form = ref(formStore)

watch(form, (val) => {
  store.setControl(val)
})
</script>
