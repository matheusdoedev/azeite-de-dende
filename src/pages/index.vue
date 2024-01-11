<template>
  <section id="intro">
    <header>
      <div>
        <Logo />
        <nav>
          <ul>
            <li v-for="option in NAV_OPTIONS">
              <router-link :to="option.path">{{ option.label }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <h1>Azeite de Dênde</h1>
        <p>
          Restaurante de comida baiana no Pelourinho, centro histórico da cidade
          de Salvador.
        </p>
        <button>Veja mais sobre</button>
      </div>
    </header>
  </section>
</template>

<script lang="ts">
const NAV_OPTIONS = [
  { label: "Inicio", path: "/#inicio" },
  { label: "Menu", path: "/#menu" },
  { label: "Sobre", path: "/#sobre" },
  { label: "FAQ", path: "/#faq" },
  { label: "Contatos", path: "/#contatos" },
];

export default {
  data() {
    return {
      NAV_OPTIONS,
    };
  },
};
</script>

<style lang="scss"></style>
