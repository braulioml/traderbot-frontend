<template>
  <nav
    class="navbar-brand p-3"
    role="navigation"
    >
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <div>
            <img src="https://www.meneame.net/img/mnm/logo-white.svg" alt="" />
          </div>
        </a>
      </div>
      </div>
      
      <div class="navbar-item">
        <div class="navbar-start">
          <div class="buttons">
            <a
              v-if="!isAuth"
              class="button is-warning is-outlined"
              href="/users"
            >
              <strong>Crear cuenta</strong>
            </a>
            <router-link
              v-if="!isAuth"
              class="button is-light is-outlined"
              to="/login"
            >
              Acceder
            </router-link>
          </div>
        </div>
      </div>
  </nav>
</template>

<script>
export default {
  name: "MainNav",
  props: {
    items: Array,
  },
  computed: {
    isAuth() {
      return this.$store.getters.isAuth;
    },
    currentUser() {
      return this.$store.getters.currentUser;
    },
  },
};
</script>
