<template>
    <div class="section mt-1 me-4">
      <div class="row pt-4">
          <div class=col-md-6 col-sm-12 col-xs-12>

          </div>
          <div class="col-md-6 col-sm-12 col-xs-12">
              <div class="card mt-1">
                <div class="card-body">
                  <div id="modal-open-appointment" class="d-flex flex-row align-items-center" style="cursor: pointer">
                      <div class="icon-stack display-3 flex-shrink-0">
                        <font-awesome-icon :icon="['far', 'circle']"  class="icon-stack-3x opacity-100 color-danger-400"/>
                        <font-awesome-icon :icon="['fas', 'fa-calendar-plus']"  class="icon-stack-1x opacity-100 color-danger-400 b-09"/>
                      </div>
                      <div class="ml-3">
                          <strong>
                              Đặt Lịch hẹn
                          </strong>
                          <br>
                          Không cần chờ đợi, không lo mệt mỏi. Đặt lịch ngay!
                      </div>
                  </div>
                </div>
              </div>
          </div>
      </div>

    </div>
      <div class="section my-5 me-4 bg-white">
        <form @submit.prevent="handleUpdateProfile">
          <div class="row px-4 pt-4">         
            <div class="col-md-6 col-sm-12 col-xs-12 mb-3">
              <label for="first_name_text" class="form-label">Frist name</label>
              <input type="text" class="form-control" name="first_name_text" v-model="family_name_text" placeholder="First name">
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <label class="form-label" for="birthday"> Birthday</label>
              <input type="date" id="birthday" class="form-control was-changed" name="birth_date_date" v-model="birth_date_date" data-date-format="DD MMMM YYYY" value="">
            </div>
          </div>

          <div class="row px-4">         
            <div class="col-md-6 col-sm-12 col-xs-12 mb-3">
              <label class="form-label">Middle name</label>
              <input type="text" class="form-control" name="middle_name_text" v-model="middle_name_text"  placeholder="Middle name">
            </div>
            <div class="col-md-6 col-sm-12 col-xs-12">
              <label class="form-label" for="sex_option_sex"> Sex</label>
              <br>
              <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="sex_option_sex" id="male" v-model="sex_option_sex" value="Male">
                  <label class="form-check-label" for="male">Male</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="sex_option_sex" id="femail" v-model="sex_option_sex" value="Female">
                  <label class="form-check-label" for="femail">Female</label>
                </div>
                <div class="form-check form-check-inline">
                  <input class="form-check-input" type="radio" name="sex_option_sex" id="Other" v-model="sex_option_sex" value="Unknown">
                  <label class="form-check-label" for="other">Other</label>
                </div>
            </div>
          </div>

          <div class="row px-4">         
            <div class="col-md-3 col-sm-6 col-xs-12 mb-3">
              <label  class="form-label">Insurance code</label>
              <input type="text" class="form-control" name="insurance_number_text" v-model="insurance_number_text"  placeholder="Insurance code">
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <label class="form-label" >ID number</label>
              <input type="text" class="form-control" name="identification_number_text" v-model="identification_number_text" placeholder="ID number" value="">
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 mb-3">
              <label class="form-label">Type of identification document</label>
           
              <select class="form-select" name="identification_type_option_identification_type" v-model="identification_type_option_identification_type">
                <option >Select option</option>
                <option value="Government ID">Government ID</option>
                <option value="Driver License" >Driver License</option>
                <option value="Passport" >Passport</option>
                <option value="Resident Card">Resident Card</option>
              </select>
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <label class="form-label"> Resident status</label>
              <select class="form-select" name="residential_status_option_residential_status" v-model="residential_status_option_residential_status">
                <option >Select option</option>
                <option value="Citizen">Citizen</option>
                <option value="Temporary Resident" >Temporary Resident</option>
                <option value="Permanent Resident" >Permanent Resident</option>
                <option value="Work Permit">Work Permit</option>
              </select>
            
            </div>
          </div>

          <div class="row px-4">         
            <div class="col-md-3 col-sm-6 col-xs-12 mb-3">
              <label  class="form-label">Street</label>
              <input type="text" class="form-control" name="address_geographic_address" v-model="address_geographic_address"  placeholder="Street">
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <label class="form-label" >City/Province</label>
              <input type="text" class="form-control" name="province_text" v-model="province_text" placeholder="City or Province" value="">
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 mb-3">
              <label class="form-label">Postal code</label>
              <input type="text" class="form-control" name="postal_code_text" v-model="postal_code_text"  placeholder="Postal code">
            </div>           
          </div>

          <div class="row px-4">         
            <div class="col-md-3 col-sm-6 col-xs-12 mb-3">
              <label  class="form-label">Email</label>
              <input type="text" class="form-control" name="Email" v-model="Email"  placeholder="Email">
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12">
              <label class="form-label" >Phone</label>
              <input type="text" class="form-control" name="primary_phone_number_text" v-model="primary_phone_number_text" placeholder="Phone" value="">
            </div>
            <div class="col-md-3 col-sm-6 col-xs-12 mb-3">
              <label class="form-label">User type</label>
              <select class="form-select" name="user_type_option_user_type" v-model="user_type_option_user_type">
                <option >Select option</option>
                <option value="Patient">Patient</option>
                <option value="Admin">Admin</option>
                <option value="Doctor">Doctor</option>
                <option value="Nurse">Nurse</option>
                <option value="Office">Office</option>
                <option value="Lab">Lab</option>
                <option value="Pharmacy">Pharmacy</option>
                <option value="Delivery">Delivery</option>
              </select>
            </div>           
          </div>
          <div class="row mt-2 pb-4 justify-content-center">
            <div class="col-md-2 col-sm-6 col-xs-12">
              <button type="submit" class="btn btn-primary">Save profile</button>
            </div>
          </div>
        </form>   
     </div>

     <tab-views/>

  </template>

<script>
import '../assets/app.bundle.css'
//import { ref, watch } from 'vue'
import { mapActions, mapState, mapStores } from 'pinia';
   import { useRoute } from 'vue-router';

   import { Form, Field } from 'vee-validate';
   import * as Yup from 'yup';

   import { useLoginStore } from '@/stores/loginStore'
   
   import TabViews from './TabsView.vue'

export default{
    components: {
      'tab-views':TabViews
    },
    data(){
      return {
        currentUser : JSON.parse(localStorage.getItem('userLogin')),
        family_name_text: "",
        birth_date_date: "",
        middle_name_text: "",
        family_name_text: "",
        sex_option_sex: "",
        insurance_number_text: "",
        identification_number_text: "",
        residential_status_option_residential_status: "",
        identification_type_option_identification_type: "",
        address_geographic_address: "",
        province_text: "",
        postal_code_text: "",
        Email: "",
        primary_phone_number_text: "",
        user_type_option_user_type: ""
        //currentPage : {}
      }
    },
    methods: {
      ...mapActions(useLoginStore, [
                'updateProfile'
            ]), 
      handleUpdateProfile() {
              let params = {
                family_name_text: this.family_name_text,
                birth_date_date: this.birth_date_date,
                middle_name_text: this.middle_name_text,
                sex_option_sex: this.sex_option_sex,
                insurance_number_text: this.insurance_number_text,
                identification_number_text: this.identification_number_text,
                residential_status_option_residential_status: this.residential_status_option_residential_status,
                identification_type_option_identification_type: this.identification_type_option_identification_type,
                address_geographic_address: this.address_geographic_address,
                province_text: this.province_text,
                postal_code_text: this.postal_code_text,
                Email: this.Email,
                primary_phone_number_text: this.primary_phone_number_text,
                user_type_option_user_type: this.user_type_option_user_type
              }
                
              let userID = this.currentUser.User_id
              //console.log(this.currentUser.User_id)
              let _this = this
                _this.updateProfile({data_post:params,User_id:userID},userID).then(res=>{
                  console.log(res)
                } 
                ).catch(error => {
                    throw(error);
                });
            }
    },
      
    
    mounted() {
      //console.log(this.currentUser)
      this.family_name_text = this.currentUser.family_name_text
      this.birth_date_date = this.currentUser.birth_date_date
      this.middle_name_text = this.currentUser.middle_name_text
      this.sex_option_sex = this.currentUser.sex_option_sex
      this.insurance_number_text = this.currentUser.insurance_number_text
      this.identification_number_text = this.currentUser.identification_number_text
      this.residential_status_option_residential_status = this.currentUser.residential_status_option_residential_status
      this.identification_type_option_identification_type = this.currentUser.identification_type_option_identification_type
      this.address_geographic_address = this.currentUser.address_geographic_address
      this.province_text = this.currentUser.province_text

      this.postal_code_text = this.currentUser.postal_code_text
      this.Email = this.currentUser.Email
      this.primary_phone_number_text = this.currentUser.primary_phone_number_text
      this.user_type_option_user_type = this.currentUser.user_type_option_user_type

     // this.currentPage = this.$router.params
    },

}
</script>


