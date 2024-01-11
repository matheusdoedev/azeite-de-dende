<template>
  <button class="button">
    <slot />
  </button>
</template>

<style lang="scss">
@import "~/assets/styles/index.scss";

.button {
  border-radius: 4px;
  background: $base-color;
  box-shadow: 0px 1px 10px 0px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 4px 0px rgba(0, 0, 0, 0.14);
  border: none;
  padding: 12px 32px;

  color: $secondary-color-1;
  text-align: center;
  font-family: $secondary-font;
  font-size: 14px;
  letter-spacing: 0.7px;
}
</style>
