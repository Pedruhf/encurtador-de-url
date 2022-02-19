<template>
  <footer class="footer-container">
    <img src="../../assets/logo.svg" alt="Shortly Logo">
    <div class="social">
      <div class="icons">
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/pedruhf">
        <linkedin-icon />
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/pedruhf">
        <github-icon />
      </a>
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/pedruhf">
        <instagram-icon />
      </a>
      </div>
      <strong>Desenvolvido por Pedro Freitas</strong>
    </div>
  </footer>
</template>

<script>
// Vue
import Vue from "vue";
import Component from "vue-class-component";

// Icons
import LinkedinIcon from "vue-material-design-icons/Linkedin.vue";
import InstagramIcon from "vue-material-design-icons/Instagram.vue";
import GithubIcon from "vue-material-design-icons/Github.vue";

@Component({
  components: {
    LinkedinIcon,
    InstagramIcon,
    GithubIcon,
  }
})
export default class Footer extends Vue {}
</script>

<style scoped>
.footer-container {
  width: 100%;
  padding: 3rem 5% 2rem;

  background: var(--very-dark-violet-color);

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer-container img {
  width: 10vw;
}

.social {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social strong {
  margin-top: 0.5rem;
  color: var(--gray-color);
  font-size: 1.1vw;
  opacity: 0.3;
}

.social .icons a span {
  color: #fff;
  cursor: pointer;
  transition: filter 0.3s;
}

.social .icons a span:hover {
  filter: brightness(0.6);
}

.social .icons a + a {
  margin-left: 1rem;
}
</style>