<script setup lang="ts">
import chartChaer from '../components/chartChaer.vue'
import BarChart from '../components/AgenciesCharts/BarChart.vue'
import RadarChart from '../components/AgenciesCharts/RadarChart.vue'
import DoughNut from '../components/AgenciesCharts/DoughNut.vue'
import PolarArea from '../components/AgenciesCharts/PolarArea.vue'
import LineChart from '../components/AgenciesCharts/LineChart.vue'
import PieChart from '../components/AgenciesCharts/PieChart.vue'



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
    <h2>The following is a doughnut style chart representing the plan and actual amounts for each of the departments in
      US dollars. Please note that the following is not a perfect representation of the city's budget as the data within
      the API only contains a small part of the budget.</h2>
    <DoughNut />
    <h2>The following is a PolarArea style chart representing the plan and actual amounts for each of the departments in
      US dollars. Please note that the following is not a perfect representation of the city's budget as the data within
      the API only contains a small part of the budget.</h2>
    <PolarArea />
    <h2>The following is a line style chart representing the plan and actual amounts for each of the departments in US
      dollars. Please note that the following is not a perfect representation of the city's budget as the data within
      the API only contains a small part of the budget.</h2>
    <LineChart />
    <h2>The following is a pie style chart representing the plan and actual amounts for each of the departments in US
      dollars. Please note that the following is not a perfect representation of the city's budget as the data within
      the API only contains a small part of the budget.</h2>
    <PieChart />
    <h2>The following is a bar style chart representing the plan and actual amounts for each of the departments in US
      dollars. Please note that the following is not a perfect representation of the city's budget as the data within
      the API only contains a small part of the budget.</h2>
    <BarChart />
    <h2>The following is a radar style chart representing the plan and actual amounts for each of the departments in US
      dollars. Please note that the following is not a perfect representation of the city's budget as the data within
      the API only contains a small part of the budget.</h2>
    <RadarChart />
  </main>
</template>
../components/AgenciesCharts/BarChart.vue../components/AgenciesCharts/DoughNut.vue../components/AgenciesCharts/LineChart.vue../components/AgenciesCharts/PieChart.vue../components/AgenciesCharts/PolarArea.vue../components/AgenciesCharts/RadarChart.vue
