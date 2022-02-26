<script lang="ts">
export default {
  props: {
    title: {
      type: String,
      requierd: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <li class="my-accounts-component">
    <router-link class="flex items-center" to="/">
      <div class="my-accounts-component__left">S1</div>
      <div class="my-accounts-component__right">
        <div class="my-accounts-component__right-up">
          <div class="my-accounts-component__right-up-left">{{ title }}</div>
          <div class="my-accounts-component__right-up-right">
            {{ firstname }}
            {{ lastname }}
          </div>
        </div>
        <div class="my-accounts-component__right-bottom">Hoy llevas 00:00</div>
      </div>
    </router-link>
  </li>
</template>

<style lang="scss" scoped>
.my-accounts-component {
  border-top: 2px solid #f4f4f4;
  @apply px-6 h-16 flex items-center;

  &:hover {
    background-color: #d8f2ec;
  }

  &__left {
    background-color: #e7e7e7;
    border: 1px solid #b5b5b5;
    color: #5d5d5d;
    @apply rounded-full w-8 h-8 flex items-center justify-center text-sm;
  }

  &__right {
    @apply pl-4;

    &-up {
      @apply flex;
      &-left {
        color: #5d5d5d;
        @apply font-bold;
      }
      &-right {
        color: #5d5d5d;
        @apply pl-2;
      }
    }

    &-bottom {
      color: #b5b5b5;
      @apply text-sm;
    }
  }
}
</style>