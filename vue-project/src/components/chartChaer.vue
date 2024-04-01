<template>
  <div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
export default {
  setup() {
    const dataNYCAPI = ref([]);
    onMounted(async () => {
      try {
        const linkNYCAPI = "https://data.cityofnewyork.us/resource/gzfs-3h4m.json?$limit=6700";
        const responseNYCAPI = await fetch(linkNYCAPI);
        if(!responseNYCAPI.ok) {//Error handling.
            if (responseNYCAPI.status === 404) {
                throw new Error("404 Data not Found. Oh no! Check if your input is correct.");
            } else if (responseNYCAPI.status === 403) {
                throw new Error("403 Access forbidden. Well this shouldn't happen...");
            } else {
                throw new Error(responseNYCAPI.status + ". Idk what to tell you, try searching for this error on the web.");
            };
        }; 
        const jsonNYCAPI = await responseNYCAPI.json(); //Stores the response from the NYC API as json




        //Sort By Agency------------------------------------------------------------------------------------------------------------------------------------------------------
        const agencySortNYCAPI = {}; //Array for the NYC API datapoints after they have been sorted by agency_name. Holds array of arrays based on agency names.
        jsonNYCAPI.forEach(dataPtNYCAPI => {
          if (!agencySortNYCAPI[dataPtNYCAPI.agency_name]) { //Check if agency_name sub arrays are present
            agencySortNYCAPI[dataPtNYCAPI.agency_name] = []; //If a agency_name sub array is not present, one will be created
          }
          agencySortNYCAPI[dataPtNYCAPI.agency_name].push(dataPtNYCAPI); //Gains access to an agency array with the corresponding name and adds the data point to it. 
        });
        console.log(agencySortNYCAPI); //Logs every data point (filtered by agency_name property)
        const agencyPlanAmtTotArr = {};
        Object.keys(agencySortNYCAPI).forEach(NYCAgency => { //Calculate the totals
          let agencyPlanAmtSum = 0;
          let agencyPlanAmtSumYr1 = 0;
          let agencyPlanAmtSumYr2 = 0;
          let agencyActAmtSum = 0;
          let agencyActAmtSumYr1 = 0;
          let agencyActAmtSumYr2 = 0;
          let agencyActAmtSumYr3 = 0;

          agencySortNYCAPI[NYCAgency].forEach(dataPtNYCAPI => {
            agencyPlanAmtSum += (parseInt(dataPtNYCAPI.plan_amount_year_1) || 0) + (parseInt(dataPtNYCAPI.plan_amount_year_2) || 0);
            agencyPlanAmtSumYr1 += (parseInt(dataPtNYCAPI.plan_amount_year_1) || 0);
            agencyPlanAmtSumYr2 += (parseInt(dataPtNYCAPI.plan_amount_year_2) || 0);
            agencyActAmtSum += (parseInt(dataPtNYCAPI.year_1_actual) || 0) + (parseInt(dataPtNYCAPI.year_2_actual) || 0)+ (parseInt(dataPtNYCAPI.year_3_actual) || 0);
            agencyActAmtSumYr1 += (parseInt(dataPtNYCAPI.year_1_actual) || 0);
            agencyActAmtSumYr2 += (parseInt(dataPtNYCAPI.year_2_actual) || 0);
            agencyActAmtSumYr3 += (parseInt(dataPtNYCAPI.year_3_actual) || 0);
          });
          agencyPlanAmtTotArr[NYCAgency] = { //Stores the totals for the different properties for each department
            agencyPlanAmtSum,
            agencyPlanAmtSumYr1,
            agencyPlanAmtSumYr2,
            agencyActAmtSum,
            agencyActAmtSumYr1,
            agencyActAmtSumYr2,
            agencyActAmtSumYr3
          };
        });
        console.log(agencyPlanAmtTotArr); //Logs the agencyPlanAmtTotArr

        


        

    



        //Sort By Row Id (Spending / Headcount / Funding --------------------------------------------------------------------------------------------------------------------
        const rowidSortNYCAPI = {}; 
        jsonNYCAPI.forEach(dataPtNYCAPI => {
          if (!rowidSortNYCAPI[dataPtNYCAPI.row_id]) {
            rowidSortNYCAPI[dataPtNYCAPI.row_id] = [];
          }
          rowidSortNYCAPI[dataPtNYCAPI.row_id].push(dataPtNYCAPI); 
        });
        console.log(rowidSortNYCAPI);

        const rowidAmtTotArr = {};
        Object.keys(rowidSortNYCAPI).forEach(rowIdFunction => { //Calculate the totals
          let rowIdPlanAmtSum = 0;
          let rowIdPlanAmtSumYr1 = 0;
          let rowIdPlanAmtSumYr2 = 0;
          let rowIdActAmtSum = 0;
          let rowIdActAmtSumYr1 = 0;
          let rowIdActAmtSumYr2 = 0;
          let rowIdActAmtSumYr3 = 0;
          rowidSortNYCAPI[rowIdFunction].forEach(dataPtNYCAPI => {
            rowIdPlanAmtSum += (parseInt(dataPtNYCAPI.plan_amount_year_1) || 0) + (parseInt(dataPtNYCAPI.plan_amount_year_2) || 0);
            rowIdPlanAmtSumYr1 += (parseInt(dataPtNYCAPI.plan_amount_year_1) || 0);
            rowIdPlanAmtSumYr2 += (parseInt(dataPtNYCAPI.plan_amount_year_2) || 0);
            rowIdActAmtSum += (parseInt(dataPtNYCAPI.year_1_actual) || 0) + (parseInt(dataPtNYCAPI.year_2_actual) || 0) + (parseInt(dataPtNYCAPI.year_3_actual) || 0);
            rowIdActAmtSumYr1 += (parseInt(dataPtNYCAPI.year_1_actual) || 0);
            rowIdActAmtSumYr2 += (parseInt(dataPtNYCAPI.year_2_actual) || 0);
            rowIdActAmtSumYr3 += (parseInt(dataPtNYCAPI.year_3_actual) || 0);
          });
          rowidAmtTotArr[rowIdFunction] = {
            rowIdPlanAmtSum,
            rowIdPlanAmtSumYr1,
            rowIdPlanAmtSumYr2,
            rowIdActAmtSum,
            rowIdActAmtSumYr1,
            rowIdActAmtSumYr2,
            rowIdActAmtSumYr3
          };
        });
        console.log(rowidAmtTotArr);

        


        //Sort By Agency Code --------------------------------------------------------------------------------------------------------------------
        const agencyCodeSortNYCAPI = {}; 
        jsonNYCAPI.forEach(dataPtNYCAPI => {
          if (!agencyCodeSortNYCAPI[dataPtNYCAPI.agency_code]) {
            agencyCodeSortNYCAPI[dataPtNYCAPI.agency_code] = [];
          }
          agencyCodeSortNYCAPI[dataPtNYCAPI.agency_code].push(dataPtNYCAPI); 
        });
        console.log(agencyCodeSortNYCAPI); 
        
        //Sort By Spending Type Sort --------------------------------------------------------------------------------------------------------------------
        const spendingTypeSortNYCAPI = {}; 
        jsonNYCAPI.forEach(dataPtNYCAPI => {
          if (!spendingTypeSortNYCAPI[dataPtNYCAPI.spending_type]) {
            spendingTypeSortNYCAPI[dataPtNYCAPI.spending_type] = [];
          }
          spendingTypeSortNYCAPI[dataPtNYCAPI.spending_type].push(dataPtNYCAPI); 
        });
        console.log(spendingTypeSortNYCAPI); 

        //Sort By Spending Type Description Sort --------------------------------------------------------------------------------------------------------------------
        const spendingTypeDescriptionSortNYCAPI = {}; 
        jsonNYCAPI.forEach(dataPtNYCAPI => {
          if (!spendingTypeDescriptionSortNYCAPI[dataPtNYCAPI.spending_type_description]) {
            spendingTypeDescriptionSortNYCAPI[dataPtNYCAPI.spending_type_description] = [];
          }
          spendingTypeDescriptionSortNYCAPI[dataPtNYCAPI.spending_type_description].push(dataPtNYCAPI); 
        });
        console.log(spendingTypeDescriptionSortNYCAPI); 

        //Sort By Budget Function Description Sort --------------------------------------------------------------------------------------------------------------------
        const budgetFunctionSortNYCAPI = {}; 
        jsonNYCAPI.forEach(dataPtNYCAPI => {
          if (!budgetFunctionSortNYCAPI[dataPtNYCAPI.budget_function]) {
            budgetFunctionSortNYCAPI[dataPtNYCAPI.budget_function] = [];
          }
          budgetFunctionSortNYCAPI[dataPtNYCAPI.budget_function].push(dataPtNYCAPI); 
        });
        console.log(budgetFunctionSortNYCAPI); 

        //------------------------------------------------------------------------------------------------------------------------------------------------------
        dataNYCAPI.value = jsonNYCAPI;
        console.log(dataNYCAPI.value); //Logs every data point
      } catch (error) {
        console.log("Oh no, this is a rather unfortunate conundrum! Here's ur error :P" + error);
      }
    });
    return {
      dataNYCAPI
    };
  }
};

//export { agencyPlanAmtTotArr }; //Exports the agencyPlanAmtTotArr to be used in other components
//export { rowidAmtTotArr }; //Exports the rowidAmtTotArr to be used in other components
</script>


