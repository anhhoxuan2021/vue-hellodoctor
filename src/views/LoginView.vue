<template>
    <main>
      <div class="section">
      <div class="row">
        <div class="mx-auto col-sm-4">
          <div class="card p-4 rounded-plus bg-faded" id="login-hide">
          <div class="card-body">
            <form >
              <div class="form-group">
                  <label class="form-label" for="email">Email</label>
                  <input type="email" ref="refemail" id="email" class="form-control form-control-lg" placeholder="your email"  required>
                  <div class="invalid-feedback">Hãy nhập Email</div>
                  <div class="help-block">Email bạn đã đăng kí với chúng tôi</div>
              </div>
              <div class="form-group">
                  <label class="form-label">Mật khẩu</label>
                  <input type="password" ref="refpass" class="form-control form-control-lg" placeholder="password" required>
                  <div class="invalid-feedback">Hãy nhập mật khẩu</div>
                  <div class="help-block">Mật khẩu của bạn</div>
              </div>
              <div class="form-group text-left">
                  <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="custom-control-input" id="rememberme" v-model="rememberme">
                      <label class="custom-control-label" for="rememberme"> Ghi nhớ mật khẩu của bạn</label>
                  </div>
              </div>

             </form>
          </div>
          <div class="row no-gutters">
              <div class="col-lg-6 pr-lg-1 my-2">
                  <button type="button" id="btn-reset"  class="btn btn-danger btn-block btn-lg">Reset Pass</button>
              </div>
              <div class="col-lg-6 pl-lg-1 my-2">
                  <button id="btn-login" type="button" v-on:click="handleLogin" class="btn btn-info btn-block btn-lg">Đăng nhập</button>
              </div>
          </div>                   
        </div>
          
        </div>
   
      </div>
    </div>
    </main>
  </template>

<script>
   import { mapActions, mapState, mapStores } from 'pinia';
   import { useRoute } from 'vue-router';

   import { Form, Field } from 'vee-validate';
   import * as Yup from 'yup';

   import { useLoginStore } from '@/stores/loginStore'
  // import { useTestStore } from '@/stores/testStore'
  import AuthService from '../services/auth.service'
   export default {
        data() {
            return {
              email: '',
              password: '',
              submitting: false
            }
        },
        computed: {
    // note we are not passing an array, just one store after the other
    // each store will be accessible as its id + 'Store'
          //...mapStores(useLoginStore)
      },
        methods: {
            ...mapActions(useLoginStore, [
                'signIn','getOptionStore'
            ]), 
         /*   ...mapActions(useTestStore, [
                'howUseIt'
            ]), */

            handleLogin(){
              let _this = this
              _this.signIn(_this.$refs.refemail.value, _this.$refs.refpass.value).then((response) => {
               // console.log(localStorage.getItem('userLogin'))
            // redirect to previous url or default to home page
                // this.$router.push('/dashboard')
                // let paras = JSON.stringify(response.login)
                // let paras = {id:1,a:"test"}
                // console.log(paras)
                // this.$router.push({ name: 'Dashboard', params: paras}) ;
                
                 //this.$router.push({name: 'Dashboard'}).catch(error=>{
               //   console.log(error.message)}) ;
               if(response) {
                this.$router.push('/dashboard')
               }
              })              
              .catch(error => {
                    throw(error);
                });

              // _this.howUseIt()
            },
            /************************ */


            /************************ */

            testGetOptionByS(){
              let _this = this
             // _this.getOptionStore();
            }
        },
        created() {          
          AuthService.getoptionService()
        }
       
    } 
</script>

<style>
     .bg-img{
      background-image: url(../assets/img/svg/pattern-1.svg);
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center bottom;
     } 

     .bg-gray{
      background-image: linear-gradient(270deg, rgba(46, 182, 151, .18), transparent);
        background-color: #445175!important;
     }
  </style>
