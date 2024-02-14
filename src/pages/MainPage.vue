<script lang="ts" setup>
import BarChart from '../shared/ui/BarChart/BarChart.vue';
import DoughnutChart from '../shared/ui/DoughnutChart/DoughnutChart.vue';
import LineChart from '../shared/ui/LineChart/LineChart.vue';
import PieChart from '../shared/ui/PieChart/PieChart.vue';
import ShopCard from '../entities/Shop/ui/ShopCard/ShopCard.vue';
import { reactive, onMounted } from 'vue';
import { useStatisticsStore } from '../entities/Statistics';
import { storeToRefs } from 'pinia';

const store = useStatisticsStore()

const shop1 = reactive({
  name: 'Магазин 1',
  amountOrderSum: 30000,
  orderQuantity: 85,
  productsQuantity: 23,
});

const shop2 = reactive({
  name: 'Магазин 2',
  amountOrderSum: 30000,
  orderQuantity: 85,
  productsQuantity: 23,
});

const { statistics } = storeToRefs(store);

onMounted(async () => {
  await store.fetchData();
  console.log("store statistic", statistics?.value)
});

</script>

<template>
  <el-row class="mb-4" :gutter="20">
    <el-col :span="12">
      <div class="chart-container">
        <ShopCard :shop="shop1" />
      </div>
    </el-col>

    <el-col :span="12" class="mb-2">
      <div class="chart-container">
        <ShopCard :shop="shop2" />
      </div>
    </el-col>

    <el-col :span="12">
      <div class="chart-container">
        <el-card>
          <BarChart />
        </el-card>
      </div>

    </el-col>

    <el-col :span="12">
      <div class="chart-container">
        <el-card class="mt-2">
          <LineChart />
        </el-card>
      </div>

    </el-col>

    <el-col :span="12">
      <div class="chart-container">
        <el-card>
          <PieChart />
        </el-card>
      </div>

    </el-col>

    <el-col :span="12">
      <div class="chart-container">
        <el-card>
          <DoughnutChart />
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>
<style>
.chart-container {
  margin: 20px 0;
}
</style>
