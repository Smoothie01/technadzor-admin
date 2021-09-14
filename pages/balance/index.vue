<template>
  <section class="services">
    <a-card class="card">
      <div class="head">
        <h1 class="title">Баланс</h1>
      </div>
    </a-card>
    <a-card class="card-content">
      <div class="balance">
        <h1 class="title">
          <a-icon type="bank" />
          Баланс:
        </h1>
        <h1 class="price title">100 000 тг</h1>
      </div>
    </a-card>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: 'Баланс'
  })
}
</script>

<style lang="scss" scoped>
@import "assets/style/blocks/services";
</style>
