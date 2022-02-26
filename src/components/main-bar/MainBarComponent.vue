<script lang="ts">
import ButtonComponent from "@/components/common/ButtonComponent.vue";
import ProfileDrodownComponent from "@/components/main-bar/ProfileDropdownComponent.vue";
export default {
  components: { ButtonComponent, ProfileDrodownComponent },

  data() {
    return {
      dropdown: false,
      time: "",
      interval: 0,
    };
  },

  props: {
    workStatus: String,
    workEntryIn: Object,
    firstName: String,
    lastName: String,
  },

  unmounted() {
    if (this.workStatus === "online") clearInterval(this.interval);
  },

  mounted() {
    this.updateTime();
  },

  methods: {
    updateTime: function (): void {
      let date = new Date(this.workEntryIn!.date);
      this.showTime(date);
      if (this.workStatus === "online") {
        this.interval = setInterval(() => {
          date.setSeconds(date.getSeconds() + 1);
          this.showTime(date);
        }, 1000);
      }
    },

    showTime: function (date: Date): void {
      this.time =
        date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    },
  },

  watch: {
    workStatus: function (newVal) {
      if (newVal === "online") this.updateTime();
      else clearInterval(this.interval);
    },
  },
};
</script>

<template>
  <div class="main-bar-component">
    <div class="main-bar-component__left">
      <div class="main-bar-component__left-time">
        <span class="main-bar-component__left-time-actual">
          {{ time }}
        </span>
        <span
          v-if="workStatus !== 'offline'"
          class="main-bar-component__left-time-separator"
          >/</span
        >
        <span
          v-if="workStatus !== 'offline'"
          class="main-bar-component__left-time-total"
          >07:00:53</span
        >
      </div>
      <div class="main-bar-component__left-buttons">
        <ButtonComponent
          v-if="workStatus === 'offline'"
          text="Entrar"
          color="#5ebea3"
          @click="this.$emit('clock-in')"
        />
        <ButtonComponent
          v-if="workStatus === 'online' || workStatus === 'paused'"
          class="mr-4"
          text="Pausar"
          color="#b5b5b5"
        />
        <ButtonComponent
          v-if="workStatus === 'online' || workStatus === 'paused'"
          text="Salir"
          color="#ff9984"
          @click="this.$emit('clock-out')"
        />
      </div>
    </div>
    <div class="main-bar-component__separator">|</div>
    <div class="main-bar-component__right">
      <ProfileDrodownComponent
        :firstName="firstName"
        :lastName="lastName"
        :workStatus="workStatus"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-bar-component {
  background-color: #e7e7e7;
  @apply rounded-full flex px-8 py-3;

  &__left {
    @apply flex items-center;

    &-time {
      &-separator {
        @apply px-1;
      }

      &-separator,
      &-total {
        color: #b5b5b5;
      }
    }

    &-buttons {
      @apply flex px-6;
    }
  }

  &__right {
    @apply flex items-center;
  }

  &__separator {
    color: #b5b5b5;
    @apply text-2xl flex items-center pr-6;
  }
}
</style>
