<template>
  <a-form>
    <a-form-item :label="`Наименование услуги [${tabObject.lang}]`">
      <a-input v-model="form.name"/>
    </a-form-item>
    <a-form-item :label="`Категория услуги [${tabObject.lang}]`">
      <a-select
        placeholder="Выберите категорий"
        v-model="form.category"
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
        placeholder="Пишите здесь"
        v-model="form.description"
        :auto-size="{ minRows: 3, maxRows: 5 }"
      />
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
  data: () => ({
    form: {
      name: '',
      category: '',
      description: ''
    }
  })
}
</script>

<style scoped>

</style>
