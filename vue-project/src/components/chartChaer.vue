<template>
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
    />
  </template>
  
  <script>
  import { Bar } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
  
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)
  
  export default {
    name: 'BarChart',
    components: { Bar },
    data() {
      return {
        chartData: {
          labels: [ 'January', 'February', 'March' ],
          datasets: [ { data: [40, 3800, 12] } ]
        },
        chartOptions: {
          responsive: true
        }
      }
    }
  }
  import { onMounted, ref } from 'vue'

  
let filterOn = ref(false)
let ships = ref()
let gotData = ref(false)


  async function fetchShips() {
  const response = await fetch(
    'https://data.cityofnewyork.us/resource/gzfs-3h4m.json'
  )
  const array = await response.json()
  ships.value = array.ships
  gotData.value = true
  console.log(array)
}

onMounted(() => {
  fetchShips()
  console.log(ships)
})
  </script>