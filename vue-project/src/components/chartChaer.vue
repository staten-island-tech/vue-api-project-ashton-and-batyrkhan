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
        const linkNYCAPI = "https://data.cityofnewyork.us/resource/gzfs-3h4m.json?$limit=67000";
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

        //Sort By Row Id (Spending / Headcount / Funding --------------------------------------------------------------------------------------------------------------------
        const rowidSortNYCAPI = {}; 
        jsonNYCAPI.forEach(dataPtNYCAPI => {
          if (!rowidSortNYCAPI[dataPtNYCAPI.row_id]) {
            rowidSortNYCAPI[dataPtNYCAPI.row_id] = [];
          }
          rowidSortNYCAPI[dataPtNYCAPI.row_id].push(dataPtNYCAPI); 
        });
        console.log(rowidSortNYCAPI); 

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
</script>