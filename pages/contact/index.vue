<template>
  <section class="services">
    <a-card class="card">
      <div class="head">
        <h1 class="title">Контакты</h1>
      </div>
    </a-card>
    <a-card class="card-content">
      <Row v-for="contact of contactInfo" :key="contact.title" :title="contact.title" :value="contact.value"/>
    </a-card>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: 'Контакты'
  }),
  data: () => ({
    contactInfo: [
      { title: 'Адрес', value: 'г.Алматы, Абая 230, офис 232' },
      { title: 'Номер телефона', value: '8 (700) 000-00-00' },
      { title: 'E-mail', value: 'dreamst@mail.ru' },
      { title: 'Instagram', value: 'https://www.instagram.com/' },
      { title: 'YouTube', value: 'https://www.youtube.com/' },
      { title: 'Telegram', value: 'https://telegram.org/' },
      { title: 'WhatApp', value: 'https://www.whatsapp.com/' }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import "assets/style/blocks/services";
</style>
