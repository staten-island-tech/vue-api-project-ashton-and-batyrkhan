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
        if(!responseNYCAPI.ok) {
            if (responseNYCAPI.status === 404) {
                throw new Error("404 Data not Found. Oh no! Check if your input is correct.");
            } else if (responseNYCAPI.status === 403) {
                throw new Error("403 Access forbidden. Well this shouldn't happen...");
            } else {
                throw new Error(responseNYCAPI.status + ". Idk what to tell you, try searching for this error on the web.");
            };
        }; 
        const jsonData = await responseNYCAPI.json();
        dataNYCAPI.value = jsonData;
        console.log(dataNYCAPI.value);
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
