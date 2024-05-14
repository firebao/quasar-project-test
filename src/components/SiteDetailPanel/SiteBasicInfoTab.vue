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
          >站点基础信息面板</q-item-label
        >
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
          站点介绍
        </q-item-label>
        <q-item-label caption class="text-indent"
          >国网甘肃省电力公司，是国家电网有限公司的全资子公司，承担着建设、运营、发展甘肃电网的任务，为甘肃省经济社会发展提供安全持续可靠的电力保障。</q-item-label
        >
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label>
          <q-icon
            name="fa-solid fa-hands-holding"
            size="12px"
            class="q-mr-xs q-mb-md"
          ></q-icon>
          站点图片
        </q-item-label>
        <q-item-label caption>
          <q-carousel
            animated
            v-model="slide"
            autoplay
            height="160px"
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
            class="q-mr-xs q-mb-xs"
          ></q-icon>
          站点属性
        </q-item-label>
        <q-item-label style="height: 680px">
          <div v-for="(item, index) in attrList" :key="index">
            <div class="row q-pa-sm">
              <div class="col-5">{{ item.label }}</div>
              <div class="col-7 text-right">{{ item.value }}</div>
            </div>
            <q-separator></q-separator>
          </div>
        </q-item-label>
      </q-item-section>
    </q-item>
    <q-item>
      <q-item-section>
        <q-item-label>
          <q-icon
            name="fa-solid fa-hands-holding"
            size="12px"
            class="q-mr-xs q-mb-md"
          ></q-icon>
          大事记
        </q-item-label>
        <q-item-label caption>
          <q-carousel
            animated
            v-model="slide"
            height="160px"
            navigation
            autoplay
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
  </q-list>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const slide = ref(1)
const attrList = ref([
  { label: '名称:', value: 'xxx' },
  { label: '全局名称:', value: 'xxx' },
  { label: '简称:', value: 'xxx' },
  { label: '区域:', value: 'xxx' },
  { label: '站点类型:', value: 'xxx' },
  { label: '电压等级:', value: 'xxx' },
  { label: '地址:', value: 'xxx' },
  { label: '邮政编码:', value: 'xxx' },
  { label: '调度等级:', value: 'xxx' },
  { label: '投运日期:', value: 'xxx' },
  { label: '产权单位:', value: 'xxx' },
  { label: '维护单位:', value: 'xxx' },
  { label: '维护人:', value: 'xxx' },
  { label: '联系电话:', value: 'xxx' },
  { label: '站内联系电话:', value: 'xxx' },
  { label: '经度:', value: 'xxx' },
  { label: '纬度:', value: 'xxx' },
  { label: '备注:', value: 'xxx' },
  { label: '权限管理单位:', value: 'xxx' },
  { label: '统计单位:', value: 'xxx' },
])
</script>
<style lang="scss" scoped>
.text-indent {
  text-indent: 20px;
}
</style>
