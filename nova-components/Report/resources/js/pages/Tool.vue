<template>
  <div class="my-component-scoped">
    <div class="w-full space-y-14" :class="{ dark: dark }">
      <div class="w-full flex flex-col items-start space-y-5">
        <span class="font-medium text-2xl text-gray-900 dark:text-gray-300"
          >Report Generator {{ dark }}</span
        >
        <div class="w-full flex justify-between items-center">
          <div class="flex items-center space-x-14">
            <span class="text-xl font-normal">Filter By </span>
            <div class="flex items-center space-x-4">
              <div
                class="
                  p-2
                  bg-gray-500
                  rounded-2xl
                  cursor-pointer
                  hover:bg-gray-600
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>
              </div>
              <span
                class="
                  text-xl
                  font-semibold
                  cursor-pointer
                  hover:text-opacity-80
                "
                >Reason</span
              >
            </div>
            <div class="flex items-center space-x-4">
              <div
                class="
                  p-2
                  bg-gray-500
                  rounded-2xl
                  cursor-pointer
                  hover:bg-gray-600
                "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-4 h-4 text-white"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>
              </div>
              <span
                class="
                  text-xl
                  font-semibold
                  cursor-pointer
                  hover:text-opacity-80
                "
                >Practitioner</span
              >
            </div>
          </div>

          <div class="flex items-center">
            <button
              class="h-10 px-2 bg-gray-500 rounded-l-2xl hover:bg-opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
            <button
              class="
                h-10
                px-8
                bg-gray-600
                text-white text-xl
                font-medium
                hover:bg-opacity-60
              "
            >
              This Month
            </button>
            <button
              class="h-10 px-2 bg-gray-500 rounded-r-2xl hover:bg-opacity-60"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6 text-white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div class="w-full flex flex-col items-start space-y-8">
        <div class="flex items-start space-x-10">
          <div class="flex flex-col items-start space-y-2">
            <span
              class="
                text-xl
                font-normal
                capitalize
                text-gray-900
                dark:text-gray-300
              "
              >Total Appointments</span
            >
            <span class="text-2xl font-semibold">10 Appointments </span>
          </div>
          <div class="flex flex-col items-start space-y-2">
            <span
              class="
                text-xl
                font-normal
                capitalize
                text-gray-900
                dark:text-gray-300
              "
              >Total Hours</span
            >
            <span class="text-2xl font-semibold">15:02:10 </span>
          </div>
        </div>

        <div class="w-full">
          <div class="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div
              class="
                flex flex-col
                md:flex-row md:items-center
                py-3
                border-b border-gray-200
                dark:border-gray-700
              "
            >
            
              <!---->
            </div>
            <div class="relative">
              <!---->
              <div class="overflow-hidden overflow-x-auto relative">
                <table class="w-full" data-testid="resource-table">
                  <thead class="bg-gray-50 dark:bg-gray-800">
                    <tr>
                     <th
                        class="
                          text-left
                          px-2
                          whitespace-nowrap
                          uppercase
                          text-gray-500 text-xxs
                          tracking-wide
                          py-2
                        "
                      >
                        <span class=" hidden">Resource</span>
                      </th>
                      <th
                        class="
                          text-left
                          px-2
                          whitespace-nowrap
                          uppercase
                          text-gray-500 text-xxs
                          tracking-wide
                          py-2
                        "
                      >
                        <button
                          type="button"
                          class="
                            cursor-pointer
                            inline-flex
                            items-center
                            focus:outline-none focus:ring
                            ring-primary-200
                            dark:ring-gray-600
                            rounded
                          "
                          dusk="sort-id"
                          aria-sort="none"
                        >
                          <span
                            class="
                              inline-flex
                              font-sans font-bold
                              uppercase
                              text-xxs
                              tracking-wide
                              text-gray-500
                            "
                            >ID</span
                          >
                        </button>
                      </th>
                      <th
                        class="
                          text-center
                          px-2
                          whitespace-nowrap
                          uppercase
                          text-gray-500 text-xxs
                          tracking-wide
                          py-2
                        "
                      >
                        <span>Avatar</span>
                      </th>
                      <th
                        class="
                          text-left
                          px-2
                          whitespace-nowrap
                          uppercase
                          text-gray-500 text-xxs
                          tracking-wide
                          py-2
                        "
                      >
                        <button
                          type="button"
                          class="
                            cursor-pointer
                            inline-flex
                            items-center
                            focus:outline-none focus:ring
                            ring-primary-200
                            dark:ring-gray-600
                            rounded
                          "
                          dusk="sort-name"
                          aria-sort="none"
                        >
                          <span
                            class="
                              inline-flex
                              font-sans font-bold
                              uppercase
                              text-xxs
                              tracking-wide
                              text-gray-500
                            "
                            >Name</span
                          >
                        </button>
                      </th>
                      <th
                        class="
                          text-left
                          px-2
                          whitespace-nowrap
                          uppercase
                          text-gray-500 text-xxs
                          tracking-wide
                          py-2
                        "
                      >
                        <button
                          type="button"
                          class="
                            cursor-pointer
                            inline-flex
                            items-center
                            focus:outline-none focus:ring
                            ring-primary-200
                            dark:ring-gray-600
                            rounded
                          "
                          dusk="sort-email"
                          aria-sort="none"
                        >
                          <span
                            class="
                              inline-flex
                              font-sans font-bold
                              uppercase
                              text-xxs
                              tracking-wide
                              text-gray-500
                            "
                            >Email</span
                          >
                        </button>
                      </th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr dusk="1-row" class="group">
                       <td
                        class="
                          px-2
                          py-2
                          border-t border-gray-100
                          dark:border-gray-700
                          whitespace-nowrap
                          cursor-pointer
                          dark:bg-gray-800
                          group-hover:bg-gray-50
                          dark:group-hover:bg-gray-900
                        "
                      >
                        <span class=" hidden">Resource</span>
                      </td>
                      <td
                        class="
                          px-2
                          py-2
                          border-t border-gray-100
                          dark:border-gray-700
                          whitespace-nowrap
                          cursor-pointer
                          dark:bg-gray-800
                          group-hover:bg-gray-50
                          dark:group-hover:bg-gray-900
                        "
                      >
                        <div class="text-left">
                          <a
                            class="link-default"
                            href="/admin/resources/users/1"
                            >1</a
                          >
                        </div>
                      </td>
                      <td
                        class="
                          px-2
                          py-2
                          border-t border-gray-100
                          dark:border-gray-700
                          whitespace-nowrap
                          cursor-pointer
                          dark:bg-gray-800
                          group-hover:bg-gray-50
                          dark:group-hover:bg-gray-900
                        "
                      >
                        <div
                          class="items-center justify-center flex text-center"
                          resource="[object Object]"
                        >
                          <img
                            src="https://www.gravatar.com/avatar/91877a2c1027667fd8f5c470e14a31a6?s=300"
                            class="inline-block rounded-full"
                            draggable="false"
                            style="max-width: 30px"
                          /><!----><!----><!----><!---->
                        </div>
                      </td>
                      <td
                        class="
                          px-2
                          py-2
                          border-t border-gray-100
                          dark:border-gray-700
                          whitespace-nowrap
                          cursor-pointer
                          dark:bg-gray-800
                          group-hover:bg-gray-50
                          dark:group-hover:bg-gray-900
                        "
                      >
                        <div class="text-left" resource="[object Object]">
                          <span class="text-90 whitespace-nowrap"
                            >abdelali</span
                          >
                        </div>
                      </td>
                      <td
                        class="
                          px-2
                          py-2
                          border-t border-gray-100
                          dark:border-gray-700
                          whitespace-nowrap
                          cursor-pointer
                          dark:bg-gray-800
                          group-hover:bg-gray-50
                          dark:group-hover:bg-gray-900
                        "
                      >
                        <div class="text-left" resource="[object Object]">
                          <span class="text-90 whitespace-nowrap"
                            >abdelali@boystack.com</span
                          >
                        </div>
                      </td>
                      
                    </tr>
                  </tbody>
                </table>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount, ref } from "vue";

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

    onBeforeUnmount(() => {
      observer.value.disconnect();
      observer.value = null;
    });

    return {
      dark,
    };
  },
};
</script>

<style>
/* Scoped Styles */
</style>
