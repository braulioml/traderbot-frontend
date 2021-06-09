<template>
  <section>
    <div class="columns is-mobile is-centered">
      <div class="column is-half ">
        <h1 class="title">Login</h1>
        <b-field label="Email">
          <b-input type="email" v-model="email"></b-input>
        </b-field>
        <b-field label="Password">
          <b-input type="password" password-reveal v-model="password"></b-input>
        </b-field>
              <button class="button is-success" @click="login">
                Login
              </button>
      <div class="p-8">
           <h2 class="subtitle is-6">If you do not have an account, please <a class="tag is-info is-medium" href="/users">register here</a></h2>
      </div>
        </div>
      </div>
      
  </section>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        const credentialsData = {
          email: this.email,
          password: this.password,
        }
        const response = await this.$api.auth.login(credentialsData)
        const token = response.token        
        alert('token:\n'+token)

        this.$store.dispatch('login', token)
        this.$router.push("/")
      } catch (error) {
        alert("Usuario y/o contraseña incorrectos.")
        //console.log(error)
      }
    },
  },
};
</script>
