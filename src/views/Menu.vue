<template>
  <div class="home">
    <Slider
      preTitle="Nuestros products"
      :isBig="false"
      title="Cocinamos por tu"
    />

    <section class="delicious-menu">
      <div class="container">
        <div class="columns is-multiline">
          <div class="column is-12">
            <div
              class="mt-6 mb-5 nav-pills is-flex is-align-items-center is-justify-content-center"
            >
              <a
                v-for="category in categories"
                :key="category.slug"
                class="nav-link"
                :class="{ active: currentCategory === category.slug }"
                @click="currentCategory = category.slug"
              >
                {{ category.title }}
              </a>
            </div>
          </div>
          <div class="column is-12 is-flex is-align-items-center">
            <div class="columns is-multiline">
              <ProductItem
                v-for="item in filteredProducts"
                :key="item._id"
                :value="item"
                @add="addToOrder(item)"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="delicious-intro mt-5">
      <div class="container-wrap">
        <div class="wrap is-flex">
          <div class="info">
            <div class="columns is-gapless">
              <div class="column is-3 is-flex">
                <div class="text">
                  <h3>YOU ORDER</h3>
                  <p>Add your delicious order and press "Order" button</p>
                </div>
              </div>
              <div class="column is-9 is-flex">
                <div class="text">
                  <table class="table is-fullwidth">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Subtotal</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(item, index) in cart" :key="index">
                        <td>{{ item.title }}</td>
                        <td>
                          <a href="#" @click.prevent="decreaseOrder(item)">
                            -
                          </a>
                          <span class="px-3">{{ item.quantity }}</span>
                          <a href="#" @click.prevent="increaseOrder(item)">
                            +
                          </a>
                        </td>
                        <td>{{ item.unitPrice | toMoney }}</td>
                        <td>
                          {{ (item.unitPrice * item.quantity) | toMoney }}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div class="social is-flex pl-md-5 p-4 is-align-items-center">
            <div class="text">
              <h2>TOTAL</h2>
              <h4>{{ total | toMoney }}</h4>
            </div>
            <a
              class="p-3 px-xl-4 py-xl-3 button is-white is-outlined"
              @click.prevent="sendOrder"
              >Order Now</a
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Slider from "@/components/Slider";
import ProductItem from "@/components/partials/ProductItem";

export default {
  name: "Menu",
  components: {
    Slider,
    ProductItem,
  },
  data() {
    return {
      categories: [
        { title: "Todos", slug: null },
        { title: "Pizza", slug: "pizza" },
        { title: "Bebidas", slug: "drink" },
        { title: "Hamburguesas", slug: "burger" },
        { title: "Pasta", slug: "pasta" },
      ],
      currentCategory: null,
      products: [],
    };
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.getters.cartTotal;
    },
    filteredProducts() {
      if (this.currentCategory === null) return this.products;

      return this.products.filter(
        (item) => item.category === this.currentCategory
      );
    },
    isAuth() {
      return this.$store.getters.isAuth;
    }
  },
  methods: {
    async sendOrder() {
      try {
        if (!this.isAuth) {
          alert("Debes estar identificado para hacer un pedido");
          return;
        }

        const orderToSend = {
          products: [],
          notas: "Nos queda por implementar un textarea para esto",
        };

        for (const item of this.cart) {
          orderToSend.products.push({
            id: item.id,
            qty: item.quantity,
          });
        }

        await this.$api.orders.send(orderToSend)

        this.$store.dispatch('emptyCart')
        this.$router.push("/my-orders");
      } catch (error) {
        alert("El pedido no se ha podido registrar. Inténtalo más tarde.");
      }
    },
    increaseOrder(item) {
      this.$store.dispatch("increaseCartItem", item.id);
    },
    decreaseOrder(item) {
      this.$store.dispatch("decreaseCartItem", item.id);
    },
    addToOrder(item) {
      this.$store.dispatch("addToCart", item);
    },
  },
  async beforeMount() {
    try {
      this.products = await this.$api.products.list()
    } catch (error) {
      alert("Error cargando los productos");
    }
  },
};
</script>
