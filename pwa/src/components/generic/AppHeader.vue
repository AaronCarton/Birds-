<template>
  <header class="px-6 py-5">
    <nav class="mx-auto flex max-w-6xl items-center justify-between">
      <RouterLink to="/"><Logo /></RouterLink>
      <AppNavigation class="hidden sm:flex" />
    </nav>
  </header>
</template>

<script lang="ts">
import Logo from './Logo.vue'
import AppNavigation from './AppNavigation.vue'

export default {
  components: {
    Logo,
    AppNavigation,
  },
}
</script>
