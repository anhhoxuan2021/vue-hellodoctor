<script setup>
//import { RouterLink, RouterView } from 'vue-router'
//import HelloWorld from './components/HelloWorld.vue'
</script>
<template>  
  <main class="bg-gray">
    <!-- Sử dụng <component> :is để kiểm tra và yêu cầu VueJS:
      - Tương ứng với Component nào thì sẽ hiển thị layout tương ứng
    -->
    <component :is="layout">
      <router-view />
    </component>
  </main>
  </template>


<script>
// Khai báo layout mặc định là default
const defaultLayout = 'default'

export default {
  computed: {
    layout () {
      // Sử dụng this.$route.meta.layout để kiểm tra xem trong route có khai báo meta tương ứng hay không?
      // Nếu không có khai báo layout -> sẽ hiển thị layout default
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  },
  created () {
    // nothing defined here (when this.$route.path is other than "/")
    //console.log("this is :")
    //console.log(this.$route, this.$route.meta.layout)
    //console.log(this.$route.meta.layout)
  },
  updated () {
    // something defined here whatever the this.$route.path
    //console.log(this.$route, this.$route.meta.layout)
  }
}
</script>
<style scoped>
/*
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
} */
</style>
