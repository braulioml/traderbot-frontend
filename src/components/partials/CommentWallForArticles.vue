<template>
  <section class="">

    <h1 class="p-3">Comments:</h1>

      <div class="column is-full">
        <li v-for="item in value.comments" :key="item.id">
           {{ item }}
        </li>
      </div>

  </section>
</template>

<script>


export default {
  name: "CommentWallForArticles",
  data() {
    return {
    };
  },
  computed: {
      // comments(){
      //     return JSON.parse(value);
      // }
  },
  props: {
      value: Object
  }
};
</script>

<style>
</style>