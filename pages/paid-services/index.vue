<template>
  <section class="services">
    <a-card class="card">
      <div class="head">
        <h1 class="title">Платные услуги</h1>
      </div>
    </a-card>
    <a-card class="card-content">
      <div class="price-content">
        <price-row title="Быть первым в ТОП" mainPrice="300" />
        <price-row title="Быть вторым в ТОП" mainPrice="200" />
        <price-row title="Быть третим в ТОП" mainPrice="100" />
      </div>
    </a-card>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: 'Платные услуги'
  })
}
</script>

<style lang="scss" scoped>
@import "assets/style/blocks/services";
</style>
