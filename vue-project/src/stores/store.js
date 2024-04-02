import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { options } from '@/components/AgenciesCharts/chartConfig'
import agencyPlanAmtTotArr from '../components/chartChaer.vue'
import rowidAmtTotArr from '../components/chartChaer.vue'

export const useData = defineStore("data",{
State: () => {

  return {
    rowidAmtTotArr,
    agencyPlanAmtTotArr,
  };

},

});