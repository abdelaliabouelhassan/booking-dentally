<template>
  <div class="my-component-scoped">
    <div class="">
sdsfdsfdsfdsf
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref, watch } from "vue";
import axios from "axios";
axios.defaults.baseURL = "https://api.dentally.co/v1/";
axios.defaults.headers.common["Authorization"] =
  "Bearer " + "VgcjQR3YAVYWgI-1CTh27ap-y4fyuokf8hwGNLmPZk0";

export default {
  setup() {
  
    const observer = ref(null);
    const dark = ref(false);
    
   
    onMounted(() => {
      dark.value = document.documentElement.classList.contains("dark");

      observer.value = new MutationObserver((records) => {
        records.forEach((record) => {
          dark.value = record.target.classList.contains("dark");
        });
      });

      observer.value.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
        childList: false,
        characterData: false,
      });
    });

  
    //
    const practitioners = ref([]);
    const loading = ref(false);
    const participantIds = ref([14615,44633,46230,26362]);
    const participantAvaliable = ref([]);
    const participantWithAvailable = ref([]);
    const loadDentist = () => {
      loading.value = true;
      axios.get("practitioners").then((response) => {
        practitioners.value = response.data.practitioners;
        loading.value = false;
        console.log(response.data);
        loadDentistAvailable();
      });
    };
    const idsCount = ref(0);
    const loadDentistAvailable = async () => {
      let start_time = new Date();
      //end time + the rest of the month
      let end_time = new Date();
      end_time.setMonth(end_time.getMonth() + 2);
      // let end_time = new Date();
      // end_time.setDate(end_time.getDate() + 30);
      let startTimeString = start_time.toISOString();
      let endTimeString = end_time.toISOString();
      console.log(idsCount.value);
      loading.value = true;
     await axios.get("appointments/availability?practitioner_ids%5B%5D=" + participantIds.value[[idsCount.value]] + "&start_time=" +startTimeString + "&finish_time=" + endTimeString ).then((response) => {
        participantAvaliable.value.push({
          id: participantIds[idsCount],
          thisMonth: response.data.availability.length,
        });
        loading.value = false;
        console.log(response.data);
      });
      idsCount.value = idsCount.value + 1;
      if(idsCount.value <  participantIds.value.length){
        loadDentistAvailable();
      }else{
        console.log("gg")
        JoinParticipantWithAvailable();
      }
    };

    onMounted(() => {
      loadDentist();
    });


    const JoinParticipantWithAvailable = () => {
      participantWithAvailable.value = [];
      for (let i = 0; i < participantIds.value.length; i++) {
        for (let j = 0; j < practitioners.value.length; j++) {
          if (participantIds.value[i] == practitioners.value[j].id) {
            participantWithAvailable.value.push({
              id: participantIds.value[i],
              name: practitioners.value[j].user.first_name + " " + practitioners.value[j].user.last_name,
              thisMonth: participantAvaliable.value[i].thisMonth,
            });
          }
        }
      }
     
     
      console.log(participantWithAvailable.value);
    };

    watch(participantAvaliable, () => {
      JoinParticipantWithAvailable();
    });

    return {
      dark,
      loading,
      practitioners,
      participantIds,
      participantAvaliable,
      participantWithAvailable,
    };
  
  },
};
</script>

<style>
/* Scoped Styles */
</style>
