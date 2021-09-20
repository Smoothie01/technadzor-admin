<template>
  <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
    <a-sub-menu v-for="item of subMenuList" :key="item.id">
      <span slot="title"><a-icon :type="item.icon" theme="filled" />{{ item.text }}</span>
      <a-menu-item
        @click="$router.push(subitem.path)"
        v-for="subitem of item.submenu"
        theme="filled"
        :key="subitem.id">
        <span>
          {{ subitem.text }}
        </span>
      </a-menu-item>
    </a-sub-menu>
    <a-menu-item @click="$router.push(menu.path)" v-for="menu of menuList" :key="menu.id">
      <a-icon :type="menu.icon" theme="filled"/>
      <span>
          {{ menu.text }}
        </span>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
    subMenuList: [
      {
        id: '1',
        text: 'Главная',
        icon: 'home',
        path: '',
        submenu: [
          { id: '11', text: 'Технадзоры', icon: '', path: '/?category=tech' },
          { id: '12', text: 'Сметчики', icon: '', path: '/?category=counters' },
          { id: '13', text: 'Проектировщики', icon: '', path: '/?category=designers' },
          { id: '14', text: 'Строители', icon: '', path: '/?category=builders' },
          { id: '15', text: 'Лаборатории', icon: '', path: '/?category=laboratories' },
          { id: '16', text: 'Поставщики', icon: '', path: '/?category=providers' },
          { id: '17', text: 'Вакансии', icon: '', path: '/?category=vacancy' }
        ]
      }
    ],
    menuList: [
      { id: '2', text: 'Услуги', icon: 'file-add', path: '/services' },
      { id: '3', text: 'Подтверждение поставщика', icon: 'check-square', path: '/providers' },
      { id: '8', text: 'Техническая документация ', icon: 'file-text', path: '/documentation' },
      { id: '4', text: 'Платные услуги ', icon: 'dollar-circle', path: '/paid-services' },
      { id: '5', text: 'Баланс', icon: 'bank', path: '/balance' },
      { id: '6', text: 'Резюме/Вакансии', icon: 'idcard', path: '/vacancy' },
      { id: '7', text: 'Контакты ', icon: 'contacts', path: '/contact' }
    ]
  })
}
</script>

<style lang="scss" scoped>
@import "assets/style/blocks/sidebar";
</style>
