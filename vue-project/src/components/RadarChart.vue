<template>
  <div id="chart1">
    <Radar :data="data" :options="options" />
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
  .chart1{
    
    height:800px;
    background-color: black;

  }
  </style>