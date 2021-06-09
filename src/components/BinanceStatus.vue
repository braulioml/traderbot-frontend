<template>
  <section class="has-background-warning-light">

    <h1 class="title has-text-centered p-3">Article Wall</h1>

      <div class="column is-full">
        <ArticleItem
          v-for="item in articles"
          :value="item"
          :key="item._id"
        />
      </div>

  </section>
</template>

<script>
import ArticleItem from "@/components/partials/ArticleItem";

export default {
  name: "ArticleWall",
  components: {
    ArticleItem
  },
  data() {
    return {
      articles: [],
    };
  },
  computed: {
  },
  async beforeMount() {
    try {
      this.articles = await this.$api.articles.list();
    } catch (error) {
      alert(error.message);
    }
  },
};
</script>

<style>
</style>