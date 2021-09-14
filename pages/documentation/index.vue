<template>
  <section class="services">
    <a-card class="card">
      <div class="head">
        <h1 class="title">Техническая документация</h1>
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
        <div slot="lang">
          <a-icon style='font-size: 25px' type="file-word" />
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
    title: 'Техническая документация'
  }),
  data: () => ({
    columns:
      [
        {
          dataIndex: 'category',
          key: 'checkbox',
          slots: { title: 'allCheckbox' },
          scopedSlots: { customRender: 'checkbox' }
        },
        {
          title: 'Наименование',
          dataIndex: 'name',
          key: 'name'
        },
        {
          title: 'KZ',
          dataIndex: 'kz',
          key: 'kz',
          scopedSlots: { customRender: 'lang' }
        },
        {
          title: 'RUS',
          dataIndex: 'rus',
          key: 'rus',
          scopedSlots: { customRender: 'lang' }
        },
        {
          title: 'ENG',
          dataIndex: 'en',
          key: 'en',
          scopedSlots: { customRender: 'lang' }
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
        name: 'Lorem ipsum dolor sit',
        checked: false
      },
      {
        key: '2',
        name: 'Jim Green',
        checked: false
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
