<template>
  <div class="home">

    <ArticleWall />
    <ArticleCreatorForm />


  </div>
</template>

<script>

import ArticleWall from "@/components/ArticleWall"
import ArticleCreatorForm from "@/components/ArticleCreatorForm"

export default {
  name: 'Home',
  components: {
    ArticleWall,
    ArticleCreatorForm
  }
}
</script>
