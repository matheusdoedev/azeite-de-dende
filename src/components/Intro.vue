<template>
  <section class="Intro">
    <div>
      <Header />
      <section class="Intro__content">
        <h1 class="Intro__content__title">Azeite de Dênde</h1>
        <p class="Intro__content__tagline">
          Restaurante de comida baiana no Pelourinho, centro histórico da cidade
          de Salvador.
        </p>
        <Button content="Veja mais sobre"></Button>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

import { Component } from "nuxt-property-decorator";

@Component
export default class Intro extends Vue {}
</script>

<style lang="scss">
@import "~/assets/styles/settings/colors";
@import "~/assets/styles/settings/gaps";

.Intro {
  min-height: 100vh;
  background: no-repeat url("~/assets/images/bg-main.jpg");
  background-size: cover;
}

.Intro__content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
}

.Intro__content__title {
  color: $support-color-1;
  text-align: center;

  &::after {
    content: "";
    display: block;
    margin: $md auto $md auto;
    width: 3rem;
    height: 0.25rem;
    background: $base-color;
    opacity: 40%;
  }
}

.Intro__content__tagline {
  color: $support-color-1;
  text-align: center;
  margin-bottom: $md;
}
</style>
