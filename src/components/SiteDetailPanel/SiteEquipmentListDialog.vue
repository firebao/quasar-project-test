<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-05-13 18:44:43
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-05-14 19:50:27
 * @Description  : 机房设备列表
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-dialog v-model="nonUniquenessPanel.siteEquListPanel">
    <q-card style="min-width: 950px">
      <q-bar :style="{ backgroundColor: theme.global.themeColor }">
        <q-icon name="fa-brands fa-themeisle " color="white"></q-icon>
        <div class="text-h6 text-white">机房设备列表</div>
        <q-space />
        <q-btn
          v-close-popup
          icon="fa fa-close"
          flat
          round
          dense
          :style="{ color: 'white' }"
        >
          <q-tooltip>关闭</q-tooltip>
        </q-btn>
      </q-bar>
      <div class="q-pa-md">
        <q-table
          title="机房一机柜设备列表"
          dense
          :rows="rows"
          :columns="columns"
          row-key="name"
        />
        <q-table
          title="机房一机房辅助列表"
          dense
          :rows="rows"
          :columns="columns"
          row-key="name"
        />
      </div>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { useTheme } from 'src/hooks/useTheme.js'
import { usePanel } from 'src/hooks/usePanel.js'

const model = defineModel()
const { theme } = useTheme()
const { nonUniquenessPanel } = usePanel()
const emit = defineEmits<{
  (e: 'cql-change', { siteCqlStr, fiberCqlStr }: any): void
}>()
const columns = [
  {
    name: 'name',
    required: true,
    label: '名称',
    align: 'left',
    field: (row: any) => row.name,
    format: (val: any) => `${val}`,
    sortable: true,
  },
  {
    name: 'calories',
    align: 'center',
    label: '全局名称',
    field: 'calories',
    sortable: true,
  },
  { name: 'fat', label: '简称', field: 'fat', sortable: true },
  { name: 'carbs', label: '机柜类型', field: 'carbs' },
  { name: 'protein', label: '机柜编号', field: 'protein' },
  { name: 'sodium', label: '所属机房', field: 'sodium' },
  {
    name: 'calcium',
    label: '生产厂家',
    field: 'calcium',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '投运日期',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '机柜高度(毫米)',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '机柜宽度(毫米)',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '机柜深度度(毫米)',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '产权单位',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '维护单位',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '维护人',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '联系电话',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '用途描述',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '颜色',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '备注',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '权限管辖单位',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '统计单位',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '容量',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
]
const columnsForAuxEqu = [
  {
    name: 'name',
    required: true,
    label: '名称',
    align: 'left',
    field: (row: any) => row.name,
    format: (val: any) => `${val}`,
    sortable: true,
  },
  {
    name: 'calories',
    align: 'center',
    label: '全局名称',
    field: 'calories',
    sortable: true,
  },
  { name: 'fat', label: '简称', field: 'fat', sortable: true },
  { name: 'carbs', label: '设备类型', field: 'carbs' },
  { name: 'sodium', label: '所属机房', field: 'sodium' },
  { name: 'sodium', label: '所属机柜', field: 'sodium' },
  {
    name: 'calcium',
    label: '生产厂家',
    field: 'calcium',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '投运日期',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '产权单位',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '维护单位',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '维护人',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '联系电话',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '用途描述',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '备注',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
  {
    name: 'iron',
    label: '权限管辖单位',
    field: 'iron',
    sortable: true,
    sort: (a: any, b: any) => parseInt(a, 10) - parseInt(b, 10),
  },
]

const rows = [
  {
    name: 'Frozen Yogurt',
    calories: 159,
    fat: 6.0,
    carbs: 24,
    protein: 4.0,
    sodium: 87,
    calcium: '14%',
    iron: '1%',
  },
  {
    name: 'Ice cream sandwich',
    calories: 237,
    fat: 9.0,
    carbs: 37,
    protein: 4.3,
    sodium: 129,
    calcium: '8%',
    iron: '1%',
  },
  {
    name: 'Eclair',
    calories: 262,
    fat: 16.0,
    carbs: 23,
    protein: 6.0,
    sodium: 337,
    calcium: '6%',
    iron: '7%',
  },
  {
    name: 'Cupcake',
    calories: 305,
    fat: 3.7,
    carbs: 67,
    protein: 4.3,
    sodium: 413,
    calcium: '3%',
    iron: '8%',
  },
  {
    name: 'Gingerbread',
    calories: 356,
    fat: 16.0,
    carbs: 49,
    protein: 3.9,
    sodium: 327,
    calcium: '7%',
    iron: '16%',
  },
  {
    name: 'Jelly bean',
    calories: 375,
    fat: 0.0,
    carbs: 94,
    protein: 0.0,
    sodium: 50,
    calcium: '0%',
    iron: '0%',
  },
  {
    name: 'Lollipop',
    calories: 392,
    fat: 0.2,
    carbs: 98,
    protein: 0,
    sodium: 38,
    calcium: '0%',
    iron: '2%',
  },
  {
    name: 'Honeycomb',
    calories: 408,
    fat: 3.2,
    carbs: 87,
    protein: 6.5,
    sodium: 562,
    calcium: '0%',
    iron: '45%',
  },
  {
    name: 'Donut',
    calories: 452,
    fat: 25.0,
    carbs: 51,
    protein: 4.9,
    sodium: 326,
    calcium: '2%',
    iron: '22%',
  },
  {
    name: 'KitKat',
    calories: 518,
    fat: 26.0,
    carbs: 65,
    protein: 7,
    sodium: 54,
    calcium: '12%',
    iron: '6%',
  },
]
</script>
