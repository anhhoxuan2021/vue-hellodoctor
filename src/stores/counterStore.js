import { defineStore } from 'pinia'

import AuthService from '../services/auth.service'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return { 
      count: 0,
      options : {}
    }
  },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    increment() {
      this.count++
    },
    async getOptionStore() {
      AuthService.getoptionService()
          .then(res => this.options = res)
          .catch(error => this.options = { })
  }
  },
})