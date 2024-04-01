<template>
    <div id="chart1">
    <PolarArea :data="data" :options="options" />
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
  
    <style scoped>
    .chart1{
      
      height:800px;
      background-color: black;
  
    }
    </style>