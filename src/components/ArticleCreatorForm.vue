<template>
  <section class="has-background-warning-light p-2">
    <h1 class="title has-text-centered">Article Creator Form</h1>
    <div class="columns is-mobile is-centered m-5">
        <div class="column is-half">
          <b-field class="title" label="Title">
          <b-input
                v-model="articleTitle"
                type="text"
                class="form-control"
              />
        </b-field>

         <b-field class="title" label="Category">
              <b-input
              v-model="articleCategory"
              type="text"
              class="form-control"
              />
            </b-field>

          <b-field class="title" label="Excerpt">
            <b-input
              maxlength="500"
              v-model="articleExcerpt"
              type="textarea"
              class="form-control"/>
          </b-field>
           <button class="button is-warning" @click="uploadArticle">
                Upload Article
              </button>
            </div>
            
    </div>
  </section>
</template>

<script>
export default {
  name: "ArticleCreatorForm",
  data() {
    return {
      articleTitle: "",
      articleExcerpt: "",
      articleCategory: "",
    };
  },
  methods: {
    async uploadArticle() {
      try {
        const articleData = {
          title: this.articleTitle,
          slug: "",
           category: this.articleCategory,
          excerpt: this.articleExcerpt
         
        }

        console.log(articleData)
        
        const response = await this.$api.articles.upload(articleData)
        console.log(response)
      } catch (error) {
        console.log(error)
        alert("Article could not be uploaded.")
      }
    },
  },
};
</script>
