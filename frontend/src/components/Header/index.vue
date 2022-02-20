<template>
  <header class="header-container">
    <nav class="logo">
      <router-link to="/">
        <img src="../../assets/logo.svg" alt="Shortly" />
      </router-link>
      <router-link to="/urls-mais-acessadas">Mais clickadas</router-link>
    </nav>
    <div v-if="!user._id" class="auth-buttons">
      <router-link to="/entrar" class="sign-in">Entrar</router-link>
      <router-link to="/cadastro" class="sign-up">Cadastrar-se</router-link>
    </div>
    <div v-else>
      <div class="open-dropdown">
        <p>{{ user.name }}</p>
        <dropdown-icon />
      </div>
      <div class="menu-dropdown">
        <router-link :to="{ name: 'account' }" class="dropdown-item">Conta</router-link>
        <hr>
        <p @click="handleLogout" class="dropdown-item">Sair</p>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
// Vue
import Vue from "vue";
import Component from "vue-class-component";

// Icons
import LogoutIcon from "vue-material-design-icons/Logout.vue";
import DropdownIcon from "vue-material-design-icons/ChevronDown.vue";

// Instances
import { tokenHandler } from "../../main/composers/api";

@Component({
  components: {
    LogoutIcon,
    DropdownIcon,
  }
})
export default class Header extends Vue {
  public get user() {
    return this.$store.state.userStore.user;
  }

  public handleLogout(): void {
    this.$store.commit("userStore/setUser", {});
    tokenHandler.clearLocalStorage();
    this.$router.push({ name: "login" });
  }
}
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
  font-size: 1.5vw;
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
  width: 10vw;
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
  padding: 0.5rem 1vw;
  border-radius: 2rem;
  border: 0;
  outline: 0;
  font-size: 1vw;
  text-decoration: none;
}

.auth-buttons a:hover {
  filter: brightness(0.95);
}

.open-dropdown {
  display: flex;
  align-items: center;
  cursor: pointer;
}

.open-dropdown span {
  margin-top: 0.5rem;
}

.menu-dropdown {
  display: none;
  border-radius: 0.5rem;

  min-width: 10rem;
  position: absolute;
  top: 4.2rem;
  right: 3.5%;
  padding: 1rem;
  
  box-shadow: 0.4rem 0.4rem 1rem rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.open-dropdown p {
  font-size: 1.4vw;
}

.menu-dropdown hr {
  width: 80%;
  margin-top: 0.75rem;
  margin-bottom: 0.3rem;
  border-top: 1px solid var(--dark-violet-color);;
  background: var(--dark-violet-color);
  max-height: 1px;
}

.menu-dropdown:hover {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-dropdown .dropdown-item {
  width: 100%;
  border-radius: 0.3rem;
  padding: 0.3rem 0;
  cursor: pointer;
  text-align: center;
  transition: background 0.3s;
  text-decoration: none;
  color: var(--dark-violet-color);
}

.menu-dropdown .dropdown-item:hover {
  background: #eee;
}

.open-dropdown:hover ~ .menu-dropdown {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
