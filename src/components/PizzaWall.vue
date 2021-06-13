<template>
  <section class="delicious-section">
    <div class="container">
      <div class="columns is-justify-content-center mb-5 pb-3">
        <div class="column is-7 heading-section has-text-centered">
          <h2 class="mb-4">Hot Featured Meals</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
    </div>
    <div class="container-wrap">
      <div class="columns is-gapless is-flex is-multiline">
        <PizzaItem
          v-for="item in featuredProducts"
          :value="item"
          :key="item._id"
        />
      </div>
    </div>

    <div class="container">
      <div class="columns is-justify-content-center mb-5 pb-3 mt-5 pt-5">
        <div class="column is-7 heading-section has-text-centered">
          <h2 class="mb-4">Our Pizza Pricing</h2>
          <p class="flip">
            <span class="deg1"></span><span class="deg2"></span
            ><span class="deg3"></span>
          </p>
          <p class="mt-5">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
      </div>
      <div class="columns is-multiline">
        <MenuItem v-for="item in pizzaProducts" :value="item" :key="item._id" />
      </div>
    </div>
  </section>
</template>

<script>
import PizzaItem from "@/components/partials/PizzaItem";
import MenuItem from "@/components/partials/MenuItem";

export default {
  name: "PizzaWall",
  components: {
    PizzaItem,
    MenuItem,
  },
  data() {
    return {
      products: [],
    };
  },
  computed: {
    featuredProducts() {
      return this.products.filter((item) => item.featured);
    },
    pizzaProducts() {
      return this.products.filter((item) => item.category === "pizza");
    },
  },
  async beforeMount() {
    try {
      this.products = await this.$api.products.list();
    } catch (error) {
      alert(error.message);
    }
  },
};
</script>

<style>
</style>