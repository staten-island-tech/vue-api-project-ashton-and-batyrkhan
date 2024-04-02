<template>
  <div id="chart1">
    <Pie :data="data" :options="options" id="chart1" />
  </div>
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Pie
  },
  data() {
    return chartConfig
  }
}
</script>

<style scoped>
#chart1 {
  width: 105rem;
  height: 105rem;
}
</style>./AgenciesCharts/chartConfig.js./PieChart.vue/index.js