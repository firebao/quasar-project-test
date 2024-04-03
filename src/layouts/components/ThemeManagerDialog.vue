<template>
  <q-dialog v-model="dialogVisible">
    <q-card style="width: 650px">
      <q-card-section class="row items-center q-pb-none q-pt-xs card-header">
        <div class="text-h6 text-teal">主题管理</div>
        <q-space />
        <q-btn v-close-popup icon="fa fa-close" flat round dense color="teal">
          <q-tooltip>关闭</q-tooltip>
        </q-btn>
      </q-card-section>

      <q-card-section class="theme-card">
        <theme-list></theme-list>
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ThemeList from './ThemeList.vue'
const dialogVisible = ref(false)
const onLayerClick = () => {
  dialogVisible.value = true
}
</script>
