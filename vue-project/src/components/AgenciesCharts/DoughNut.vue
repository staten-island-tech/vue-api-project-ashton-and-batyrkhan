<template>
  <div id="chart1">
    <Doughnut :data="data" :options="options" id="chart1" />
  </div>
</template>

<script lang="ts">
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Doughnut } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Doughnut
  },
  data() {
    return chartConfig
  }
}
</script>

<style scoped>
#chart1 {
  width: 1000px;
  height: 1000px;
  justify-content: center;
  margin-right: auto;
  margin-left: auto;
}
</style>./AgenciesCharts/chartConfig.js./DoughNut.vue/index.js