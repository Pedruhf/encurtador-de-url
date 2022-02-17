<template>
  <div class="slogan-container">
    <img src="../../assets/link-background.svg" alt="Link Ilustration">
    <div class="slogan-text">
      <h1>Encurte seus links<br />com facilidade e<br />totalmente de graça</h1>
      <p>Transforme suas URL's para parecem mais agradáveis</p>
      <button>Começar agora</button>
    </div>
  </div>
</template>

<script>
// Vue
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Slogan extends Vue {}
</script>

<style scoped>
.slogan-container {
  margin: 0 5% 0;
  padding-bottom: 7.5rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 0 2rem;
}
.slogan-container img {
  width: 35rem;
}


.slogan-text h1 {
  font-size: 3rem;
  color: var(--very-dark-blue-color);
  line-height: 3.5rem;
}

.slogan-text p {
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: var(--gray-color);
}

button {
  margin-top: 2rem;
  width: max-content;
  height: 2.75rem;
  padding: 0.5rem 1.5rem;
  border-radius: 2rem;
  border: 0;
  outline: 0;
  font-size: 1rem;
  background: var(--cyan-color);
  color: #fff;
}

button:hover {
  filter: brightness(0.95);
}
</style>