<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-04-15 09:33:32
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-18 15:26:44
 * @Description  : 地图设置组件
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <div class="settings-wrapper row">
    <div class="tag-wrapper col-1">
      <q-tabs v-model="tab" vertical @update:model-value="handleTabsChange">
        <q-tab
          v-for="(item, index) in tabList"
          :key="index"
          :name="item.name"
          :icon="item.icon"
          :label="item.label"
          :style="{ backgroundColor: theme.global.themeColor }"
        ></q-tab>
      </q-tabs>
    </div>
    <div
      class="content-wrapper col-11"
      :style="{ backgroundColor: theme.global.themeSettingPanelBgColor }"
    >
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="scene0">
          <scene-setting-panel></scene-setting-panel>
        </q-tab-panel>
      </q-tab-panels>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="scene1">2222</q-tab-panel>
      </q-tab-panels>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="scene2">3333</q-tab-panel>
      </q-tab-panels>
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="scene3">4444</q-tab-panel>
      </q-tab-panels>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SceneSettingPanel from 'src/components/SceneSettingPanel.vue'
import { ref } from 'vue'
import { useTheme } from 'src/hooks/useTheme.js'

const tabList = ref([
  { name: 'scene0', icon: 'fa fa-bell', label: '场景设置一' },
  { name: 'scene1', icon: 'fa fa-bell', label: '场景设置二' },
  { name: 'scene2', icon: 'fa fa-bell', label: '场景设置三' },
  { name: 'scene3', icon: 'fa fa-bell', label: '场景设置四' },
])
const { theme } = useTheme()
const tab = ref(tabList.value[0].name)

const handleTabsChange = (val: string) => {
  console.log(val)
  const index = tabList.value.findIndex((item) => item.name === val)
  if (index !== -1) {
    ;[tabList.value[0], tabList.value[index]] = [
      tabList.value[index],
      tabList.value[0],
    ]
  }
}
</script>

<style lang="scss" scoped>
.settings-wrapper {
  width: 350px;
  height: calc(100vh - 55px);
  position: relative;
  margin-top: 32px;

  .tag-wrapper {
    height: calc(100vh - 105px);
    :deep(.q-tab__label) {
      writing-mode: vertical-lr;
    }

    :deep(.q-tabs__content) {
      margin: 20px 0;
    }

    :deep(.q-tab) {
      color: white;
      margin-bottom: 1px;
      padding: 10px 0;
      border-top-left-radius: 15px;
      border-bottom-left-radius: 15px;
    }

    :deep(.q-tab__icon) {
      font-size: 14px;
      margin-left: 2px;
    }
  }
  .content-wrapper {
    :deep(.q-tab-panels) {
      background-color: transparent;
    }
    :deep(.q-tab-panel) {
      padding: 0px;
    }
    :deep(.q-icon) {
      font-size: 14px;
      margin-bottom: 2px;
      color: v-bind('theme.global.themeColor') !important;
    }
    :deep(.q-item__section) {
      min-width: 0;
      padding-right: 5px;
    }
  }
}
</style>
