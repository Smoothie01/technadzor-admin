<template>
  <a-row class="contact-content">
    <a-col :span="12">
      <p>{{title}}</p>
    </a-col>
    <a-col :span="12">
      <p>
        {{value}}
      </p>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'Row',
  props: {
    title: String,
    value: String
  }
}
</script>

<style lang="scss" scoped>
@import "assets/style/blocks/services";
</style>
