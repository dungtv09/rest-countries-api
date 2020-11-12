<template>
  <nav class="navbar shadow-sm">
    <div class="container">
      <NuxtLink to="/" class="navbar-brand mb-0 h1 font-weight-bold"
        >Where in the world?</NuxtLink
      >
      <span class="color-mode mb-0" @click="changeColorMode"
        ><i class="fas fa-moon"></i
        ><span class="ml-2">{{ colorMode }}</span></span
      >
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return { colorMode: 'Dark Mode' }
  },

  methods: {
    changeColorMode() {
      if (this.colorMode === 'Dark Mode') {
        this.colorMode = 'Light Mode'
        this.$colorMode.preference = 'dark'
      } else {
        this.colorMode = 'Dark Mode'
        this.$colorMode.preference = 'light'
      }
    },
  },
}
</script>

<style lang="scss" scoped>
nav {
  background-color: var(--element);
  a {
    color: var(--color);
  }
}
.color-mode {
  cursor: pointer;
}

@media (max-width: 368px) {
  .mode {
    font-size: 12px;
  }
}
</style>
