<template>
  <route-holder :title="birdName">
    <div v-if="loading">
      <p>Loading</p>
    </div>
    <div v-else-if="error">
      <p>Error happened.</p>
    </div>
    <div v-if="result" class="grid grid-cols-[1fr_2fr]">
      <img src="" alt="" />
      <img
        class="aspect-square w-full"
        :src="`./${result.bird.name}.webp`"
        :alt="`Drawing of a ${result.bird.name}`"
      />
      <div class="max-w-lg">
        <p class="mb-3 text-sm">{{ result.bird.category }}</p>
        <p class="text-lg leading-relaxed">{{ result.bird.description }}</p>
      </div>
    </div>
  </route-holder>
</template>

<script lang="ts">
import { useRoute } from 'vue-router'
import { ref, Ref, watch } from 'vue-demi'
import gql from 'graphql-tag'

import RouteHolder from '../../components/holders/RouteHolder.vue'
import Bird from '../../../interfaces/interface.bird'
import { useQuery } from '@vue/apollo-composable'

export default {
  components: {
    RouteHolder,
  },

  setup() {
    const { params } = useRoute()
    const birdName: Ref<string> = ref(null)

    const BIRD_BY_ID = gql`
      query bird($id: String!) {
        bird(id: $id) {
          name
          url
          description
        }
      }
    `

    const { result, loading, error } = useQuery(BIRD_BY_ID, () => ({
      id: params.id,
    }))

    watch(result, () => {
      if (result.value) {
        birdName.value = result.value.bird.name
      }
    })

    return {
      birdName,
      result,
      loading,
      error,
    }
  },
}
</script>
