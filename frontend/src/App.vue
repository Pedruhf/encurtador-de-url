<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script lang="ts">
// Vue
import { Component, Vue } from 'vue-property-decorator';

// Components
import Header from "./components/Header/index.vue";

@Component({
  components: {
    Header,
  }
})
export default class App extends Vue {}
</script>

<style>

</style>
