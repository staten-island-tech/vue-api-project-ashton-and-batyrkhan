<template>
    <div class ="chart1">
    <Line :data="data" :options="options" />
    </div>
  </template>
  
  <script lang="ts">
  import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  } from 'chart.js'
  import { Line } from 'vue-chartjs'
  import * as chartConfig from './chartConfig.js'
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  )
  
  export default {
    name: 'App',
    components: {
      Line
    },
    data() {
      return chartConfig
    }
  }
  </script>
  
    <style scoped>
    .chart1{
      
      height:800px;
      
  
    }
    </style>