<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-05-13 17:17:06
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-14 19:48:00
 * @Description  :
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-list bordered padding separator>
    <q-item>
      <q-item-section avatar>
        <q-icon
          name="fa-brands fa-galactic-republic "
          size="20px"
          class="q-mt-xs"
        ></q-icon>
      </q-item-section>
      <q-item-section>
        <q-item-label class="text-subtitle1 text-weight-medium"
          >站点资产信息面板</q-item-label
        >
      </q-item-section>
    </q-item>
    <q-expansion-item
      v-for="(item, index) in communicationRoomList"
      icon="fa fa-chess-king"
      :label="item.name"
      class="text-white"
      :key="index"
      :model-value="true"
    >
      <q-card :style="{ backgroundColor: theme.global.themeCardBgColor }">
        <q-card-section class="q-pa-none">
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>
                  <q-icon
                    name="fa-solid fa-hands-holding"
                    size="12px"
                    class="q-mr-xs"
                  ></q-icon>
                  机房图片
                </q-item-label>
                <q-item-label caption>
                  <q-carousel
                    animated
                    v-model="slide"
                    height="160px"
                    autoplay
                    navigation
                    infinite
                  >
                    <q-carousel-slide
                      :name="1"
                      img-src="https://cdn.quasar.dev/img/mountains.jpg"
                    />
                    <q-carousel-slide
                      :name="2"
                      img-src="https://cdn.quasar.dev/img/parallax1.jpg"
                    />
                    <q-carousel-slide
                      :name="3"
                      img-src="https://cdn.quasar.dev/img/parallax2.jpg"
                    />
                    <q-carousel-slide
                      :name="4"
                      img-src="https://cdn.quasar.dev/img/quasar.jpg"
                    />
                  </q-carousel>
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section>
                <q-item-label>
                  <q-icon
                    name="fa-solid fa-hands-holding"
                    size="12px"
                    class="q-mr-xs"
                  ></q-icon>
                  机房属性
                </q-item-label>
                <q-item-label style="height: 760px">
                  <div v-for="(item1, index1) in item.attr" :key="index1">
                    <div class="row q-pa-sm">
                      <div class="col-5 text-white">{{ item1.label }}</div>
                      <div class="col-7 text-right">{{ item1.value }}</div>
                    </div>
                    <q-separator></q-separator>
                  </div>
                </q-item-label>
                <q-item-label class="flex justify-between">
                  <q-btn
                    color="yellow-9"
                    size="md"
                    dense
                    @click="handelEquListPanelOpen"
                    >设备列表</q-btn
                  >
                  <q-btn color="yellow-9" size="md" dense>站点平面图</q-btn>
                  <q-btn color="yellow-9" size="md" dense>机房3D视角</q-btn>
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </q-list>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useTheme } from 'src/hooks/useTheme.js'
import { usePanel } from 'src/hooks/usePanel.js'

const { theme } = useTheme()
const { setEquListStatus } = usePanel()
const slide = ref(1)
const communicationRoomList = ref([
  {
    name: '通信机房1',
    attr: [
      { label: '名称:', value: 'xxx' },
      { label: '全局名称:', value: 'xxx' },
      { label: '简称:', value: 'xxx' },
      { label: '值班电话:', value: 'xxx' },
      { label: '所属站点:', value: 'xxx' },
      { label: '机房类型:', value: 'xxx' },
      { label: '机房编号:', value: 'xxx' },
      { label: '机房位置:', value: 'xxx' },
      { label: '机房进深(米):', value: 'xxx' },
      { label: '机房宽度(米):', value: 'xxx' },
      { label: '机房高度(米):', value: 'xxx' },
      { label: '机房面积(平米):', value: 'xxx' },
      { label: '空调方式', value: 'xxx' },
      { label: '取暖方式', value: 'xxx' },
      { label: '走线方式', value: 'xxx' },
      { label: '是否监控', value: 'xxx' },
      { label: '房间承重', value: 'xxx' },
      { label: '备注', value: 'xxx' },
      { label: '权限管辖单位', value: 'xxx' },
      { label: '维护单位', value: 'xxx' },
      { label: '产权单位', value: 'xxx' },
      { label: '统计单位', value: 'xxx' },
    ],
  },
  {
    name: '通信机房2',
    attr: [
      { label: '名称:', value: 'xxx' },
      { label: '全局名称:', value: 'xxx' },
      { label: '简称:', value: 'xxx' },
      { label: '值班电话:', value: 'xxx' },
      { label: '所属站点:', value: 'xxx' },
      { label: '机房类型:', value: 'xxx' },
      { label: '机房编号:', value: 'xxx' },
      { label: '机房位置:', value: 'xxx' },
      { label: '机房进深(米):', value: 'xxx' },
      { label: '机房宽度(米):', value: 'xxx' },
      { label: '机房高度(米):', value: 'xxx' },
      { label: '机房面积(平米):', value: 'xxx' },
      { label: '空调方式', value: 'xxx' },
      { label: '取暖方式', value: 'xxx' },
      { label: '走线方式', value: 'xxx' },
      { label: '是否监控', value: 'xxx' },
      { label: '房间承重', value: 'xxx' },
      { label: '备注', value: 'xxx' },
      { label: '权限管辖单位', value: 'xxx' },
      { label: '维护单位', value: 'xxx' },
      { label: '产权单位', value: 'xxx' },
      { label: '统计单位', value: 'xxx' },
    ],
  },
])
const handelEquListPanelOpen = () => {
  setEquListStatus(true)
}
</script>
<style lang="scss" scoped></style>
