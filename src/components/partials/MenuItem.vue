<template>
    <div class="column is-6 pricing-entry is-flex ">
        <div class="img"
                :style="`background-image: url(${value.image});`"
        ></div>
        <div class="desc pl-3">
            <div class="is-flex text is-align-items-center">
                <h3><span>{{ value.title }}</span></h3>
                <span class="price">{{value.price | toMoney }}</span>
            </div>
            <div class="is-block">
                <p>
                    {{value.description}}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuItem",
    props: {
        value: Object
    }
}
</script>