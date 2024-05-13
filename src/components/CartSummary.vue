<template>
    <div>
      <router-link class="btn btn-success" to="/gio-hang">
        <font-awesome-icon :icon="['fas', 'shopping-cart']" />&nbsp;Giỏ hàng ({{ getProductsInCartCount }} sp)
      </router-link>
    </div>
  </template>
  
  <script>
  // Import helper mapGetters của Vuex để có thể sử dụng getters `getAllProducts` đã khai báo bên KHO chứa (store)

  </script>
  
  <style></style>
  