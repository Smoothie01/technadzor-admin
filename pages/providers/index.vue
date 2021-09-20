<template>
  <section class="services">
    <a-card class="card">
      <div class="head">
        <h1 class="title">Подтверждение поставщика</h1>
      </div>
    </a-card>
    <a-card class="card-content">
      <a-table :columns="columns" :data-source="data">
        <div slot="edit" style="display: flex;gap: 10px">
          <a>
            <a-icon type="edit" style="font-size: 18px"/>
          </a>
          <a>
            <a-icon type="close-circle" style="color: red;font-size: 18px"/>
          </a>
        </div>
        <div slot="photo" class="photo">
          <a-avatar shape="square" :size="64" icon="user"/>
        </div>
        <div slot="checkbox" slot-scope="text,item">
          <a-checkbox :checked="item.checked" @change="select(item.key)" />
        </div>
        <div slot="allCheckbox">
          <a-checkbox :checked="tabCheckbox" @change="selectAll($event.target)" />
        </div>
      </a-table>
    </a-card>
  </section>
</template>

<script>
export default {
  head: () => ({
    title: 'Подтверждение поставщика'
  }),
  data: () => ({
    columns:
      [
        {
          dataIndex: 'checkbox',
          key: 'checkbox',
          slots: { title: 'allCheckbox' },
          scopedSlots: { customRender: 'checkbox' }
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
          title: 'Фото',
          dataIndex: 'photo',
          key: 'photo',
          scopedSlots: { customRender: 'photo' }
        },
        {
          title: 'Контакты',
          dataIndex: 'contact',
          key: 'contact'
        },
        {
          title: 'Редактирование',
          dataIndex: 'edit',
          key: 'edit',
          scopedSlots: { customRender: 'edit' }
        }
      ],
    data: [
      {
        key: '1',
        name: 'John Brown',
        category: 'lorem',
        description: 'lorem asdasdasd asdasd asdas asdas',
        contact: '8 777 777 77 77',
        checked: false
      },
      {
        key: '2',
        name: 'Jim Green',
        category: 'asad',
        description: 'lorem asdasdasd asdasd asdas asdas',
        contact: '8 777 777 77 77',
        checked: false
      }
    ]
  }),
  computed: {
    tabCheckbox () {
      let count = 0
      for (const item of this.data) {
        if (item.checked) {
          count++
        }
      }
      return this.data.length === count
    }
  },
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
  }
}
</script>

<style lang="scss" scoped>
@import "assets/style/blocks/services";
</style>
