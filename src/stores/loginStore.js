
import { defineStore } from 'pinia'

import AuthService from '../services/auth.service'

export const useLoginStore = defineStore('login', {
    state: () => {
        return { 
            currentUser : localStorage.getItem('userLogin'),
            options : {},
            isAuth : false
        }
      },
    getters: {
        userLogin: state => {
            if (!!state.userLogin) {
                return JSON.parse(state.userLogin);
            }
            return state.userLogin;
        }    
    },
  // could also be defined as
  // state: () => ({ count: 0 })
  actions: {
    async signIn(email, pass) {
                let para ={Email: email, Password: pass}
        try { 
            //console.log(para)             
              const response = await AuthService.loginService(para);
              
              console.log(response.login.Email)
              if(response.ERROR==''){
                localStorage.setItem('userLogin','')
                localStorage.setItem('userLogin',JSON.stringify(response.login))
                this.currentUser = JSON.stringify(response.login)
                this.isAuth = true
                return true;
              }else{
                return false
              }

              
          } catch (error) {
              throw (error);
          }
        },
        /*********************** */
        getOptionStorebk(){
            AuthService.getoptionService().then(res=>res)
        },
        /*********************** */
        async getOptionStore() {
            AuthService.getoptionService()
                .then(res => this.options = res)
                .catch(error => this.options = { })
        },
        /***************************** */
        async updateProfile(params,userID) {
          try { 
              //console.log(userID)    
                      
                const response = await AuthService.updateProfile(params);
                console.log(response)     
                if(response.User_id===userID){                 
                  return true;
                }else{
                  return false
                }

                
            } catch (error) {
                throw (error);
            }
        },
    } ,  
   
})

//export default useLoginStore;