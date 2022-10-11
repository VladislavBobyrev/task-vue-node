import { Commit } from 'vuex'
import { getData, postData } from '@/api/api'
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
    async asyncDeleteList({ commit }: { commit: Commit }, payload:number)
    {
      return await getData(`http://localhost:5445/api/delete-id-task/?id=${payload}`)
        .then((val: IListTask[]) =>
        {
          commit('SET_REQUEST', val)
        })
    },
    async asyncCreateList({ commit }: { commit: Commit }, payload:any)
    {
      const request = await postData('http://localhost:5445/api/create-task/', payload)
      return request.json().then((newTasks) =>
      {
        commit('SET_REQUEST', newTasks)
      })
    },
  },
}