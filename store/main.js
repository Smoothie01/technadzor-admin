export const state = () => ({
  categories: [
    { id: '11', text: 'Технадзоры', value: 'tech' },
    { id: '12', text: 'Сметчики', value: 'counters' },
    { id: '13', text: 'Проектировщики', value: 'designers' },
    { id: '14', text: 'Строители', value: 'builders' },
    { id: '15', text: 'Лаборатории', value: 'laboratories' },
    { id: '16', text: 'Поставщики', value: 'providers' },
    { id: '17', text: 'Вакансии', value: 'vacancy' }
  ]
})
export const getters = {
  getCategory: state => state.categories
}
