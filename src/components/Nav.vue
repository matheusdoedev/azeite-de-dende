<template>
  <div>
    <nav class="Nav" v-bind:class="menuMobileStatus ? 'active' : ''">
      <li v-for="item in navItems" :key="item.name">
        <a :href="item.href" class="Nav__link">
          {{ item.name }}
        </a>
      </li>
    </nav>
    <button type="button" class="Nav__toggle" @click="handleMenuMobile">
      {{ menuMobileStatus ? 'Close' : 'Menu' }}
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator';

interface INavItem {
  name: string;
  href: string;
}

interface IDataProps {
  menuMobileStatus: boolean;
  navItems: INavItem[];
}

const data = (): IDataProps => ({
  menuMobileStatus: false,
  navItems: [
    { name: 'Restaurante', href: '#restaurante' },
    { name: 'Menu', href: '#menu' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Contato', href: '#contato' },
  ],
});

@Component({ data })
export default class Nav extends Vue {
  handleMenuMobile() {
    this.$data.menuMobileStatus = !this.$data.menuMobileStatus;
  }
}
</script>

<style lang="scss">
@import '~/assets/styles/settings/colors';
@import '~/assets/styles/settings/fonts';
@import '~/assets/styles/settings/gaps';
@import '~/assets/styles/tools/breakpoints';
@import '~/assets/styles/tools/transitions';

.Nav {
  display: flex;
  justify-content: flex-end;
  gap: 1.6rem;

  @media (max-width: $small) {
    display: none;

    &.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      background: $secondary-color-2;
      padding: $md $sm;
      top: 96px;
      right: 5vh;
      animation: fade-in 0.3s forwards;
    }
  }
}

.Nav__link {
  color: $support-color-1;
  font-family: $secondary-font;
  letter-spacing: 1px;
}

.Nav__toggle {
  display: none;

  @media (max-width: $small) {
    display: block;
    border: none;
    background: none;
    color: $support-color-1;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>
