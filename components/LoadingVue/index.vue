<template>
  <div v-if="loading" class="loading-wrapper">
    <a-spin />
  </div>
</template>

<script>
export default {
  name: 'LoadingVue',
  data: () => ({
    loading: false
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    }
  }
}
</script>

<style lang="scss" scoped>
.loading-wrapper{
  position: fixed;
  top:0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.3);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  justify-content: center;
  z-index: 1000;
}
</style>
