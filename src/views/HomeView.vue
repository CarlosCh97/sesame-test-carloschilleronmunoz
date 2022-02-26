<script lang="ts">
import MainBarComponent from "@/components/main-bar/MainBarComponent.vue";
import { getAllEmployees, clockIn, clockOut } from "@/api/api";

export default {
  data() {
    return {
      employeeInfo: {},
      employeeId: "cf4e03eb-6945-4fa5-ada7-f902492303c4",
    };
  },

  mounted() {
    this.getEmployeeInfo();
  },

  methods: {
    getEmployeeInfo: async function () {
      const data: [{ employee: { id: string } }] = await getAllEmployees();
      this.employeeInfo = data.find(
        (employee) => employee.employee.id === this.employeeId
      )!;
    },

    clockIn: async function () {
      await clockIn(this.employeeId);
      this.getEmployeeInfo();
    },

    clockOut: async function () {
      await clockOut(this.employeeId);
      this.getEmployeeInfo();
    },
  },

  components: {
    MainBarComponent,
  },
};
</script>

<template>
  <main class="home-view__container">
    <MainBarComponent
      v-if="Object.keys(employeeInfo).length"
      :workStatus="employeeInfo.employee.workStatus"
      :workEntryIn="employeeInfo.workEntryIn"
      :firstName="employeeInfo.employee.firstName"
      :lastName="employeeInfo.employee.lastName"
      @clock-in="clockIn()"
      @clock-out="clockOut()"
    />
  </main>
</template>

<style lang="scss" scoped>
.home-view__container {
  @apply flex justify-center items-center h-70v;
}
</style>

  