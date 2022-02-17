<template>
  <main class="user-area-container">
    <nav>
      <div class="nav-item">
        <p>Seus dados</p>
      </div>
      <div class="nav-item">
        <p>Links salvos</p>
      </div>
    </nav>
    <div class="user-info">
      <p>Nome: username</p>
      <p>email: user email</p>
      <p>Quantidade de URL's criadas</p>
    </div>
  </main>
</template>

<script>
// Vue
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class UserArea extends Vue {

}
</script>

<style scoped>
.user-area-container {
  width: 100%;
  min-height: 100vh;
  padding: 2rem 5% 4rem;

  display: grid;
  grid-template-columns: 0.3fr 1fr;
  gap: 0 5%;
}

nav {
  border-right: 1px solid red;
}
</style>