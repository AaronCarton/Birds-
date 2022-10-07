<template>
  <route-holder title="Observations">
    <template #header-actions>
      <RouterLink
        to="/observations/add"
        class="bg-theme rounded-md bg-neutral-800 px-4 py-2 text-white"
        @click="createObservation"
      >
        Create observation
      </RouterLink>
    </template>
    <ObservationTable v-if="result" :observations="result.observations" />
  </route-holder>
</template>

<script lang="ts">
import gql from 'graphql-tag'
import RouteHolder from '../../components/holders/RouteHolder.vue'
import ObservationTable from '../../components/observations/ObservationTable.vue'
import { useQuery } from '@vue/apollo-composable'

export default {
  components: {
    RouteHolder,
    ObservationTable,
  },
  setup() {
    const OBSERVATIONS = gql`
      query observations {
        observations {
          id
          bird {
            id
            name
          }
          location {
            id
            name
          }
          name
          userId
          createdAt
        }
      }
    `
    const { result, loading, error } = useQuery(OBSERVATIONS)

    return {
      result,
      loading,
      error,
    }
  },
}
</script>
