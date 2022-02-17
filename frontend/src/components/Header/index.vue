<template>
  <header class="header-container">
    <nav class="logo">
      <router-link to="/">
        <img src="../../assets/logo.svg" alt="Shortly" />
      </router-link>
      <router-link to="/urls-mais-acessadas">Mais clickadas</router-link>
    </nav>
    <div class="auth-buttons">
      <router-link to="/entrar" class="sign-in">Entrar</router-link>
      <router-link to="/cadastro" class="sign-up">Cadastrar-se</router-link>
    </div>
  </header>
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
  padding: 2rem 5%;

  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  display: flex;
  align-items: center;
}

.logo a {
  font-size: 1.3rem;
  text-decoration: none;
  color: var(--gray-violet-color);
  cursor: pointer;
  transition: filter 0.3s;
}

.logo a:hover {
  filter: brightness(0.5);
}

.logo a + a {
  margin-left: 3rem;
}

.logo img {
  margin-top: 0.5rem;
  cursor: pointer;
}

.auth-buttons .sign-in {
  background: #fff;
  color: var(--gray-violet-color);
}

.auth-buttons .sign-up {
  margin-left: 1rem;
  background: var(--cyan-color);
  color: #fff;
}

.auth-buttons a {
  width: max-content;
  height: 2.5rem;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  border: 0;
  outline: 0;
  font-size: 0.9rem;
  text-decoration: none;
}

.auth-buttons a:hover {
  filter: brightness(0.95);
}
</style>
