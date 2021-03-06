<template>
  <main class="user-area-container">
    <div class="user-area-card">
      <h1>Configurações da conta</h1>
      <div class="user-area-content">
        <nav>
        <div class="nav-item" :class="navOption === 0 && 'selected'" @click="navOption = 0">
          <user-icon />
          <p>Seus dados</p>
        </div>
        <div class="nav-item" :class="navOption === 1 && 'selected'" @click="navOption = 1">
          <url-icon />
          <p>Links salvos</p>
        </div>
      </nav>
      <div v-if="navOption === 0 && !isEditing" class="user-info">
        <p><strong>Nome:</strong> {{ user.name || "Não informado" }}</p>
        <p><strong>email:</strong> {{ user.email || "Não informado" }}</p>
        <p><strong>Quantidade de URL's criadas:</strong> {{ user.savedUrls ? user.savedUrls.length : "Não informado" }}</p>
        <button @click="isEditing = true">Editar</button>
      </div>
      <div v-if="navOption === 0 && isEditing" class="user-info">
        <input v-model="userToUpdate.name" type="text" placeholder="Nome">
        <input v-model="userToUpdate.email" type="e-mail" placeholder="E-mail">
        <div class="control-buttons">
          <button @click="isEditing = false">Cancelar</button>
          <button @click="handleUpdateUser()">Salvar</button>
        </div>
      </div>
      <div v-if="navOption === 1" class="URL-container">
        <div v-for="url in user.savedUrls" :key="url._id" class="URL-card">
          <p>{{ url.shortenedURL }} -> {{ url.originalURL }}</p>
          <delete-icon @click="handleDeleteURL(url._id)" />
        </div>
      </div>
      </div>
    </div>
  </main>
</template>

<script lang="ts">
// Vue
import Vue from "vue";
import Component from "vue-class-component";

// Icons
import UserIcon from "vue-material-design-icons/Account.vue";
import UrlIcon from "vue-material-design-icons/LinkBoxVariant.vue";
import DeleteIcon from "vue-material-design-icons/Delete.vue";

// Models
import { User } from "../../domain/models/user";

// Instances
import { api, tokenHandler } from "../../main/composers/api";
import { Url } from "../../domain/models/url";

// Types
type UserToUpdate = {
  name: string;
  email: string;
}

@Component({
  components: {
    UserIcon,
    UrlIcon,
    DeleteIcon,
  }
})
export default class UserArea extends Vue {
  public isEditing: boolean;
  public navOption: number;
  public userToUpdate: UserToUpdate;

  constructor() {
    super();
    this.isEditing = false;
    this.navOption = 0;
    this.userToUpdate = {
      name: this.user.name,
      email: this.user.email,
    }
  }

  public get user(): User {
    return this.$store.state.userStore.user;
  }

  public handleDeleteUserURL(id: string): void {
    const urlIndex = this.user.savedUrls?.findIndex((item: Url) => item._id === id) as number;
    if (urlIndex < 0) {
      return;
    }

    this.user.savedUrls?.splice(urlIndex, 1);
    const localStorageData = tokenHandler.getDataFromLocalStorage();
    tokenHandler.setDataInLocalStorage(JSON.stringify({
      ...localStorageData,
      user: this.user,
    }));
  }

  public async handleDeleteURL(id: string): Promise<void> {
    try {
      await api.request.delete(`${id}`);
      this.handleDeleteUserURL(id);
    } catch (error) {
      alert(error.response.data.error);
    }
  }

  public async handleUpdateUser(): Promise<void> {
    try {
      await api.request.put("users", this.userToUpdate);
      alert("Informações atualizadas com sucesso!");

      this.user.name = this.userToUpdate.name;
      this.user.email = this.userToUpdate.email;

      const localStorageData = tokenHandler.getDataFromLocalStorage();
      tokenHandler.setDataInLocalStorage(JSON.stringify({
        ...localStorageData,
        user: this.user,
      }));

      this.isEditing = false;
    } catch (error) {
      alert(error.response.data.error);
    }
  }
}
</script>

<style scoped>
.user-area-container {
  width: 100%;
  min-height: 100vh;
  padding: 2rem 5% 4rem;
}

.user-area-card {
  min-height: 20rem;
  padding: 1rem 2rem 3rem;
  border-radius: 1rem;
  border-top: 1px solid rgba(0, 255, 242, 0.3);
  border-left: 1px solid rgba(0, 255, 242, 0.3);
  box-shadow: 0.4rem 0.4rem 1rem rgba(0, 0, 0, 0.2); 
}

.user-area-card h1 {
  font-size: 1.75rem;
  color: var(--very-dark-blue-color);
}

.user-area-content {
  margin-top: 1.5rem;

  display: flex;
  gap: 0 5%;
}

nav {
  width: 20%;
  min-width: max-content;
  border-right: 1px solid rgba(0, 255, 242, 0.2);
}

.nav-item {
  padding: 0.2rem 0.3rem;
  border-top-left-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;

  display: flex;
  align-items: center;
  cursor: pointer;
}

.nav-item span {
  margin-top: 0.3rem;
  margin-right: 0.5rem;
}

.nav-item.selected {
  background: #3936420e;
}

.nav-item:hover {
  background: #3936421a;
}

.nav-item + .nav-item {
  margin-top: 1rem;
}

.user-info, .URL-container {
  display: flex;
  flex-direction: column;
  width: 75%;
}

.user-info p {
  margin-top: 1rem;
}

.user-info button {
  margin-top: 2rem;
  width: max-content;
  height: 2.4rem;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  border: 1px solid var(--cyan-color);
  background: #fff;
  outline: 0;
  font-size: 1rem;
  color: var(--cyan-color);

  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
}

.user-info button:hover {
  filter: brightness(0.95);
}

.user-info input {
  width: 70%;
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

.user-info .control-buttons {
  display: flex;
  align-items: center;
  align-self: flex-end;
}

.user-info .control-buttons button + button {
  margin-left: 1rem;
  background: var(--cyan-color);
  color: #fff;
}

.URL-card {
  width: 95%;
  margin-top: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  border-top: 1px solid rgba(0, 255, 242, 0.3);
  border-left: 1px solid rgba(0, 255, 242, 0.3);
  box-shadow: 0.4rem 0.4rem 1rem rgba(0, 0, 0, 0.2); 

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.URL-container p {
  max-width: 95%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.URL-card span {
  margin-top: 0.3rem;
  cursor: pointer;
  color: var(--red-color);
  transition: filter 0.3s;
}

.URL-card span:hover {
  filter: brightness(0.6);
}
</style>