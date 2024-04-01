import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { options } from '@/components/chartConfig'
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