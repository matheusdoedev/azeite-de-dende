<template>
  <section class="Menu">
    <div class="Container">
      <h2 class="Menu__title">Menu</h2>
      <section class="Menu__images">
        <img
          class="Menu__images__item"
          src="~/assets/images/menu-img-1.jpg"
          alt="Muqueca de peixe"
        />
        <img
          class="Menu__images__item"
          src="~/assets/images/menu-img-2.jpg"
          alt="Vatapá"
        />
        <img
          class="Menu__images__item"
          src="~/assets/images/menu-img-3.jpg"
          alt="Dobradinha"
        />
        <img
          class="Menu__images__item"
          src="~/assets/images/menu-img-4.jpg"
          alt="Acarajé"
        />
        <img
          class="Menu__images__item"
          src="~/assets/images/menu-img-5.jpg"
          alt="Sarapatél"
        />
        <img
          class="Menu__images__item"
          src="~/assets/images/menu-img-6.jpg"
          alt="Feijoada"
        />
        <img
          class="Menu__images__item"
          src="~/assets/images/menu-img-7.jpg"
          alt="Feijão fradinho"
        />
        <img
          class="Menu__images__item"
          src="~/assets/images/menu-img-8.jpg"
          alt="Xinxim de Galinha"
        />
        <img
          class="Menu__images__item"
          src="~/assets/images/menu-img-9.jpg"
          alt="Carurú"
        />
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component } from 'nuxt-property-decorator';

@Component
export default class Menu extends Vue {}
</script>

<style lang="scss">
@import '~/assets/styles/settings/colors';
@import '~/assets/styles/settings/gaps';
@import '~/assets/styles/tools/breakpoints';
@import '~/assets/styles/objects/container';

.Menu {
  background: $support-color-2;
  padding: $xl 0;

  @media (max-width: $small) {
    padding: $lg 0;
  }
}

.Menu__title {
  color: $secondary-color-1;
  text-align: center;

  &:after {
    content: '';
    display: block;
    margin: $xs auto $lg auto;
    width: 3rem;
    height: 0.4rem;
    background: $secondary-color-1;
    opacity: 40%;

    @media (max-width: $small) {
      margin-bottom: $md;
    }
  }
}

.Menu__images {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: $md;

  @media (max-width: $small) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.Menu__images__item {
  border-radius: 4px;
}
</style>
