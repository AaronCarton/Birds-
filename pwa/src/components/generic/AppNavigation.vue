<template>
  <ul
    class="grid w-full grid-cols-4 items-center text-center text-xs font-medium sm:space-x-3 sm:text-left sm:text-sm"
  >
    <li>
      <RouterLink
        exact-active-class="text-red-600"
        class="inline-block rounded-md px-3 py-6 outline-none focus-visible:ring-2"
        to="/"
      >
        <Home class="mx-auto mb-2 h-5 sm:hidden" />
        Home
      </RouterLink>
    </li>
    <li>
      <RouterLink
        active-class="text-red-600"
        class="inline-block rounded-md px-3 py-6 outline-none focus-visible:ring-2"
        to="/birds"
      >
        <Feather class="mx-auto mb-2 h-5 sm:hidden" />
        Birds
      </RouterLink>
    </li>
    <li>
      <RouterLink
        active-class="text-red-600"
        class="inline-block rounded-md px-3 py-6 outline-none focus-visible:ring-2"
        to="/observations"
      >
        <Scroll class="mx-auto mb-2 h-5 sm:hidden" />
        Observations
      </RouterLink>
    </li>
    <li>
      <RouterLink
        active-class="text-red-600"
        class="inline-block rounded-md px-3 py-6 outline-none focus-visible:ring-2"
        to="/log"
      >
        <Clipboard class="mx-auto mb-2 h-5 sm:hidden" />
        Log
      </RouterLink>
    </li>
    <li class="hidden pl-6 sm:block">
      <RouterLink
        class="inline-block rounded-md px-3 py-6 outline-none focus-visible:ring-2"
        to="/account"
        >{{ user?.displayName || 'Login' }}</RouterLink
      >
    </li>
  </ul>
</template>

<script lang="ts">
import { Home, Feather, Scroll, Clipboard } from 'lucide-vue-next'
import useAuthentication from '../../composables/useAuthentication'

export default {
  setup() {
    const { user } = useAuthentication()
    return { user }
  },
  components: {
    Home,
    Feather,
    Scroll,
    Clipboard,
  },
}
</script>
