

<template>
  <div>
    <Select2 v-model="myValue" :options="myOptions" :settings="{ settingOption: value, settingOption: value }" @change="myChangeEvent($event)" @select="mySelectEvent($event)" />
    <h4>Value: {{ myValue }}</h4>
  </div>
</template>
<script>
// import Select2Component
import Select2 from 'vue3-select2-component';
export default {
    // declare Select2Component
    components: {Select2},
    data() {
        return {
            myValue: '',
            myOptions: ['op1', 'op2', 'op3'] // or [{id: key, text: value}, {id: key, text: value}]
        }
    },
    methods: {
        myChangeEvent(val){
            console.log(val);
        },
        mySelectEvent({id, text}){
            console.log({id, text})
        }
    }
}
</script>