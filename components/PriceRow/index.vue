<template>
  <div class="price-row">
    <div class="text value">
      {{ title }}
    </div>
    <div class="icon"><a-icon type="arrow-right" /></div>
    <a-popover placement="right">
      <template slot="content">
        <a-input-number v-model="price" />
      </template>
      <template slot="title">
        <span>Изменить</span>
      </template>
      <div style="cursor: pointer" class="text price">
        {{ price }} тг
      </div>
    </a-popover>
  </div>
</template>

<script>
export default {
  name: 'Price-Row',
  props: {
    // eslint-disable-next-line vue/require-default-prop
    mainPrice: String,
    // eslint-disable-next-line vue/require-default-prop
    title: String
  },
  data: () => ({
    price: ''
  }),
  mounted () {
    this.price = this.mainPrice
  }
}
</script>

<style lang="scss" scoped>
@import "assets/style/blocks/services";
</style>
