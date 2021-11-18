<template>
  <section class="Restaurante">
    <div class="Restaurante__container">
      <h2 class="Restaurante__title">Restaurante</h2>
      <article class="Restaurante__info">
        <img src="~/assets/images/restaurante-img-1.jpg" alt="Restaurante" />
        <article>
          <h3>Infraestrutura</h3>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos,
          </p>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos,
          </p>
        </article>
      </article>
      <article class="Restaurante__info">
        <img src="~/assets/images/restaurante-img-2.jpg" alt="Restaurante" />
        <article>
          <h3>No centro histórico de Salvador</h3>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos,
          </p>
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos,
          </p>
        </article>
      </article>
      <section>
        <img src="~/assets/images/restaurante-img-3.jpg" alt="Restaurante" />
        <img src="~/assets/images/restaurante-img-4.jpg" alt="Restaurante" />
        <img src="~/assets/images/restaurante-img-5.jpg" alt="Restaurante" />
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";

import { Component } from "nuxt-property-decorator";

@Component
export default class Restaurante extends Vue {}
</script>

<style lang="scss">
@import "~/assets/styles/settings/colors";
@import "~/assets/styles/settings/gaps";

.Restaurante {
  background: $secondary-color-1;
  padding: $xl 0;
}

.Restaurante__container {
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;
}

.Restaurante__title {
  color: $support-color-1;
  text-align: center;

  &:after {
    content: "";
    display: block;
    margin: $xs auto $lg auto;
    width: 3rem;
    height: 0.4rem;
    background: $base-color;
    opacity: 40%;
  }
}

.Restaurante__info {
  display: grid;
  grid-template-columns: 5fr 7fr;
  gap: $sm;
}
</style>
