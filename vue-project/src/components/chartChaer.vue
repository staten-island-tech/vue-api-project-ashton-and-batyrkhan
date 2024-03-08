<template>
  <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  <div class="container">
    <Bar v-if="loaded" :data="chartData" />
  </div>
</template>
  
<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

export default {
  name: 'BarChart',
  components: { Bar },
  data: () => ({
    loaded: false,
    chartData: null
  }),
  async mounted() {
    try {
      const { NYCData } = await fetch('https://data.cityofnewyork.us/resource/gzfs-3h4m.json');
      this.chartData = NYCData
      this.loaded = true
      console.log(NYCData)
    } catch (e) {
      console.error(e)
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
