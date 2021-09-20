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
      <a-button @click="logout" class="logout" type="link">
        <a-icon type="logout" />
        <span>Выход</span>
      </a-button>
      <a-button @click="$emit('toggleClose')" class="menu" type="link">
        <a-icon type="menu"/>
      </a-button>
    </div>
    <div class="options-mobile">
      <a-button @click="$router.push('/new-section')" type="link">
        <a-icon type="file-add" />
      </a-button>
      <a-button @click="logout" class="logout" type="link">
        <a-icon type="logout" />
      </a-button>
      <a-button @click="$emit('toggleClose')" class="menu" type="link">
        <a-icon type="menu"/>
      </a-button>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  name: 'MyHeader',
  methods: {
    async logout () {
      localStorage.removeItem('token')
      this.$store.commit('auth/setAuthenticated', false)
      await this.$store.dispatch('auth/logout')
      await this.$router.push('/login?message=logout')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/style/blocks/header";
</style>
