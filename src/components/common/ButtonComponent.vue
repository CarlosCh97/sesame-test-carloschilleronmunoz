<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "#b5b5b5",
    },
  },
};
</script>

<template>
  <div class="button-component" :style="`background-color: ${color}`">
    {{ text }}
  </div>
</template>

<style lang="scss" scoped>
.button-component {
  @apply text-white rounded-full text-center w-32 py-1.5 cursor-pointer;
}
</style>
