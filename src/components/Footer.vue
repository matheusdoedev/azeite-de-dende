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
      <section class="Footer__section">
        <h3 class="Footer__section__title">Contatos</h3>
        <ul class="Footer__contacts">
          <li
            class="Footer__contacts__item"
            v-for="item in contacts"
            v-bind:key="item.content"
          >
            - {{ item.content }}
          </li>
        </ul>
      </section>
      <section class="Footer__section">
        <h3 class="Footer__section__title" style="margin-bottom: 0">
          Redes Sociais
        </h3>
        <SocialMedias />
      </section>
    </div>
    <div class="Footer__copy__block">
      <p class="Footer__copy">
        Feito por
        <a
          class="Footer__copy__link"
          target="BLANK"
          href="https://github.com/matheusdoedev"
          >matheusdoedev</a
        >. Azeite de Dende 2020 @ Todos os direitos reservados&copy;
      </p>
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

  contacts: [
    { content: 'contato@azeitededende.com' },
    { content: '(71) 99999 - 9999' },
  ],
});

const components = {
  SocialMedias: () => import('~/components/SocialMedias.vue'),
};

@Component({ data, components })
export default class Footer extends Vue {}
</script>

<style lang="scss">
@import '~/assets/styles/settings/colors';
@import '~/assets/styles/settings/gaps';
@import '~/assets/styles/settings/fonts';
@import '~/assets/styles/tools/breakpoints';
@import '~/assets/styles/objects/container';

.Footer {
  background: $secondary-color-4;
  padding: $lg 0;

  @media (max-width: $small) {
    padding: $md 0;
  }
}

.Footer__container {
  @extend .Container;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: $sm;

  @media (max-width: $small) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: $sm;
    text-align: center;
  }
}

.Footer__section__title {
  color: $support-color-3;
  margin-bottom: $md;

  @media (max-width: $small) {
    margin-bottom: $sm;
  }
}

.Footer__nav__menu {
  display: flex;
  flex-direction: column;
  row-gap: $xs;
  color: #d9d9d9;
}

.Footer__nav__link {
  padding-left: 0;
  color: #d9d9d9;
  font-family: $secondary-font;
}

.Footer__contacts {
  @extend .Footer__nav__menu;
}

.Footer__contacts__item {
  @extend .Footer__nav__link;
}

.Footer__copy__block {
  @extend .Container;

  align-items: center;
}

.Footer__copy {
  text-align: center;
  margin-top: $md;
  color: #d9d9d9;

  @media (max-width: $small) {
    margin-top: $sm;
  }
}

.Footer__copy__link {
  padding-left: 0;
  padding-right: 0;
  font-family: $secondary-font;
  color: $base-color;
}
</style>
