import { provideApolloClient, useLazyQuery } from '@vue/apollo-composable'
import { Ref, ref, watch } from 'vue'
import { GET_USER_BY_UID } from '../graphql/query.user'
import { User } from '../interfaces/interface.user'
import useGraphQL from './useGraphQL'

const user: Ref<User | null> = ref(null)

export default () => {
  const setCustomUser = (u: User) => (user.value = u)
  const { apolloClient } = useGraphQL()

  provideApolloClient(apolloClient)
  const { result, load, document } = useLazyQuery(GET_USER_BY_UID)

  const loadCustomUser = (uid: string) => {
    load(document.value, { uid })
    console.log('loadCustomUser', result)
  }

  watch(result, ({ findUserByUid }) => {
    console.log('watch', findUserByUid)

    if (findUserByUid) {
      setCustomUser(findUserByUid)
    }
  })

  return {
    customUser: user,
    loadCustomUser,
  }
}
