<template>
  <div class="column is-half is-offset-one-quarter">

        <div class=" box m-1 ">
            <h4 class="tag has-background-primary-light is-rounded">{{value.side}}</h4>
            <h4 class="tag has-background-primary-light is-rounded">{{value.size}}%</h4>
            <h4 class="tag has-background-primary-light is-rounded">{{value.received_at}}</h4>
            <h4 class="tag has-background-primary-light is-rounded">Done: {{value.executed}}</h4>
        </div>
        
</div>
</template>

<script>

export default {
    name: "SignalItem",
    components: {
    },
    props: {
        value: Object
    }
}
</script>