<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-05-13 10:42:45
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-14 18:44:09
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-dialog
    v-model="uniquenessPanel.siteDetailInfoPanel"
    position="right"
    seamless
  >
    <div class="settings-wrapper row">
      <div class="tag-wrapper col-1">
        <q-tabs v-model="tab" vertical>
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
        <div
          class="close-btn absolute text-white cursor-pointer"
          @click="handlePanelClose"
        >
          <q-icon name="fa fa-close" size="16px"></q-icon>
        </div>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="site" class="text-white">
            <site-basic-info-tab></site-basic-info-tab>
          </q-tab-panel>
        </q-tab-panels>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="assets" class="text-white">
            <site-assets-info-tab></site-assets-info-tab>
          </q-tab-panel>
        </q-tab-panels>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="warning">
            <site-warning-info-tab></site-warning-info-tab>
          </q-tab-panel>
        </q-tab-panels>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="monitor">
            <site-monitor-info-tab></site-monitor-info-tab>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-dialog>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useTheme } from 'src/hooks/useTheme.js'
import { usePanel } from 'src/hooks/usePanel.js'
import SiteBasicInfoTab from './SiteBasicInfoTab.vue'
import SiteAssetsInfoTab from './SiteAssetsInfoTab.vue'
import SiteWarningInfoTab from './SiteWarningInfoTab.vue'
import SiteMonitorInfoTab from './SiteMonitorInfoTab.vue'
const { theme } = useTheme()
const { uniquenessPanel, setDetailStatus } = usePanel()

const tabList = ref([
  { name: 'site', icon: 'fa fa-bell', label: '站点信息' },
  { name: 'assets', icon: 'fa fa-bell', label: '资产信息' },
  { name: 'warning', icon: 'fa fa-bell', label: '告警信息' },
  { name: 'monitor', icon: 'fa fa-bell', label: '监控信息' },
])
const tab = ref(tabList.value[0].name)
const model = ref(true)

const handlePanelClose = () => {
  setDetailStatus(false)
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
    .close-btn {
      right: 20px;
      top: 22px;
      z-index: 2;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
