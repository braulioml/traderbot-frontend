<template>
  <section class="delicious-section order-section">
    <div class="container">
      <div class="columns is-multiline">
        <div class="column is-12">
          <h4 class="title has-text-white">
            Orders
            <small> ( <a href="#" @click="logout">Logout</a> ) </small>
          </h4>
        </div>
        <div class="column is-6">
          <h4 class="subtitle has-text-white">My orders</h4>
          <table class="table text-white">
            <thead>
              <tr>
                <th>Date</th>
                <th>Total</th>
                <th>Status</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in orders" :key="item._id">
                <td>{{item.created_at}}</td>
                <td>{{item.total | toMoney }}</td>
                <td>{{item.status}}</td>
                <td>
                  <a
                    href="#"
                    class="btn btn-white btn-outline-white"
                    @click="currentOrder = item"
                    >View details</a
                  >
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="column is-6" v-if="currentOrder">
          <h4 class="subtitle has-text-white">Order Detail</h4>
          <table class="table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Cantidad</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="item in currentOrder.products" :key="item._id">
                <td>{{item.title}}</td>
                <td>{{item.qty}}</td>
              </tr>
            </tbody>
          </table>
          <h6 class="title has-text-warning has-text-right">Total: {{ currentOrder.total | toMoney }}</h6>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MyOrders",
  data() {
    return {
      currentOrder : null,
      orders: [],
    };
  },
  computed: {
    userToken(){
      return this.$store.getters.token
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')

      this.$router.push("/");
    },
  },
  async mounted() {
    try {
      this.orders = await this.$api.orders.list()
    } catch (error) {
      const responseError = error.response;

      if (responseError.status === 401) {
        this.$store.dispatch('logout')

        this.$router.push("/login")
      }
    }
  },
};
</script>

<style>
</style>