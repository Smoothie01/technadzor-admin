<template>
  <a-layout>
    <my-header @toggleClose="toggleClose"/>
    <a-layout style="display: flex">
      <a-layout-sider
        breakpoint="lg"
        collapsed-width="0"
        v-model="isClosed"
        class="my-sidebar"
        :trigger="null"
        collapsible>
        <sidebar/>
      </a-layout-sider>
      <a-layout-content :class="{'left': !isClosed}">
        <Nuxt/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  middleware (ctx) {
    // If the user is not authenticated
    if (!ctx.app.context.app.$cookies.get('token')) {
      return ctx.redirect('/login')
    }
  },
  data: () => ({
    isClosed: false
  }),
  watch: {
    async $route (to, from) {
      try {
        const token = this.$cookies.get('token') || localStorage.getItem('token')
        const tokenTime = this.$cookies.get('token_time') || JSON.stringify(localStorage.getItem('token_time'))
        const payload = {
          token,
          tokenTime
        }
        await this.$store.dispatch('auth/postRefreshToken', payload)
      } catch (e) {
        this.$notification.error({
          message: 'Произошла ошибка сессий'
        })
        this.$cookies.remove('token')
        this.$cookies.remove('token_time')
      }
    }
  },
  methods: {
    toggleClose () {
      this.isClosed = !this.isClosed
    }
  }
}
</script>
<style lang="scss" scoped>
.left{
  @media (max-width: 768px) {
    margin-right: -210px;
  }
}
</style>
