<template>
  <section class="services">
    <a-card class="card">
      <div class="head">
        <h1 class="title">Услуги</h1>
        <a-button type="primary">Добавить услугу</a-button>
      </div>
    </a-card>
    <a-card>
      <a-table :columns="columns" :data-source="data">
      </a-table>
    </a-card>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: 'Услуги'
  }),
  data: () => ({
    columns:
      [
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
          title: 'Ссылка на Youtube',
          key: 'youtube',
          dataIndex: 'youtube'
        }
      ],
    data: [
      {
        key: '1',
        name: 'John Brown',
        category: 'lorem',
        description: 'lorem asdasdasd asdasd asdas asdas',
        youtube: 'asdasd'
      },
      {
        key: '2',
        name: 'Jim Green',
        category: 'asad',
        description: 'lorem asdasdasd asdasd asdas asdas',
        youtube: 'asdasd'
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import "assets/style/blocks/services";
</style>
