<script setup lang="ts">
</script>

<template>
  <header class="navbar-component">
    <span>Carlos Chillerón Muñoz</span>
    <a href="https://www.sesametime.com"
      ><img class="lazyloaded" src="@/assets/logo-sesame-hr.svg"
    /></a>
    <a
      class="navbar-component___linkedin"
      href="https://www.linkedin.com/in/carloschilleron/"
      >Visita mi LinkedIn</a
    >
  </header>
</template>

<style lang="scss" scoped>
.navbar-component {
  @apply flex justify-between p-4 shadow items-center;
}

.navbar-component___linkedin {
  @apply p-1;

  &:hover {
    @apply text-blue-500 rounded;
  }
}
</style>
