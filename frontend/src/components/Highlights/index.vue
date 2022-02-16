<template>
  <div class="highlights-container">
    <div class="link-container">
      <input type="text" placeholder="Insira sua URL" />
      <button>Encurtar</button>
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
          <img src="../../assets/icon-brand-recognition.svg" alt="Records">
          <strong>Top 100 URL's mais acessadas</strong>
          <p>Análise quais estão sendo as URL's mais acessadas do momento</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Vue
import Vue from "vue";
import Component from "vue-class-component";

@Component({})
export default class Highlights extends Vue {}
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
  font-size: 1rem;
  background: var(--cyan-color);
  color: #fff;
}

button:hover {
  filter: brightness(0.95);
}

.highlights-content {
  margin-top: 7.5rem;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
}

.highlights-content h1 {
  font-size: 3rem;
  color: var(--very-dark-blue-color);
}

.highlights-content p {
  text-align: center;
  margin-top: 0.5rem;
  font-size: 1.2rem;
  color: var(--gray-color);
}

.hightlights-cards {
  margin-top: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;

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
  text-align: center;
  margin-top: 0.5rem;
}

.hightlights-card + .hightlights-card {
  margin-left: 2rem;
}
</style>