<template>

      <div class="section my-5 me-4 bg-white">
      <div class="row px-4 pt-4">    
          <ul class="nav nav-tabs nav-pills nav-fill">
            <li class="nav-item">
              <a :class="[{ active: this.isTabs.isTab0 }, 'nav-link' ]"  aria-current="page" @click="tabSelected(0)" >Hitories</a>
            </li>
            <li class="nav-item">
              <a v-bind:class="[{ active: this.isTabs.isTab1 }, 'nav-link' ]" @click="tabSelected(1)" >Appointments</a>
            </li>
            <li class="nav-item">
              <a v-bind:class="[{ active: this.isTabs.isTab2 }, 'nav-link' ]" @click="tabSelected(2)" >Laps</a>
            </li>
            <li class="nav-item">
              <a v-bind:class="[{ active: this.isTabs.isTab3 }, 'nav-link' ]" @click="tabSelected(3)" >Descriptions</a>
            </li>
            <li class="nav-item">
              <a v-bind:class="[{ active: this.isTabs.isTab4 }, 'nav-link' ]" @click="tabSelected(4)" >Documents</a>
            </li>
            <li class="nav-item">
              <a v-bind:class="[{ active: this.isTabs.isTab5 }, 'nav-link' ]" @click="tabSelected(5)" >Notes</a>
            </li>
            <li class="nav-item">
              <a v-bind:class="[{ active: this.isTabs.isTab6 }, 'nav-link' ]" @click="tabSelected(6)" >Invoices</a>
            </li>
          </ul>          
        </div>
        <div class="tab-content py-3">
            <component :is="activeComp"></component>
          </div>
     </div>
    
</template>

<script>
import TabAppointments from '../components/tabs/TabAppointments.vue'
import TabDescriptions from '../components/tabs/TabDescriptions.vue'
import TabDocuments from '../components/tabs/TabDocuments.vue'
import TabHitories from '../components/tabs/TabHitories.vue'
import TabInvoices from '../components/tabs/TabInvoices.vue'
import TabLaps from '../components/tabs/TabLaps.vue'
import TabNotes from '../components/tabs/TabNotes.vue'

export default {
  components: {
    TabAppointments,
    TabDescriptions,
    TabDocuments,
    TabHitories,
    TabInvoices,
    TabLaps,
    TabNotes
  },
  
  data (){
    return {
      isTabs : {
        isTab0:false,
        isTab1:false, 
        isTab2:false, 
        isTab3:false, 
        isTab4:false, 
        isTab5:false, 
        isTab6:false
      },
      activeComp: TabHitories
    }
  },

  mounted(){
    this.isTabs.isTab0 = true
    this.activeComp= TabHitories
  },
  methods:{

    tabSelected(index){
      this.isTabs.isTab0 =false
      this.isTabs.isTab1 =false
      this.isTabs.isTab2 =false
      this.isTabs.isTab3 =false
      this.isTabs.isTab4 =false
      this.isTabs.isTab5 =false
      this.isTabs.isTab6 =false
      
    switch(index){
        case 1 :
          this.isTabs.isTab1 = true;
          this.activeComp= TabAppointments
          break
        case 2 :
          this.isTabs.isTab2 = true;
          this.activeComp= TabLaps
          break
        case 3 :
          this.isTabs.isTab3 = true;
          this.activeComp= TabDescriptions
          break
        case 4 :
          this.isTabs.isTab4 = true;
          this.activeComp= TabDocuments
          break
        case 5 :
          this.isTabs.isTab5 = true;
          this.activeComp= TabNotes
          break
        case 6 :
          this.isTabs.isTab6 = true;
          this.activeComp= TabInvoices
          break
        default:
          this.isTabs.isTab0 = true;
          this.activeComp= TabHitories
          break
      }
        //return this.activeComp
    }
  },

}
</script>

<style lang="css">
 
 
</style>