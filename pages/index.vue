<template>
  <section class="services">
    <template v-if="!$route.query.category">
      <h1 class="title">Страница администратора </h1>
      <a-alert message="Вы успешно авторизовались!" type="success"/>
    </template>
    <template v-else>
      <a-card class="card">
        <div class="head">
          <h1 class="title">
            {{ getTitle }}
          </h1>
        </div>
      </a-card>
      <a-card class="card-content">
        <a-table :columns="columns" :data-source="data">
          <div slot="img-logo" class="img-logo">
            <img src="@/assets/img/png/logo-post.png">
          </div>
        </a-table>
      </a-card>
    </template>
  </section>
</template>

<script>
export default {
  data: () => ({
    columns:
      [
        {
          title: 'Лотип компании',
          dataIndex: 'logo',
          key: 'logo',
          scopedSlots: { customRender: 'img-logo' }
        },
        {
          title: 'Наименование',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'Категория',
          dataIndex: 'category',
          key: 'category'
        },
        {
          title: 'Описание',
          dataIndex: 'description',
          key: 'description'
        },
        {
          title: 'Дата',
          dataIndex: 'data',
          key: 'data'
        }
      ],
    data: [
      {
        key: '1',
        name: 'John Brown',
        category: 'lorem',
        logo: 'logo img',
        description: 'lorem asdasdasd asdasd asdas asdas',
        data: '20.02.20'
      },
      {
        key: '2',
        name: 'Jim Green',
        category: 'asad',
        description: 'lorem asdasdasd asdasd asdas asdas',
        logo: 'logo img',
        data: '20.02.20'
      }
    ]
  }),
  head: () => ({
    title: 'Главная'
  }),
  computed: {
    getTitle () {
      return this.$store.getters['main/getCategory'].find(category => category.value === this.$route.query.category).text
    }
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
@import "assets/style/blocks/services";
</style>
