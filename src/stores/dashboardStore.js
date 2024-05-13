import { defineStore } from 'pinia'

import AuthService from '../services/auth.service'

export const usedashboardStore = defineStore('dasboard', {
  state: () => {
    return { 
        currentUser :  {},
        options : {}
    }
  },  
    getters: {
        userLogin: state => {
            if (!!state.userLogin) {
                return JSON.parse(state.userLogin);
            }
            return state.userLogin;
        },
        isAuthenticated: (state) => !!state?.userLogin        
    },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async getOptionStore() {
      AuthService.getoptionService()
          .then(res => this.options = res)
          .catch(error => this.options = { })
  }
  },
})