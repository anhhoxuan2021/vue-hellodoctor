<template>
    <div class="LayoutDefault bg-transparent">
      
      <nav-bar-login />

      <div class="bg-img" >
        <div class="container py-4 py-lg-5 my-lg-5 px-4 px-sm-0">
          <slot />
        </div>
      </div>  

      <footer-bar />
    </div>
  </template>
  
  <script>
  // Import thành phần (components) NavBar, SideBar, FooterBar để sử dụng
  import NavBarLogin from './LoginNavBar.vue'
  import FooterBar from './FooterBar.vue'
  
  // Để sử dụng được các thẻ (tag) của các component tương ứng
  // <nav-bar />     -> component NavBar
  // <side-bar />    -> component SideBar
  // <footer-bar />  -> component FooterBar
  // Chúng ta phải khai báo trong thuộc tính `components` của phần export default {}
  export default {
    components: {
      NavBarLogin,
      FooterBar
    }
  }
  </script>
  
  
