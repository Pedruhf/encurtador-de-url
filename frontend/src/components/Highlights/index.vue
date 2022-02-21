<template>
  <div class="highlights-container">
    <div id="url-container" class="link-container">
      <input v-model="inputUrl" type="text" placeholder="Insira sua URL" />
      <button @click="handleCreateUrlShortened">Encurtar</button>
    </div>

    <div class="created-urls" v-for="url in createdUrls" :key="url._id">  
      <p>{{ url.shortenedURL }} -> {{ url.originalURL }}</p>
    </div>
    
    <div class="highlights-content">
      <h1>Destaques</h1>
      <p>Aqui mostramos alguns indicadores<br />que poderão te ajudar a ter mais visilibidade</p>

      <div class="hightlights-cards">
        <div class="hightlights-card">
          <img src="../../assets/icon-brand-recognition.svg" alt="Records">
          <strong>Quantidade de acessos</strong>
          <p>Veja quantidade de acessos que estão acontecendo nas suas URL's</p>
        </div>
        <div class="hightlights-card">
          <img src="../../assets/icon-detailed-records.svg" alt="Records">
          <strong>Seus links salvos</strong>
          <p>Tenha seus links encurtados salvos para consultar a hora que quiser</p>
        </div>
        <div class="hightlights-card">
          <star-icon />
          <strong>Top 100 URL's mais acessadas</strong>
          <p>Análise quais estão sendo as URL's mais acessadas do momento</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// Vue
import Vue from "vue";
import Component from "vue-class-component";

// Models
import { Url } from "../../domain/models/url";

// Instances
import { api, tokenHandler } from "../../main/composers/api";

// Models
import { User } from "../../domain/models/user";

// Icons
import StarIcon from "vue-material-design-icons/StarCircleOutline.vue";

@Component({
  components: {
    StarIcon,
  }
})
export default class Highlights extends Vue {
  public inputUrl: string;
  public createdUrls: Url[]

  constructor() {
    super();
    this.inputUrl = "";
    this.createdUrls = [];
  }

  public get user(): User {
    return this.$store.state.userStore.user;
  }

  public get userIsLogged(): boolean {
    return this.$store.getters["userStore/isLogged"];
  }

  public handleAddToCreateUrls(url: Url): void {
    const urlExists = this.createdUrls.find(item => item._id === url._id);
    if (urlExists) return;

    this.createdUrls.push(url);
  }

  public handleAddToUserUrls(url: Url): void {
    const owner = url.owner;
    if (!owner || owner !== this.user._id) {
      return;
    }

    const urlExists = this.user.savedUrls?.find(item => item._id === url._id);
    if (urlExists) return;

    this.user.savedUrls?.push(url);

    const localStorageData = tokenHandler.getDataFromLocalStorage();
    tokenHandler.setDataInLocalStorage(JSON.stringify({
      ...localStorageData,
      user: this.user,
    }));
  }

  public async handleCreateUrlShortened(): Promise<void> {
    const requestURL = this.userIsLogged ? "auth" : "";
    try {
      const res = await api.request.post(requestURL, {
        originalURL: this.inputUrl,
      });

      this.handleAddToCreateUrls(res.data);
      this.handleAddToUserUrls(res.data);

      this.inputUrl = "";
    } catch (error) {
      alert(error.response.data.error);
    }
  }
}
</script>

<style scoped>
.highlights-container {
  width: 100%;
  padding-bottom: 4rem;

  background: #eeeeee;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.link-container {
  width: 80%;
  height: 10rem;
  padding: 0 5%;
  margin-top: -5rem;
  border-radius: 0.5rem;

  background: var(--dark-violet-color);
  background-image: url("../../assets/bg-shorten-desktop.svg");
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;
}

.link-container input {
  width: 75%;
  height: 3rem;
  padding: 0 1rem;

  border-radius: 0.5rem;
  border: 0;
  outline: 0;
}

.link-container button {
  width: 15%;
  margin-left: 1.5rem;

  height: 2.75rem;
  border-radius: 0.5rem;
  border: 0;
  outline: 0;
  font-size: 1.4vw;
  background: var(--cyan-color);
  color: #fff;
}

button:hover {
  filter: brightness(0.95);
}

.created-urls {
  width: 80%;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0.4rem 0.4rem 1rem rgba(0, 0, 0, 0.2);
  text-align: center;
}

.highlights-content {
  margin-top: 7.5rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.highlights-content h1 {
  font-size: 3vw;
  color: var(--very-dark-blue-color);
}

.highlights-content p {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 1.2vw;
  color: var(--gray-color);
}

.hightlights-cards {
  margin-top: 4rem;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 1rem;

  flex-wrap: wrap;
}

.hightlights-card {
  width: 25rem;
  padding: 2rem 3rem;
  background: #fff;
  border-radius: 0.3rem;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.hightlights-card strong,
.hightlights-card p {
  font-size: 1.2vw;
  text-align: center;
  margin-top: 0.5rem;
}

.hightlights-card span {
  display: flex;
}

.hightlights-card .material-design-icon >>> svg {
  color: var(--cyan-color);
  height: 2.6rem;
  width: 2.6rem !important;
}
</style>