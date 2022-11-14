<template>
  <route-holder :title="title">
    <template #header-actions>
      <button
        class="@dark:bg-neutral-50 @dark:text-neutral-800 rounded-md bg-neutral-800 px-4 py-2 text-white"
        @click="handleLogOut"
      >
        {{ $t('account.log.out') }}
      </button>
    </template>

    <div class="mb-12 grid grid-cols-3">
      <div class="">
        <h2 class="font-theme mb-3 text-2xl font-medium tracking-wide">
          {{ $t('account.stats') }}
        </h2>
        <p>Birds spotted: {{ customUser?.observationsCount }}</p>
      </div>

      <div class="span-2">
        <h2 class="font-theme mb-3 text-2xl font-medium tracking-wide">
          {{ $t('account.realtime') }}
        </h2>
        <div class="flex items-center gap-3">
          <input id="server" type="checkbox" v-model="connectedToServer" />
          <label for="server"> Connect to server </label>
        </div>
      </div>

      <div class="span-2">
        <h2 class="font-theme mb-3 text-2xl font-medium tracking-wide">
          {{ $t('account.settings') }}
        </h2>
        <div class="flex items-center gap-3">
          <label for="language" class="block">Language</label>
          <select
            class="block"
            name="language"
            id="language"
            @change="setLanguage($event)"
          >
            <option v-for="l of AVAILABLE_LOCALES" :value="l.code">
              {{ l.label }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div v-if="customUser">
      <h2 class="font-theme mb-3 text-2xl font-medium tracking-wide">
        Recent observations
      </h2>
      <observations-table :observations="customUser.observations!" />
    </div>
  </route-holder>
</template>

<script lang="ts">
import RouteHolder from '../components/holders/RouteHolder.vue'
import useAuthentication from '../composables/useAuthentication'
import { useRouter } from 'vue-router'
import useCustomUser from '../composables/useCustomUser'
import ObservationsTable from '../components/observation/ObservationsTable.vue'
import { computed } from '@vue/reactivity'
import usei18n from '../composables/usei18n'

export default {
  components: {
    RouteHolder,
    ObservationsTable,
  },

  setup() {
    const { user, logout } = useAuthentication()
    const { customUser } = useCustomUser()
    const { replace } = useRouter()
    const { AVAILABLE_LOCALES, t, loadLocales } = usei18n()

    const setLanguage = ($event: Event) => {
      const selectedLanguage = ($event.target as HTMLSelectElement).value
      loadLocales(selectedLanguage)
    }

    const title = computed(() =>
      t('account.welcome', { user: user ? user.value?.displayName : '' }),
    )

    const handleLogOut = () => {
      logout().then(() => {
        return replace('/auth/login')
      })
    }

    const getToken = async () => {
      console.log(await user.value?.getIdToken())
    }

    getToken()

    return {
      user,
      customUser,
      setLanguage,
      AVAILABLE_LOCALES,
      title,

      handleLogOut,
    }
  },
}
</script>
