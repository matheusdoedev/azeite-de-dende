<template>
  <section id="sobre" class="Sobre">
    <div class="Container">
      <h2 class="Sobre__title">Sobre</h2>
      <section class="Sobre__content">
        <img
          src="~/assets/images/sobre-img.jpg"
          alt="Sobre o restaurante"
          class="Sobre__content__image"
        />
        <section class="Sobre__content__info">
          <article
            class="Sobre__content__info__item"
            v-for="item in sobreInfos"
            v-bind:key="item.title"
          >
            <h3 class="Sobre__content__info__item__title">{{ item.title }}</h3>
            <p class="Sobre__content__info__item__text">{{ item.content }}</p>
          </article>
        </section>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component } from 'nuxt-property-decorator';

const data = () => ({
  sobreInfos: [
    {
      title: 'Nossa história',
      content:
        'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.',
    },
    {
      title: 'Nossos valores',
      content:
        'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos.',
    },
  ],
});

@Component({ data })
export default class Sobre extends Vue {}
</script>

<style lang="scss">
@import '~/assets/styles/settings/colors';
@import '~/assets/styles/settings/gaps';
@import '~/assets/styles/tools/breakpoints';
@import '~/assets/styles/objects/container';

.Sobre {
  padding: $xl 0;
  background: $secondary-color-3;

  @media (max-width: $small) {
    padding: $lg 0;
  }
}

.Sobre__title {
  text-align: center;
  color: $support-color-1;

  &:after {
    content: '';
    display: block;
    margin: $xs auto $lg auto;
    width: 3rem;
    height: 0.4rem;
    background: $base-color;
    opacity: 40%;

    @media (max-width: $small) {
      margin-bottom: $md;
    }
  }
}

.Sobre__content {
  display: grid;
  grid-template-columns: 5fr 7fr;
  column-gap: 11.5rem;

  @media (max-width: $small) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: $sm;
  }
}

.Sobre__content__info {
  display: flex;
  flex-direction: column;
  row-gap: 4.8rem;
}

.Sobre__content__info__item {
  display: flex;
  flex-direction: column;
  row-gap: $xs;
}

.Sobre__content__info__item__title {
  color: $support-color-1;
}

.Sobre__content__info__item__text {
  color: $support-color-2;
}
</style>
