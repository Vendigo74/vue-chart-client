<template>
  <div class="main">
    <div class="container">
      <BarChart />
    </div>
    <div class="container">
      <DoughnutChart />
    </div>
    <div class="container">
      <PieChart />
    </div>
    <div class="container">
      <LineChart />
    </div>
  </div>
</template>

<script lang="ts">
import BarChart from './components/BarChart/BarChart.vue'
import DoughnutChart from './components/DoughnutChart/DoughnutChart.vue'
import PieChart from './components/PieChart/PieChart.vue'
import LineChart from './components/LineChart/LineChart.vue'


export default {
  name: 'App',
  components: {
    BarChart,
    DoughnutChart,
    PieChart,
    LineChart
  },
};
</script>
<style>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 60px;
}
.container {
  display: flex;
  width: 400px;
  height: 400px;
}
</style>
