<template>
  <div class="column is-4 has-text-centered">
    <div class="menu-wrap">
      <a
        class="menu-img img mb-4"
        href="#"
        :style="`background-image: url(${value.image})`"
      ></a>
      <div class="text">
        <h3><a href="#">{{value.title}}</a></h3>
        <p>
         {{value.description}}
        </p>
        <p class="price"><span>{{ value.price | toMoney }}</span></p>
        <p>
          <a @click.prevent="$emit('add')" class="button is-white is-outlined" href="#">Add to cart</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
      value: Object
  }
};
</script>

<style>
</style>