<template>

  <nav class="navbar sticky-top navbar-expand-lg navbar-dark">
    <div class="container-fluid">
      <router-link to="/"><img src="https://i.postimg.cc/fbt0Yv99/Logo-web-image.png" alt=""></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul id="navbar" class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li><router-link to="/">Home |</router-link></li> 
          <li><router-link to="/products">Product |</router-link></li> 
          <li><router-link to="/about">About |</router-link></li> 
          <li><router-link to="/contact">Contact |</router-link></li> 
          <li><router-link to="/admin">Admin |</router-link></li> 
          
          <!-- Button trigger modal -->

          <li>
          <button type="button" style="background-color: transparent; border: none;" data-bs-toggle="modal" data-bs-target="#exampleModal">
            <i class="fa-solid fa-cart-shopping" style="filter: invert(100%);"></i>
          </button>
        </li>

        </ul>
      </div>
    </div>
  </nav>

</template>

<style scoped>
.nav-logo {
  width: 3rem;
}

nav {
  background: #333333;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.4);
  padding: 25px !important;
}

#navbar {
  display: flex;
  align-items: center;
  justify-content: center;
}

#navbar li {
  padding: 0 25px;
  position: relative;
}
#navbar li a {
  text-decoration: none;
  font-size: 15px;
  font-weight: 500;
  color: whitesmoke;
  transition: 0.5s ease;
}
#navbar li a:hover,
#navbar li a.active {
  color: white;
}
#navbar li a.active::after,
#navbar li a:hover::after {
  content: "";
  width: 56%;
  height: 2px;
  background: whitesmoke;
  position: absolute;
  bottom: -4px;
  left: 20px;
}
</style>
