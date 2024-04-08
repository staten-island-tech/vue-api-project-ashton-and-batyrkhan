import { ref, computed } from 'vue'
import { defineStore } from 'pinia'


export const useData = defineStore("data",{
State: () => {

  return {
    rowidAmtTotArr,
    agencyPlanAmtTotArr,
  };

},

});
 
// stores/store.js

/* export const useChartDataStore = defineStore({
  id: 'chartData',
  state: () => ({
    agencyAmtTotArr: {},
    rowidAmtTotArr: {},
    agencyCodeSortTotNYCAPI: {},
    spendingTypeSortTotNYCAPI: {},
    spendingTypeDescriptionSortTotNYCAPI: {},
    bgtRwIdSrtAPI: {}
  }),
  actions: {
    setAgencyAmtTotArr(data) {
      this.agencyAmtTotArr = data;
    },
    setRowidAmtTotArr(data) {
      this.rowidAmtTotArr = data;
    },
    setAgencyCodeSortTotNYCAPI(data) {
      this.agencyCodeSortTotNYCAPI = data;
    },
    setSpendingTypeSortTotNYCAPI(data) {
      this.spendingTypeSortTotNYCAPI = data;
    },
    setSpendingTypeDescriptionSortTotNYCAPI(data) {
      this.spendingTypeDescriptionSortTotNYCAPI = data;
    },
    setBgtRwIdSrtAPI(data) {
      this.bgtRwIdSrtAPI = data;
    }
  }
});
 */