<template>
  <section id="contato" class="Contato">
    <div class="Container">
      <h2 class="Contato__title">Contato</h2>
      <section class="Contato__content">
        <section class="Contato__contacts">
          <article class="Contato__contacts__item">
            <h3 class="Contato__contacts__item__title">
              Entre Em Contato Conosco
            </h3>
            <p class="Contato__contacts__item__text">
              - (71) 99999 - 9999<br />- contato@azeitededende.com
            </p>
          </article>
          <article class="Contato__contacts__item">
            <h3 class="Contato__contacts__item__title">Endereço</h3>
            <p class="Contato__contacts__item__text">
              - Rua Alfredo de Brito, Pelourinho<br />- Salvador/BA, Brasil
            </p>
          </article>
          <article class="Contato__contacts__item">
            <h3 class="Contato__contacts__item__title">Redes Sociais</h3>
            <SocialMedias />
          </article>
        </section>
        <div class="Contato__form">
          <form class="Contato__form__content">
            <Input
              name="name"
              placeholder="Digite seu nome"
              label="Name"
            ></Input>
            <Input
              name="email"
              placeholder="Digite seu e-mail"
              label="E-mail"
            ></Input>
            <Textarea
              name="message"
              label="Mensagem"
              placeholder="Digite sua mensagem aqui"
            ></Textarea>
            <Button content="Enviar"></Button>
          </form>
        </div>
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

import { Component } from 'nuxt-property-decorator';

const components = {
  Button: () => import('~/components/Button.vue'),
  Input: () => import('~/components/Input.vue'),
  SocialMedias: () => import('~/components/SocialMedias.vue'),
  Textarea: () => import('~/components/Textarea.vue'),
};

@Component({ components })
export default class Contato extends Vue {}
</script>

<style lang="scss">
@import '~/assets/styles/settings/colors';
@import '~/assets/styles/settings/gaps';
@import '~/assets/styles/tools/breakpoints';
@import '~/assets/styles/objects/container';

.Contato {
  padding: $xl 0;
  background: $secondary-color-2;

  @media (max-width: $small) {
    padding: $lg 0;
  }
}

.Contato__title {
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

.Contato__content {
  display: grid;
  grid-template-columns: 5fr 7fr;

  @media (max-width: $small) {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: $sm;
  }
}

.Contato__contacts {
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: 4rem;
  border-right: 1px solid rgba(255, 243, 212, 0.4);

  @media (max-width: $small) {
    border: none;
  }
}

.Contato__contacts__item {
  display: flex;
  flex-direction: column;
  row-gap: $xs;
}

.Contato__contacts__item__title {
  color: $support-color-1;
}

.Contato__contacts__item__text {
  color: $support-color-2;
}

.Contato__form {
  display: flex;
  justify-content: center;
  width: 100%;
}

.Contato__form__content {
  display: flex;
  flex-direction: column;
  row-gap: $sm;
  max-width: 474px;
  width: 100%;
}
</style>
