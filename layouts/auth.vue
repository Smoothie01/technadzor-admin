<template>
  <div class="auth-layout">
    <div class="auth-logo">
      <img src="@/assets/img/png/logo.png" alt="logo">
      <h1 class="title">Tech-nadzor</h1>
    </div>
    <a-card title="Авторизация" style="width: 350px;">
      <Nuxt/>
    </a-card>
  </div>
</template>

<script>
export default {
  middleware (ctx) {
    console.log(ctx)
    // If the user is not authenticated
    if (ctx.app.context.app.$cookies.get('token')) {
      return ctx.redirect('/')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/style/variabless";
.auth-layout{
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: $lightBlue;
  .auth-logo{
    display: flex;
    align-items: center;
    gap: 12px;
    margin: 12px 0;
    .title{
      font-weight: 400;
      color: gray;
    }
  }
}
</style>
