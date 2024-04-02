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
        const agencyAmtTotArr = {};
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
          agencyAmtTotArr[NYCAgency] = { //Stores the totals for the different properties for each department
            agencyPlanAmtSum,
            agencyPlanAmtSumYr1,
            agencyPlanAmtSumYr2,
            agencyActAmtSum,
            agencyActAmtSumYr1,
            agencyActAmtSumYr2,
            agencyActAmtSumYr3
          };
        });
        console.log(agencyAmtTotArr); //Logs the agencyPlanAmtTotArr

        


        

    



        //Sort By Row Id (Spending / Headcount / Funding --------------------------------------------------------------------------------------------------------------------
        const rowidSortNYCAPI = {}; //Filters the original data by spending/ headcount/ funding
        jsonNYCAPI.forEach(dataPtNYCAPI => {
          if (!rowidSortNYCAPI[dataPtNYCAPI.row_id]) {
            rowidSortNYCAPI[dataPtNYCAPI.row_id] = [];
          }
          rowidSortNYCAPI[dataPtNYCAPI.row_id].push(dataPtNYCAPI); 
        });
        console.log(rowidSortNYCAPI);

        const rowidAmtTotArr = {}; //Sums up all of the values within each row id
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

        const agencyCodeSortTotNYCAPI = {}; // Final object to store processed data
        Object.keys(agencyCodeSortNYCAPI).forEach(spendingType => {
          agencyCodeSortTotNYCAPI[spendingType] = {};
          agencyCodeSortNYCAPI[spendingType].forEach(dataPtNYCAPI => {
            if (!agencyCodeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id]) {
              agencyCodeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id] = {
                agencyCodePlanAmtSum: 0,
                agencyCodePlanAmtSumYr1: 0,
                agencyCodePlanAmtSumYr2: 0,
                agencyCodeActAmtSum: 0,
                agencyCodeActAmtSumYr1: 0,
                agencyCodeActAmtSumYr2: 0,
                agencyCodeActAmtSumYr3: 0,
              };
            }
            const agencyCodePlanAmtSumCounter = (parseInt(dataPtNYCAPI.plan_amount_year_1) || 0) + (parseInt(dataPtNYCAPI.plan_amount_year_2) || 0);
            const agencyCodePlanAmtSumYr1Counter = (parseInt(dataPtNYCAPI.plan_amount_year_1) || 0);
            const agencyCodePlanAmtSumYr2Counter = (parseInt(dataPtNYCAPI.plan_amount_year_2) || 0);
            const agencyCodeActAmtSumCounter = (parseInt(dataPtNYCAPI.year_1_actual) || 0) + (parseInt(dataPtNYCAPI.year_2_actual) || 0) + (parseInt(dataPtNYCAPI.year_3_actual) || 0);
            const agencyCodeActAmtSumYr1Counter = (parseInt(dataPtNYCAPI.year_1_actual) || 0);
            const agencyCodeActAmtSumYr2Counter = (parseInt(dataPtNYCAPI.year_2_actual) || 0);
            const agencyCodeActAmtSumYr3Counter = (parseInt(dataPtNYCAPI.year_3_actual) || 0);
            agencyCodeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].agencyCodePlanAmtSum += agencyCodePlanAmtSumCounter;
            agencyCodeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].agencyCodePlanAmtSumYr1 += agencyCodePlanAmtSumYr1Counter;
            agencyCodeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].agencyCodePlanAmtSumYr2 += agencyCodePlanAmtSumYr2Counter;
            agencyCodeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].agencyCodeActAmtSum += agencyCodeActAmtSumCounter;
            agencyCodeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].agencyCodeActAmtSumYr1 += agencyCodeActAmtSumYr1Counter;
            agencyCodeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].agencyCodeActAmtSumYr2 += agencyCodeActAmtSumYr2Counter;
            agencyCodeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].agencyCodeActAmtSumYr3 += agencyCodeActAmtSumYr3Counter;
          });
        });
        console.log(agencyCodeSortTotNYCAPI); 
        



        //Sort By Spending Type Sort --------------------------------------------------------------------------------------------------------------------
        
        
        
        
        const spendingTypeSortNYCAPI = {}; 
        jsonNYCAPI.forEach(dataPtNYCAPI => {
          if (!spendingTypeSortNYCAPI[dataPtNYCAPI.spending_type]) {
            spendingTypeSortNYCAPI[dataPtNYCAPI.spending_type] = [];
          }
          spendingTypeSortNYCAPI[dataPtNYCAPI.spending_type].push(dataPtNYCAPI); 
        });
        console.log(spendingTypeSortNYCAPI); 

        const spendingTypeSortTotNYCAPI = {}; // Final object to store processed data
        Object.keys(spendingTypeSortNYCAPI).forEach(spendingType => {
          spendingTypeSortTotNYCAPI[spendingType] = {};
          spendingTypeSortNYCAPI[spendingType].forEach(dataPtNYCAPI => {
            if (!spendingTypeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id]) {
              spendingTypeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id] = {
                spendingTypePlanAmtSum: 0,
                spendingTypePlanAmtSumYr1: 0,
                spendingTypePlanAmtSumYr2: 0,
                spendingTypeActAmtSum: 0,
                spendingTypeActAmtSumYr1: 0,
                spendingTypeActAmtSumYr2: 0,
                spendingTypeActAmtSumYr3: 0,
              };
            }
            const spendingTypePlanAmtSumCounter = (parseInt(dataPtNYCAPI.plan_amount_year_1) || 0) + (parseInt(dataPtNYCAPI.plan_amount_year_2) || 0);
            const spendingTypePlanAmtSumYr1Counter = (parseInt(dataPtNYCAPI.plan_amount_year_1) || 0);
            const spendingTypePlanAmtSumYr2Counter = (parseInt(dataPtNYCAPI.plan_amount_year_2) || 0);
            const spendingTypeActAmtSumCounter = (parseInt(dataPtNYCAPI.year_1_actual) || 0) + (parseInt(dataPtNYCAPI.year_2_actual) || 0) + (parseInt(dataPtNYCAPI.year_3_actual) || 0);
            const spendingTypeActAmtSumYr1Counter = (parseInt(dataPtNYCAPI.year_1_actual) || 0);
            const spendingTypeActAmtSumYr2Counter = (parseInt(dataPtNYCAPI.year_2_actual) || 0);
            const spendingTypeActAmtSumYr3Counter = (parseInt(dataPtNYCAPI.year_3_actual) || 0);
            spendingTypeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].spendingTypePlanAmtSum += spendingTypePlanAmtSumCounter;
            spendingTypeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].spendingTypePlanAmtSumYr1 += spendingTypePlanAmtSumYr1Counter;
            spendingTypeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].spendingTypePlanAmtSumYr2 += spendingTypePlanAmtSumYr2Counter;
            spendingTypeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].spendingTypeActAmtSum += spendingTypeActAmtSumCounter;
            spendingTypeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].spendingTypeActAmtSumYr1 += spendingTypeActAmtSumYr1Counter;
            spendingTypeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].spendingTypeActAmtSumYr2 += spendingTypeActAmtSumYr2Counter;
            spendingTypeSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].spendingTypeActAmtSumYr3 += spendingTypeActAmtSumYr3Counter;
          });
        });
        console.log(spendingTypeSortTotNYCAPI); 




        //Sort By Spending Type Description Sort --------------------------------------------------------------------------------------------------------------------
        
        
        
        
        const spendingTypeDescriptionSortNYCAPI = {}; 
        jsonNYCAPI.forEach(dataPtNYCAPI => {
          if (!spendingTypeDescriptionSortNYCAPI[dataPtNYCAPI.spending_type_description]) {
            spendingTypeDescriptionSortNYCAPI[dataPtNYCAPI.spending_type_description] = [];
          }
          spendingTypeDescriptionSortNYCAPI[dataPtNYCAPI.spending_type_description].push(dataPtNYCAPI); 
        });
        console.log(spendingTypeDescriptionSortNYCAPI); 
        const spendingTypeDescriptionSortTotNYCAPI = {}; 
        Object.keys(spendingTypeDescriptionSortNYCAPI).forEach(spendingType => {
          spendingTypeDescriptionSortTotNYCAPI[spendingType] = {};
          spendingTypeDescriptionSortNYCAPI[spendingType].forEach(dataPtNYCAPI => {
            if (!spendingTypeDescriptionSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id]) {
              spendingTypeDescriptionSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id] = {
                spendingTypePlanAmtSum: 0,
                spendingTypePlanAmtSumYr1: 0,
                spendingTypePlanAmtSumYr2: 0,
              };
            }
            const spendingTypePlanAmtCounter = (parseInt(dataPtNYCAPI.plan_amount_year_1) || 0) + (parseInt(dataPtNYCAPI.plan_amount_year_2) || 0);
            const spendingTypePlanAmtYr1Counter = (parseInt(dataPtNYCAPI.plan_amount_year_1) || 0);
            const spendingTypePlanAmtYr2Counter = (parseInt(dataPtNYCAPI.plan_amount_year_2) || 0);
            spendingTypeDescriptionSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].spendingTypePlanAmtSum += spendingTypePlanAmtCounter;
            spendingTypeDescriptionSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].spendingTypePlanAmtSumYr1 += spendingTypePlanAmtYr1Counter;
            spendingTypeDescriptionSortTotNYCAPI[spendingType][dataPtNYCAPI.row_id].spendingTypePlanAmtSumYr2 += spendingTypePlanAmtYr2Counter;
          });
        });
        console.log(spendingTypeDescriptionSortTotNYCAPI); 
        
        
        
        
        //Sort By Budget Function Description Sort --------------------------------------------------------------------------------------------------------------------
        
        
        
        
        const bgtFuncSrtAPI = {};
        jsonNYCAPI.forEach(dataPtNYCAPI => {
          if (!bgtFuncSrtAPI[dataPtNYCAPI.budget_function]) {
            bgtFuncSrtAPI[dataPtNYCAPI.budget_function] = [];
          }
          bgtFuncSrtAPI[dataPtNYCAPI.budget_function].push(dataPtNYCAPI);
        });
        console.log(bgtFuncSrtAPI); //Filters by budget function

        const bgtRwIdSrtAPI = {}; 
        Object.keys(bgtFuncSrtAPI).forEach(budgetFunction => {
          bgtRwIdSrtAPI[budgetFunction] = {};
          bgtFuncSrtAPI[budgetFunction].forEach(dataPtNYCAPI => {
            if (!bgtRwIdSrtAPI[budgetFunction][dataPtNYCAPI.row_id]) {
              bgtRwIdSrtAPI[budgetFunction][dataPtNYCAPI.row_id] = {
                bgtRwIdPlanAmtSum: 0,
                bgtRwIdPlanAmtSumYr1: 0,
                bgtRwIdPlanAmtSumYr2: 0,
                bgtRwIdActAmtSum: 0,
                bgtRwIdActAmtSumYr1: 0,
                bgtRwIdActAmtSumYr2: 0,
                bgtRwIdActAmtSumYr3: 0,
              };
            }
            const bgtRwIdPlanAmtCounter = (parseInt(dataPtNYCAPI.plan_amount_year_1) || 0) + (parseInt(dataPtNYCAPI.plan_amount_year_2) || 0);
            const bgtRwIdPlanAmtYr1Counter = (parseInt(dataPtNYCAPI.plan_amount_year_1) || 0);
            const bgtRwIdPlanAmtYr2Counter = (parseInt(dataPtNYCAPI.plan_amount_year_2) || 0);
            const bgtRwIdActAmtCounter = (parseInt(dataPtNYCAPI.year_1_actual) || 0) + (parseInt(dataPtNYCAPI.year_2_actual) || 0) + (parseInt(dataPtNYCAPI.year_3_actual) || 0);
            const bgtRwIdActAmtYr1Counter = (parseInt(dataPtNYCAPI.year_1_actual) || 0);
            const bgtRwIdActAmtYr2Counter = (parseInt(dataPtNYCAPI.year_2_actual) || 0);
            const bgtRwIdActAmtYr3Counter = (parseInt(dataPtNYCAPI.year_3_actual) || 0);
            bgtRwIdSrtAPI[budgetFunction][dataPtNYCAPI.row_id].bgtRwIdPlanAmtSum += bgtRwIdPlanAmtCounter;
            bgtRwIdSrtAPI[budgetFunction][dataPtNYCAPI.row_id].bgtRwIdPlanAmtSumYr1 += bgtRwIdPlanAmtYr1Counter;
            bgtRwIdSrtAPI[budgetFunction][dataPtNYCAPI.row_id].bgtRwIdPlanAmtSumYr2 += bgtRwIdPlanAmtYr2Counter;
            bgtRwIdSrtAPI[budgetFunction][dataPtNYCAPI.row_id].bgtRwIdActAmtSum += bgtRwIdActAmtCounter;
            bgtRwIdSrtAPI[budgetFunction][dataPtNYCAPI.row_id].bgtRwIdActAmtSumYr1 += bgtRwIdActAmtYr1Counter;
            bgtRwIdSrtAPI[budgetFunction][dataPtNYCAPI.row_id].bgtRwIdActAmtSumYr2 += bgtRwIdActAmtYr2Counter;
            bgtRwIdSrtAPI[budgetFunction][dataPtNYCAPI.row_id].bgtRwIdActAmtSumYr3 += bgtRwIdActAmtYr3Counter;
          });
        });

        console.log(bgtRwIdSrtAPI); // Logs the bgtRwIdSrtAPI with summed values
        //------------------------------------------------------------------------------------------------------------------------------------------------------
        dataNYCAPI.value = jsonNYCAPI;
        console.log(dataNYCAPI.value); //Logs every data point */
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


