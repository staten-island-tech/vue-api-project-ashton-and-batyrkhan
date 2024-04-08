<template>
  <div id="chart1">
    <PolarArea :data="data" :options="options" id="chart1" />
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
import { PolarArea } from 'vue-chartjs'
import * as chartConfig from './chartConfig.js'

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    PolarArea
  },
  data() {
    return chartConfig
  }
}
</script>

<style >
#chart1 {
  width: 100vw;
}
</style>./AgenciesCharts/chartConfig.js./PolarArea.vue/index.js