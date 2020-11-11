<template>
  <nav class="navbar shadow-sm">
    <div class="container">
      <router-link to="/" class="navbar-brand mb-0 h1 font-weight-bold"
        >Where in the world?</router-link
      >
      <span class="mb-0"
        ><i class="fas fa-moon"></i><span class="ml-2">Dark mode</span></span
      >
      <!-- <span class="mb-0"
        ><i class="far fa-moon"></i><span class="ml-2">Light mode</span></span
      > -->
    </div>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  background-color: $white;
  a {
    color: $very-dark-blue-light-mode;
  }
}
</style>
