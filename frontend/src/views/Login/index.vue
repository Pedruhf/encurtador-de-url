<template>
  <main class="login-container">
    <img src="../../assets/login-illustration.svg" alt="">
    <div class="login-content">
      <h1>Entrar</h1>
      <input v-model="email" type="text" placeholder="E-mail" />
      <input v-model="password" type="password" placeholder="Senha" />
      <button @click="handleLogin(email, password)">Entrar</button>
      <p>Ainda não está cadastrado? <router-link to="/cadastro">cadastre-se aqui</router-link></p>
    </div>
  </main>
</template>

<script lang="ts">
// Vue
import Vue from "vue";
import Component from "vue-class-component";

// Instances
import { api, tokenHandler } from "../../main/composers/api";
import { loginUserUseCase } from "../../main/composers/user";

@Component({})
export default class Login extends Vue {
  public email: string;
  public password: string;

  constructor() {
    super();
    this.email = "";
    this.password = "";
  }

  public async handleLogin(email: string, password: string): Promise<void> {
    try {
      const { user, token } = await loginUserUseCase.execute(email, password);

      const now = Number(new Date()) / 1000;

      tokenHandler.setDataInLocalStorage(JSON.stringify({
        user: user,
        token: token,
        tokenExpires: now + (60 * 60 * 24),
      }));

      this.$store.commit("userStore/setUser", {
        ...user
      });

      this.$router.push({ name: "account" });
    } catch (error) {
      alert(error.response.data.error);
    }
  }
}
</script>

<style scoped>
.login-container {
  width: 100%;
  min-height: 100vh;
  padding: 2rem 5% 4rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 10%;
  align-items: center;
}

.login-content {
  width: 80%;
  display: flex;
  flex-direction: column;
}

.login-content h1 {
  font-size: 3.1vw;
  color: var(--very-dark-blue-color);
  line-height: 3.5rem;
}

input {
  width: 100%;
  height: 2.5rem;
  margin-top: 1rem;
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
  padding: 0.5rem 1.5vw;
  border-radius: 2rem;
  border: 1px solid var(--cyan-color);
  outline: 0;
  font-size: 1.2vw;
  color: var(--cyan-color);
  background: #fff;

  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  filter: brightness(0.95);
}

.login-content p {
  margin-top: 1rem;
  font-size: 1.2vw;
  color: var(--gray-color);
}

.login-content p a {
  color: inherit;
  text-decoration: none;
  font-weight: bold;
}

.login-content p a:hover {
  text-decoration: underline;
}
</style>