<template>
  <a-layout-header class="header">
    <div class="logo">
      <img src="@/assets/img/png/logo.png" alt="logo">
      <h1 class="logo__text">Tech-nadzor</h1>
    </div>
    <div class="options">
      <a-button @click="$router.push('/new-section')" type="primary">
        + новый раздел
      </a-button>
      <a-button class="menu" type="link">
        <a-icon type="menu" />
      </a-button>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: 'MyHeader'
}
</script>

<style lang="scss" scoped>
@import "assets/style/blocks/header";
</style>
