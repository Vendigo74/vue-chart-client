import { defineStore } from "pinia";
import { ref } from "vue";
import { $api } from "../../../../shared/api/api";

export const useStatisticsStore = defineStore("statistics", () => {
  const statistics = ref(null);

  async function fetchData() {
    const statisticsRequest = await $api.get("/statistic/get-prepared");
    statistics.value = statisticsRequest.data;
  }

  return {
    statistics,
    fetchData,
  };
});
