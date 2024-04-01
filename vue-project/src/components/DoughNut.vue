<template>
    <div id="chart1">
    <Doughnut :data="data" :options="options" />
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
    .chart1{
      
      height:800px;
      background-color: black;
  
    }
    </style>