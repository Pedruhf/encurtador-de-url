<template>
  <main class="signup-container">
    <img src="../../assets/signup-illustration.svg" alt="">
    <div class="signup-content">
      <h1>Cadastro</h1>
      <input type="text" placeholder="Nome" />
      <input type="text" placeholder="E-mail" />
      <input type="password" placeholder="Senha" />
      <input type="password" placeholder="Confirme sua senha" />
      <button>Cadastrar</button>
      <p>Ja tem uma conta? <router-link to="/entrar">faça login</router-link></p>
    </div>
  </main>
</template>

<script>
// Vue
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class SignUp extends Vue {}
</script>

<style scoped>
.signup-container {
  width: 100%;
  min-height: 100vh;
  padding: 2rem 5% 4rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 10%;
  align-items: center;
}

.signup-content {
  width: 80%;
  display: flex;
  flex-direction: column;
}

.signup-content h1 {
  font-size: 3rem;
  color: var(--very-dark-blue-color);
  line-height: 3.5rem;
}

input {
  width: 100%;
  height: 2.5rem;
  margin-top: 1.5rem;
  padding: 0 1rem;

  border-radius: 0.5rem;
  border: 1px solid var(--cyan-color);
  outline: 0;
}

input + input {
  margin-top: 1rem;
}

button {
  margin-top: 2rem;
  width: max-content;
  height: 2.4rem;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  border: 1px solid var(--cyan-color);
  outline: 0;
  font-size: 1rem;
  color: var(--cyan-color);

  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  filter: brightness(0.95);
}

.signup-content p {
  margin-top: 1rem;
  color: var(--gray-color);
}

.signup-content p a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}

.signup-content p a:hover {
  text-decoration: underline;
}
</style>