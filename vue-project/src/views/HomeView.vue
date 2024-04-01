<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import chartChaer from '../components/chartChaer.vue'
import BarChart from '../components/BarChart.vue'
import RadarChart from '../components/RadarChart.vue'
import BubbleChart from '../components/BubbleChart.vue'
import DoughNut from '../components/DoughNut.vue'
import PolarArea from '../components/PolarArea.vue'
import LineChart from '../components/LineChart.vue'
import PieChart from '../components/PieChart.vue'

const chartPath = document?.getElementById("charts")?.value ?? "BarChart";
var chart = () => import('../components/' + chartPath + '.vue');


</script>

<!-- <script lang="ts">
  document.getElementById("charts").addEventListener("change", function() {
    alert("The text has been changed.");
    chartPath = document?.getElementById("charts").value ?? "BarChart";
    chart = () => import('../components/' + chartPath + '.vue');
  });

</script> -->

<template>
  <main>
    <form action="">
  <label for="charts">Choose a Chart:</label>
  <select name="charts" id="charts">
    <optgroup label="mm Charts">
      <option value="BarChart">BarChart</option>
      <option value="RadarChart">RadarChart</option>
    </optgroup>
    <optgroup label="les chartier charts">
      <option value="mercedes">Mercedes</option>
      <option value="audi">Audi</option>
    </optgroup>
  </select>
  <br><br>
  <input type="submit" value="Submit">
</form>
    <chartChaer />
    <chartPath />
    <DoughNut />
    <PolarArea />
   
    <LineChart />
    <PieChart />
    
    
    <BarChart />
    <RadarChart />
    
  </main>
</template>

bar doughnut line pie polar radar 