<template>
  <div class="column is-4">
    <div class="services-wrap is-flex">
        <a
            class="img"
            href="#"
            :style="`background-image: url(${value.image});`"
        ></a>
        <div class="text p-4">
            <h3>{{value.title}}</h3>
            <p>{{value.description}}</p>
            <p class="price">
                <span>{{value.price | toMoney }}</span>
                <a class="ml-2 button is-white is-outlined" href="#"
                >Order</a
                >
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: "PizzaItem",
    props: {
        value: Object
    }
}
</script>