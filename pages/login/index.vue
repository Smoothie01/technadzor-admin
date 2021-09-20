<template>
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item :validate-status="userNameError() ? 'error' : ''" :help="userNameError() || ''">
      <a-input
        v-decorator="[
          'email',
          {
            rules: [
              {type:'email',message: 'Не правильный email'},
              {required: true,message: 'Пожалуйста напишите логин!'}
              ]
          }
          ]"
        placeholder="E-mail"
      >
        <a-icon slot="prefix" type="user" style="color:rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item :validate-status="passwordError() ? 'error' : ''" :help="passwordError() || ''">
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Пожалуйста напишите пароль!' }] },
        ]"
        type="password"
        placeholder="Пароль"
      >
        <a-icon slot="prefix" type="lock" style="color:rgba(0,0,0,.25)"/>
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-button type="primary" html-type="submit" :disabled="hasErrors(form.getFieldsError())">
        Log in
      </a-button>
    </a-form-item>
  </a-form>
</template>

<script>
function hasErrors (fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field])
}

export default {
  layout: 'auth',
  data () {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: 'login' })
    }
  },
  mounted () {
    if (this.$route.query.message === 'logout') {
      const message = 'Вы вышли из системы'
      const type = 'info'
      this.$notification[type]({
        message
      })
    }
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields()
    })
  },
  methods: {
    // Only show error after a field is touched.
    userNameError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('userName') && getFieldError('userName')
    },
    // Only show error after a field is touched.
    passwordError () {
      const { getFieldError, isFieldTouched } = this.form
      return isFieldTouched('password') && getFieldError('password')
    },
    handleSubmit (e) {
      e.preventDefault()
      this.form.validateFields(async (err, { email, password }) => {
        if (!err) {
          try {
            const payload = {
              email,
              password
            }
            await this.$store.dispatch('auth/login', payload)
            localStorage.setItem('token', this.$store.getters['auth/getToken'])
            await this.$router.push('/')
          } catch (e) {
            console.log(e)
            const type = 'error'
            this.$notification[type]({
              message: 'Неправильный логин или пароль'
            })
          } finally {
            this.form.setFieldsValue({
              email: '',
              password: ''
            })
          }
        }
      })
    }
  }
}
</script>
