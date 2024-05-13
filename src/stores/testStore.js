
import { defineStore } from 'pinia'

export const useTestStore = defineStore('toitest', {
    id: 'toitest',
    state: () => ({
        toitest :  {},
    }),
    getters: {
        toitest: (state) => true      
    },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
       howUseIt(){
            console.log("can use it")
       },
    } ,  
})

//export default useLoginStore;