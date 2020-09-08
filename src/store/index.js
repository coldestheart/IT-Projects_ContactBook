import Vuex from 'vuex'
import Vue from 'vue'
import createPersistedState from 'vuex-persistedstate'
//Import contacts from module
import ContactBook from '@/store/ContactBook/contactBook'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    ContactBook
  },
  plugins: [
    createPersistedState({
      paths: ['ContactBook.Contacts']
    })
  ]
})
