<template>
  <section id="intro" class="intro">
    <header class="intro__header">
      <div class="intro__header__container container">
        <div></div>
        <nav class="intro__nav">
          <ul class="intro__nav__list">
            <li v-for="option in NAV_OPTIONS">
              <router-link class="intro__nav__option" :to="option.path">{{
                option.label
              }}</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </header>

    <section class="intro__content">
      <div class="intro__content__container container">
        <h1 class="intro__title">Azeite de Dênde</h1>
        <p class="intro__text">
          Restaurante de comida baiana no Pelourinho, centro histórico da cidade
          de Salvador.
        </p>
        <Button>Veja mais sobre</Button>
      </div>
    </section>
  </section>

  <section class="restaurante">
    <div class="restaurante__container container">
      <h2 class="restaurante__title">Restaurante</h2>
      <article
        v-for="article in RESTAURANTE_ARTICLES"
        class="restaurante__article"
      >
        <img :src="article.img" :alt="article.alt" />
        <div>
          <h3 class="restaurante__article__title">{{ article.alt }}</h3>
          <p v-html="article.text" class="restaurante__article__text"></p>
        </div>
      </article>

      <section class="restaurante__bottom-images">
        <img
          src="~/assets/images/restaurante-img-3.jpg"
          alt="Restaurante"
        /><img
          src="~/assets/images/restaurante-img-4.jpg"
          alt="Restaurante"
        /><img src="~/assets/images/restaurante-img-5.jpg" alt="Restaurante" />
      </section>
    </div>
  </section>
</template>

<script lang="ts">
import RestauranteImg1 from "~/assets/images/restaurante-img-1.jpg";
import RestauranteImg2 from "~/assets/images/restaurante-img-2.jpg";

const NAV_OPTIONS = [
  { label: "Inicio", path: "/#inicio" },
  { label: "Menu", path: "/#menu" },
  { label: "Sobre", path: "/#sobre" },
  { label: "FAQ", path: "/#faq" },
  { label: "Contatos", path: "/#contatos" },
];

const RESTAURANTE_ARTICLES = [
  {
    img: RestauranteImg1,
    alt: "Infraestrutura",
    text: `
	<p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos.
          </p>
		  <br />
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos,
          </p>
	`,
  },
  {
    img: RestauranteImg2,
    alt: "No centro histórico de Salvador",
    text: `
		<p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos.
          </p>
		  <br />
          <p>
            Lorem Ipsum é simplesmente uma simulação de texto da indústria
            tipográfica e de impressos, e vem sendo utilizado desde o século
            XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
            os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum
            sobreviveu não só a cinco séculos,
          </p>
	`,
  },
];

export default {
  data() {
    return {
      NAV_OPTIONS,
      RESTAURANTE_ARTICLES,
    };
  },
};
</script>

<style lang="scss">
@import "~/assets/styles/index.scss";

.intro {
  display: flex;
  flex-direction: column;
  background: url("~/assets/images/bg-main.jpg") no-repeat;
  background-size: cover;

  &__header {
    padding: 24px 0;

    &__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__nav {
    display: flex;
    justify-content: flex-end;

    &__list {
      display: flex;
      align-items: center;
      gap: 24px;
    }

    &__option {
      color: $support-color-1;
      font-family: $secondary-font;
      font-size: 14px;
      letter-spacing: 1px;
    }
  }

  &__content {
    padding: 128px 0 256px 0;

    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

  &__title {
    color: $support-color-1;
    text-align: center;
    font-size: 40px;

    &::after {
      content: "";
      display: block;
      margin: $xs auto;
      width: 3rem;
      height: 0.25rem;
      background: $base-color;
      opacity: 40%;
    }
  }

  &__text {
    color: $support-color-1;
    text-align: center;
    font-family: $secondary-font;
    font-size: 18px;
    margin-bottom: $xs;
  }
}

.restaurante {
  padding: 64px 0;
  background: $secondary-color-1;

  &__title {
    color: $support-color-1;
    text-align: center;
    font-family: $primary-font;
    font-size: 30px;

    &::after {
      content: "";
      display: block;
      margin: $xs auto 48px auto;
      width: 3rem;
      height: 0.25rem;
      background: $base-color;
      opacity: 40%;
    }
  }

  &__container {
    display: flex;
    flex-direction: column;
  }

  &__article {
    display: grid;
    grid-template-columns: 5fr 7fr;
    align-items: center;
    gap: 24px;
    margin-bottom: 32px;

    &__title {
      color: $support-color-1;
      font-size: 24px;
      margin-bottom: 24px;
    }

    &__text {
      color: $support-color-2;
    }
  }

  &__bottom-images {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }
}
</style>
