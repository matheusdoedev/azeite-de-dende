<template>
  <footer class="Footer">
    <div class="Footer__container">
      <section class="Footer__section">
        <h3 class="Footer__section__title">Mapa do Site</h3>
        <nav class="Footer__nav">
          <ul class="Footer__nav__menu">
            <li
              class="Footer__nav__item"
              v-for="item in navItems"
              v-bind:key="item.href"
            >
              <a v-bind:href="item.href" class="Footer__nav__link">{{
                item.label
              }}</a>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component } from 'nuxt-property-decorator';

const data = () => ({
  navItems: [
    { label: 'Inicio', href: '#intro' },
    { label: 'Menu', href: '#menu' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Contato', href: '#contato' },
  ],
});

@Component({ data })
export default class Footer extends Vue {}
</script>

<style lang="scss">
@import '~/assets/styles/settings/colors';
@import '~/assets/styles/settings/gaps';
@import '~/assets/styles/objects/container';

.Footer {
  background: $secondary-color-4;
  padding: $lg 0;
}

.Footer__container {
  @extend .Container;
}
</style>
