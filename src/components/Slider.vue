<template>
    <section :class="{'home-slider' : isBig }" class="slider">
    <div class="slider-item" style="background-image: url(images/bg_3.jpg);">
        <div class="overlay"></div>
        <div class="container">
            <div class="columns slider-text is-justify-content-center is-align-items-center" data-scrollax-parent="true">
                <div class="column has-text-centered ">
                    <span class="subheading">{{preTitle}}</span>
                    <h1>{{title}}</h1>
                    <p class="mb-4 mb-md-5">
                        {{desc}}
                    </p>
                    <p v-if="btnInfo">
                        <a class="button is-warning" :href="btnInfo.url">{{btnInfo.title}}</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    name: "Slider",
    props:{
        preTitle: {
            type: String,
        },
        title: {
            type: String,
        },
        desc: {
            type: String,
        },
        btnInfo:{
            type: Object,
            default: null
        },
        isBig:{
            type: Boolean,
            default: true
        }
    }
}
</script>
