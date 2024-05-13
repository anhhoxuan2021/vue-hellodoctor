<template>
  <div>
    <button class="btn btn-default" @click ="modalActive">Show Modal</button>
    <div id="myModal" class="modal fade" ref="exampleModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button type="button" class="btn-close" @click="hideModal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div>test modal</div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="hideModal">Close</button>
            <button type="button" class="btn btn-primary">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Modal } from 'bootstrap'
export default {
  name: "TestModal",
  data: () => ({
    modalInstance: null
  }),
  props: {
    showModal: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    showModal(newValue, oldValue) {
      console.log(newValue);
      if (newValue === true) {
        this.modalActive();
      }
    }
  },
  methods: {
    modalActive: function () {
      this.modalInstance = new Modal(document.getElementById('myModal'), {
        target: "#my-modal",
        backdrop: "static"
      });
      this.modalInstance.show()
    },
    hideModal: function () {
      console.log("closed");
      this.modalInstance.hide();
      this.$emit('closeModal');
    }
  }
};
</script>

<style scoped>

</style>