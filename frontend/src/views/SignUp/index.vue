<template>
  <main class="signup-container">
    <img src="../../assets/signup-illustration.svg" alt="">
    <div class="signup-content">
      <h1>Cadastro</h1>
      <input v-model="userToRegister.name" type="text" placeholder="Nome" />
      <input v-model="userToRegister.email" type="text" placeholder="E-mail" />
      <input v-model="userToRegister.password" type="password" placeholder="Senha" />
      <input v-model="userToRegister.confirmPassword" type="password" placeholder="Confirme sua senha" />
      <button @click="handleRegister(userToRegister)">Cadastrar</button>
      <p>Ja tem uma conta? <router-link to="/entrar">faça login</router-link></p>
    </div>
  </main>
</template>

<script lang="ts">
// Vue
import Vue from "vue";
import Component from "vue-class-component";

// Types
import { IRegisterUserRequestoDTO } from "../../domain/useCases/user/register/registerUserRequestoDTO";

// Instances
import { registerUserUseCase } from "../../main/composers/user";

@Component({})
export default class SignUp extends Vue {
  public userToRegister: IRegisterUserRequestoDTO;

  constructor() {
    super();
    this.userToRegister = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  public resetRegisterFields(): void {
    this.userToRegister = {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  public async handleRegister(data: IRegisterUserRequestoDTO): Promise<void> {
    try {
      await registerUserUseCase.execute(data);
      this.resetRegisterFields();
      alert("Cadastro realizado com sucesso");
      this.$router.push({ name: "login" });
    } catch (error) {
      alert(error.response.data.error);
    }
  }
}
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

.signup-content p {
  margin-top: 1rem;
  color: var(--gray-color);
  font-size: 1.2vw;
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