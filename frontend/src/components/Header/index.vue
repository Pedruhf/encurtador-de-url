<template>
  <div class="header-container">
    <div class="logo">
      <h1>Shortly</h1>
    </div>
    <div class="auth-buttons">
      <button class="sign-in">Entrar</button>
      <button class="sign-up">Cadastrar-se</button>
    </div>
  </div>
</template>

<script>
// Vue
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Header extends Vue {}
</script>

<style scoped>
.header-container {
  width: 100%;
  height: max-content;
  padding: 1rem 2rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.auth-buttons .sign-in {
  background: #fff;
}

.auth-buttons .sign-up {
  margin-left: 1rem;
  background: var(--cyan-color);
  color: #fff;
}

button {
  width: max-content;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  border: 0;
  border-radius: 2rem;
  outline: 0;
}

button:hover {
  filter: brightness(0.9);
}
</style>
