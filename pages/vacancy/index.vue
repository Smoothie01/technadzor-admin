<template>
  <section class="services">
    <a-card class="card">
      <div class="head">
        <h1 class="title">Подтверждение поставщика</h1>
      </div>
    </a-card>
    <a-card class="card-content">
      <a-table :columns="columns" :data-source="data">
      </a-table>
    </a-card>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: 'Резюме/Ваканси'
  }),
  data: () => ({
    columns:
      [
        {
          title: 'Лотип компании',
          dataIndex: 'logo',
          key: 'logo'
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
  methods: {
    select (checked) {
      this.data.forEach((item) => {
        if (item.key === checked) {
          this.$set(item, 'checked', !item.checked)
        }
      })
    },
    selectAll (event) {
      console.log(event.checked)
      this.data.forEach((item) => {
        this.$set(item, 'checked', event.checked)
      })
      console.log(this.data)
    }
  },
  computed: {
    tabCheckbox () {
      let count = 0
      for (const item of this.data) {
        if (item.checked) {
          count++
        }
      }
      if (this.data.length === count) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/style/blocks/services";
</style>
