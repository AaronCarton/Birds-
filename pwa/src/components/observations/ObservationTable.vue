<template>
  <table class="w-full">
    <tr class="text-left">
      <th>Image</th>
      <th>Bird</th>
      <th>Location</th>
      <th>Name</th>

      <th>User</th>
      <th>Spotted on</th>
    </tr>
    <tbody v-if="observations.length > 0">
      <tr v-for="o of observations" :key="o.id">
        <td>
          <RouterLink :to="`birds/${o.bird.id}`">
            <img class="h-12" :src="`/birds/${o.bird.name}.webp`" alt="Bird image" />
          </RouterLink>
        </td>
        <td>
          <RouterLink :to="`birds/${o.bird.id}`">{{ o.bird.name }}</RouterLink>
        </td>
        <td>{{ o.location.name }}</td>
        <td>{{ o.name }}</td>

        <td>{{ o.userId }}</td>
        <td>{{ new Date(o.createdAt).toLocaleDateString() }}</td>
      </tr>
    </tbody>
    <tbody class="grid w-full place-items-center" v-else>
      No observations yet.
    </tbody>
  </table>
</template>

<script lang="ts">
import Observation from '../../../interfaces/interface.observation'

export default {
  props: {
    observations: {
      type: Array as () => Observation[],
      required: true,
    },
  },
  setup(props) {
    return {
      observations: props.observations,
    }
  },
}
</script>
