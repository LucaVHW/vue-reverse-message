var app = new Vue({
  el: '#app',
  data: {
    message: 'Reverse a message'
  },
  methods: {
    reverseMessage: function() {
      this.message = this.message.split('').reverse().join('')
    }
  }
})
