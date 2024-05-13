<template>
    <nav class="navbar navbar-expand-lg shadow-lg height-10">
      <div class="container">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <a class="navbar-brand page-logo" href="#">
            <img src="../assets/img/logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
            <span class="page-logo-text mr-2">Hello doctor</span>
        </a>
  
        <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul class="navbar-nav  mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/register" class="nav-link" exact-active-class="text-success" active-class="active">
                <font-awesome-icon :icon="['fab', 'twitter']" />&nbsp;Sign up
              </router-link>       
            </li>
        </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>

</script>
  
  <style></style>
  