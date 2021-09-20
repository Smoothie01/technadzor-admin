<template>
  <a-form @submit.prevent="handleSubmit" :form="formValid">
    <a-form-item :label="`Наименование услуги [${tabObject.lang}]`">
      <a-input
        v-decorator="['name', { rules: [{ required: true, message: 'Please input your note!' }] }]"
      />
    </a-form-item>
    <a-form-item
      :label="`Категория услуги [${tabObject.lang}]`"
    >
      <a-select
        v-model="form.category"
        placeholder="Выберите категорий"
      >
        <a-select-option value="ТЕХНАДЗОРЫ">
          ТЕХНАДЗОРЫ
        </a-select-option>
        <a-select-option value="СМЕТЧИКИ">
          СМЕТЧИКИ
        </a-select-option>
        <a-select-option value="ПРОЕКТИРОВЩИКИ">
          ПРОЕКТИРОВЩИКИ
        </a-select-option>
        <a-select-option value="СТРОИТЕЛИ">
          СТРОИТЕЛИ
        </a-select-option>
        <a-select-option value="ЛАБОРАТОРИИ">
          ЛАБОРАТОРИИ
        </a-select-option>
        <a-select-option value="ПОСТАВЩИКИ">
          ПОСТАВЩИКИ
        </a-select-option>
      </a-select>
    </a-form-item>
    <a-form-item :label="`Описание услуги [${tabObject.lang}]`">
      <a-textarea
        v-model="form.description"
        placeholder="Пишите здесь"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
    </a-form-item>
    <a-form-item>
      <a-button html-type="submit" type="primary">Добавить</a-button>
    </a-form-item>
  </a-form>
</template>

<script>
export default {
  props: {
    tabObject: {
      type: Object
    }
  },
  data () {
    return {
      formValid: this.$form.createForm(this, { name: 'coordinated' }),
      form: {
        name: '',
        category: 'ТЕХНАДЗОРЫ',
        description: ''
      }
    }
  },
  methods: {
    handleSubmit () {
      this.formValid.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
