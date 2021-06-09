<template>
  <div class="column is-half is-offset-one-quarter">

        <div class=" box m-1 ">
            <h3 class="is-size-5 has-text-weight-semibold">{{value.title}}</h3>
            <h4 class="tag has-background-danger-light is-rounded">{{value.published_at}}</h4>
            <h4 class="tag has-background-primary-light is-rounded">{{value.category}}</h4>
            <p class=" subtitle-5">{{value.excerpt}}</p>
            <CommentWallForArticles :value="value" />
        </div>
        
</div>
</template>

<script>
import CommentWallForArticles from "@/components/partials/CommentWallForArticles";

export default {
    name: "ArticleItem",
    components: {
        CommentWallForArticles
    },
    props: {
        value: Object
    }
}
</script>