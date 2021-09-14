<template>
  <section class="new-section">
    <a-card class="card">
      <div class="head">
        <h1 class="title">Новый раздел</h1>
        <a-button type="primary">Добавить</a-button>
      </div>
    </a-card>
    <a-card class="card-content">
      <a-tabs default-active-key="1">
        <a-tab-pane  v-for="tab of tabs" :key="tab.key" :tab="tab.text">
          <form-container :tabObject="tab" />
        </a-tab-pane>
      </a-tabs>
    </a-card>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: 'Новый раздел'
  }),
  data: () => ({
    tabs: [
      { lang: 'ru', key: '1', text: 'Руский' },
      { lang: 'kz', key: '2', text: 'Казахский' },
      { lang: 'en', key: '3', text: 'Английский' }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import "assets/style/blocks/new-section";
</style>
