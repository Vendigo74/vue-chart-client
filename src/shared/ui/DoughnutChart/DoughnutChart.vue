<template>
    <Doughnut :data="data" :options="options" />
  </template>
  
  <script lang="ts">
  import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
  import { Doughnut } from 'vue-chartjs'
  import * as doughnutChartConfig from './doughnutChartConfig'
  
  ChartJS.register(ArcElement, Tooltip, Legend)
  
  export default {
    name: 'DoughnutChart',
    components: {
      Doughnut
    },
    data() {
      return doughnutChartConfig
    }
  }
  </script>
  