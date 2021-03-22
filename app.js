const app = Vue.createApp({
  data() {
    return {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gamil.com',
      gender: 'male',
      picture: 'https://randomuser.me/api/portraits/men/10.jpg',
    }
  },
})

app.mount('#app')
