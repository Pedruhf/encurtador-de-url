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
  width: 40vw;
}


.slogan-text h1 {
  font-size: 3vw;
  color: var(--very-dark-blue-color);
  line-height: 3.5vw;
}

.slogan-text p {
  margin-top: 0.5rem;
  font-size: 1.5vw;
  color: var(--gray-color);
}

button {
  margin-top: 2rem;
  width: max-content;
  height: 3.5vw;
  padding: 0.5rem 2vw;
  border-radius: 2rem;
  border: 0;
  outline: 0;
  font-size: 1.2vw;
  background: var(--cyan-color);
  color: #fff;

  display: flex;
  align-items: center;
  justify-content: center;
}

button:hover {
  filter: brightness(0.95);
}
</style>