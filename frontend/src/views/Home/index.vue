<template>
  <main class="home-container">
    <Slogan />
    <Highlights />
  </main>
</template>

<script>
// Vue
import Vue from "vue";
import Component from "vue-class-component";

// Componenets
import Slogan from "../../components/Slogan/index.vue";
import Highlights from "../../components/Highlights/index.vue";

@Component({
  components: {
    Slogan,
    Highlights,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
</style>
