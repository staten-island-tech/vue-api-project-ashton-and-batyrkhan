<template>
  <div id="chart1">
    <Bar :data="data" :options="options" />
  </div>
</template>

<script lang="ts">
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'
import * as chartConfig from './chartConfig'


ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default {
  name: 'App',
  components: {
    Bar
  },
  data() {
    return chartConfig
  },
}
</script>

<style scoped>
.chart1 {

  height: 1500px;

  background-color: black;

}
</style>../chartConfig.js./BarChart.vue/index.js