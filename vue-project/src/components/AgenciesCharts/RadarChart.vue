<template>
  <div id="chart1">
    <Radar :data="data" :options="options" class="chart1" />
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js'
import { Radar } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
)

export default {
  name: 'App',
  components: {
    Radar
  },
  data() {
    return chartConfig
  }
}
</script>

<style scoped>
.chart1 {
  width: 2000px;
  height: 2000px;
}
</style>./AgenciesCharts/chartConfig.js./RadarChart.vue/index.js