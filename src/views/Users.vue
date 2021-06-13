<template>
  <section>
    <div class="columns is-mobile is-centered has-background-warning-light p-5">
      <div class="column is-half">
        <h1 class="title">Register</h1>
        <b-field label="First Name">
          <b-input type="text" v-model="firstname"></b-input>
        </b-field>

        <b-field label="Last Name">
          <b-input type="text" v-model="lastname"></b-input>
        </b-field>

        <b-field label="Email">
          <b-input type="email" v-model="email"></b-input>
        </b-field>

        <b-field label="Password">
          <b-input type="password" v-model="password"></b-input>
        </b-field>
              <button class="button is-success" @click="register">
                Create new user
              </button>
        </div>
      </div>
      
  </section>
</template>

<script>
export default {
  name: "Users",
  data() {
    return {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async register() {
      try {
        const credentials = {
          name: this.firstname,
          lastname: this.lastname,
          email: this.email,
          password: this.password,
        }

        const response = await this.$api.auth.register(this.email, this.password)


        const token = response.token        

        this.$store.dispatch('users', token)
    
        this.$router.push("/")
      } catch (error) {
        throw error
      }
    },
  },
};
</script>
