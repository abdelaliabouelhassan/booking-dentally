<template>
  <div class="my-component-scoped">
    <div class=" w-full flex grid-cols-5 gap-10"  :class="{ dark: dark }">
      <div class=" w-full rounded-md bg-gray-400 dark:bg-gray-800 p-5 shadow-sm" v-for="(item,index,key) in participantWithAvailable" :key="key">
        <div class=" w-full flex flex-col items-center space-y-2">
          <div class=" w-[100px] h-[100px] rounded-full bg-gray-300 overflow-hidden">
            <img :src="item.user.image_url" :alt="item.name">
          </div>
           <div class=" flex flex-col items-center space-y-1">
            <span class=" text-sm font-bold text-gray-900 dark:text-gray-300">{{item.name}}</span>
          </div>
          <div class=" flex flex-col items-center space-y-1">
            <span class=" text-sm font-bold text-gray-900 dark:text-gray-300">THIS MONTH</span>
            <span class=" text-base font-bold text-blue-500">{{item.thisMonth}} Slots Available</span>
          </div>
            <div class=" flex flex-col items-center space-y-1">
            <span class=" text-sm font-bold text-gray-900 dark:text-gray-300">NEXT MONTH</span>
            <span class=" text-base font-bold text-blue-500">{{item.nextMonth}} Slots Available</span>
          </div>
        </div>
      </div>
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
    const participantIds = ref([14615,44633,46230,26362,72952]);
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
      end_time.setMonth(end_time.getMonth() + 1);
      let startTimeString = start_time.toISOString();
      let endTimeString = end_time.toISOString();
      let next_start_time = new Date();
      next_start_time.setMonth(next_start_time.getMonth() + 1);
      let next_end_time = new Date();
      next_end_time.setMonth(next_end_time.getMonth() + 2);
      let nextStartTimeString = next_start_time.toISOString();
      let nextEndTimeString = next_end_time.toISOString();
      console.log(idsCount.value);
      loading.value = true;
     await axios.get("appointments/availability?practitioner_ids%5B%5D=" + participantIds.value[[idsCount.value]] + "&start_time=" +startTimeString + "&finish_time=" + endTimeString ).then((response) => {
        participantAvaliable.value.push({
          id: participantIds[idsCount],
          thisMonth: response.data.availability.length,
          nextMonth:[],
        });
        loading.value = false;
        console.log(response.data);
      });
      await axios.get("appointments/availability?practitioner_ids%5B%5D=" + participantIds.value[[idsCount.value]] + "&start_time=" +nextStartTimeString + "&finish_time=" + nextEndTimeString ).then((response) => {
        participantAvaliable.value[[idsCount.value]].nextMonth = response.data.availability.length;
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
              user: practitioners.value[j].user,
              thisMonth: participantAvaliable.value[i].thisMonth,
              nextMonth: participantAvaliable.value[i].nextMonth,
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
