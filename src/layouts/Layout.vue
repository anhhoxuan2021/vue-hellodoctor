<template>
    <div class="LayoutDefault">
      <div style="height: 50px!important;"></div>
      <nav-bar />
      <div class="sticky-top" style="height: 100px!important; background-color: aquamarine;"></div>
      <div class="container1 bg-gray">
        <div class="row">
          <div class="col-md-3 col-xm-12 col-sm-3 xm-dpl-none">
            <side-bar />
          </div>
          <div class="col-md-9 col-sm-9">
            <main>
              <slot />
            </main>
          </div>
        </div>
      </div>
  
      <footer-bar />
    </div>
  </template>
  
  <script>
  // Import thành phần (components) NavBar, SideBar, FooterBar để sử dụng
  import NavBar from './NavBar.vue'
  import SideBar from './SideBar.vue'
  import FooterBar from './FooterBar.vue'
  
  // Để sử dụng được các thẻ (tag) của các component tương ứng
  // <nav-bar />     -> component NavBar
  // <side-bar />    -> component SideBar
  // <footer-bar />  -> component FooterBar
  // Chúng ta phải khai báo trong thuộc tính `components` của phần export default {}
  export default {
    components: {
      NavBar,
      SideBar,
      FooterBar
    }
  }
  </script>
  
  <style scoped>
  
  </style>
  ./NavBar.vue./SideBar.vue./FooterBar.vue