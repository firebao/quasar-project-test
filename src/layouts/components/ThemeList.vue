<!--
 * @Author       : wwj 318348750@qq.com
 * @Date         : 2024-03-21 17:54:29
 * @LastEditors  : wwj 318348750@qq.com
 * @LastEditTime : 2024-04-18 14:39:04
 * @Description  : 主题列表
 *
 * Copyright (c) 2024 by sjft email: 318348750@qq.com, All Rights Reserved.
-->
<template>
  <q-table
    class="theme-table-list"
    :columns="columns"
    :rows="rows"
    dense
    hide-pagination
    data-test="table"
  >
    <template #body="props">
      <q-tr :props="props" data-test="row">
        <q-td key="title">{{ props.row.title }}</q-td>
        <q-td key="preview">{{ props.row.preview }}</q-td>
        <q-td key="handler">
          <q-btn
            v-if="activeName === props.row.name"
            class="active"
            icon="fa fa-circle-check"
            rounded
            outline
            data-test="active"
          >
            &nbsp;已激活
          </q-btn>
          <q-btn
            v-else
            rounded
            outline
            data-test="inactive"
            @click="handleSelectTheme(props.row.name)"
          >
            使用
          </q-btn>
        </q-td>
      </q-tr>
    </template>
  </q-table>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue'
import { stores } from 'src/stores/index.js'
import { useTheme } from 'src/hooks/useTheme.js'
import { setCssVar } from 'quasar'

type Columns = {
  id: string
  label: string
  field?: string
  align: string
}

const columns = ref<Array<Columns>>([
  { id: 'title', label: '名称', field: 'title', align: 'center' },
  { id: 'preview', label: '预览', field: 'preview', align: 'center' },
  { id: 'handler', label: '操作', align: 'center' },
])

const rows = computed(() => {
  return stores.system.useThemeStore().list
})

const { theme, activeName } = useTheme()

const handleSelectTheme = async (name: string) => {
  await stores.system.useThemeStore().set(name)
  setCssVar('primary', theme.value.global.themeColor as string)
}
</script>

<style lang="scss">
.theme-table-list {
  width: 100%;
  color: v-bind('theme.global.themeQCardColor') !important;
  background: transparent !important;
  .q-btn.active {
    color: v-bind('theme.global.themeColorActive');
  }
}
</style>
