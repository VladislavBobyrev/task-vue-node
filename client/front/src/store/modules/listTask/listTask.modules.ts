import { getData } from '@/api/api'
import { Commit } from 'vuex'
import { IListTask } from './listTask.interface'
// const listTask: IListTask = {
//   count: 1,
//   date: new Date(),
//   name: 'Колбаса',
//   price: 115,
// }

const requests: IListTask[] = []

export default {
  namespaced: true,

  state: {
    return: {
      requests,
    },
  },
  getters: {
    request(state:any)
    {
      console.log(state.requests)
      return state.requests
    },
  },
  mutations: {
    SET_REQUEST(state:any, requests: IListTask[])
    {
      return state.requests = requests
    },
    ADD_REQUEST(state:any, request: IListTask[])
    {
      return state.requests.push(request)
    },
  },
  actions: {
    async asyncLoad({ commit }: { commit: Commit })
    {
      return await getData('http://localhost:5445/api/change-task/')
        .then((val: IListTask[]) =>
        {
          commit('SET_REQUEST', val)
        })
    },
  },
}