<template>
  <div id="app">
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script lang="ts">
// Vue
import { Component, Vue } from 'vue-property-decorator';

// Components
import Header from "./components/Header/index.vue";
import Footer from "./components/Footer/index.vue";

// Functions
import { autoLogin } from "./utils/autoLogin";

@Component({
  components: {
    Header,
    Footer
  }
})
export default class App extends Vue {
  public beforeMount(): void {
    autoLogin();
  }
}
</script>

<style>

</style>
