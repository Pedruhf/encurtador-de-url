<template>
  <main class="most-accessed-container">
    <table>
      <thead>
        <tr>
          <th>Url Original</th>
          <th>Url Encurtada</th>
          <th>Quantidade de acessos</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="url in mostAccessedsUrls" :key="url._id">
          <td><a target="_blank" :href="url.originalURL">{{ url.originalURL }}</a></td>
          <td><a target="_blank" :href="url.shortenedURL">{{ url.shortenedURL  }}</a></td>
          <td>{{ url.hitCounter }}</td>
        </tr>
      </tbody>
    </table>
  </main>
</template>

<script lang="ts">
// Vue
import Vue from "vue";
import Component from "vue-class-component";

// Instances
import { api } from "../../main/composers/api";
import { Url } from "../../models/url";

@Component({})
export default class MostAccessedUrls extends Vue {
  public mostAccessedsUrls: Url[];

  constructor() {
    super();
    this.mostAccessedsUrls = [];
  }

  public async getMostAccessedUrls(): Promise<Url[]> {
    const res = await api.request.get("urls/most-accesseds");
    return res.data;
  }

  public async mounted(): Promise<void> {
    this.mostAccessedsUrls = await this.getMostAccessedUrls();
  }
}
</script>

<style scoped>
.most-accessed-container {
  width: 100%;
  min-height: 100vh;
  padding: 3rem 5%;
}

table {
  width: 100%;
  padding: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0.4rem 0.4rem 1rem rgba(0, 0, 0, 0.2);
  border-collapse: separate;
  border-spacing: 0.5rem;
}

table th, table td {
  text-align: center;
  font-size: 1.1vw;
}

table td:first-child, th:first-child {
  text-align: left;
}

table td a {
  text-decoration: none;
  color: inherit;
}

table td a:hover {
  text-decoration: underline;
}
</style>