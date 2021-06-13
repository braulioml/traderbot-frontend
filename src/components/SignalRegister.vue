<template>
  <section class="has-background-warning-light">

    <h1 class="title has-text-centered p-3">Signal Register</h1>

      <div class="column is-full">
        <SignalItem
          v-for="item in signals"
          :value="item"
          :key="item._id"
        />
      </div>

  </section>
</template>

<script>
import SignalItem from "@/components/partials/SignalItem";

export default {
  name: "SignalRegister",
  components: {
    SignalItem
  },
  data() {
    return {
      signals: [],
    };
  },
  computed: {
  },
  async beforeMount() {
    try {
      this.signals = await this.$api.signals.list();
    } catch (error) {
      alert(error.message);
    }
  },
};
</script>

<style>
</style>