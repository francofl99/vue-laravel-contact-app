require('./bootstrap');

window.Vue = require('vue');

import router from './router';
import Vuex from 'vuex'
import { assign } from 'lodash';

Vue.component('app', require('./components/App.vue').default);

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    contacts: []
  },

  getters: {
    contactsGetter: (state) => {
      return state.contacts
    }
  },

  mutations: {
    setContactsList(state, data) {
      state.contacts = data
    }
  },

  actions: {
    getAllContacts (context) {
      axios.get('/api/getContacts')
      .then((response) => {
        context.commit('setContactsList', response.data)
      })
      .catch((error) => {
        console.log(error)
      })  
    },

    insertContact(context, contactToInsert) {
      axios.post('/saveContact', {
        nombre: contactToInsert.nombre,
        apellido: contactToInsert.apellido,
        codigo_area: contactToInsert.codigo_area,
        numero: contactToInsert.numero,
        color: contactToInsert.color
      })
      .then(() => {
        context.dispatch('getAllContacts')
      }) 
      .catch((error) => {
        console.log(error)
      })
    },

    updateContact (context, contactToUpdate) {
      axios.post('/updateContact', {
        nuevoId: contactToUpdate.nuevoId,
        id: contactToUpdate.id,
        nombre: contactToUpdate.nombre,
        apellido: contactToUpdate.apellido,
        codigo_area: contactToUpdate.codigo_area,
        numero: contactToUpdate.numero,
        color: contactToUpdate.color
      })
      .then(() => {
        context.dispatch('getAllContacts')
      }) 
      .catch((error) => {
        console.log(error)
      })
    },

    removeContact (context, contactToRemove) {
      axios.post('/deleteContact', {
        id: contactToRemove.id
      })
      .then(() => {
        context.dispatch('getAllContacts')
      })
      .catch((error) => {
        console.log(error)
      })
    },

    updateContactListAfterMove(context, newContactList) {
      context.commit('setContactsList', newContactList)
      context.dispatch('updateIndexsOfDataBase')
    },
    
    updateIndexsOfDataBase(context) {
      for (let i = 0; i < context.state.contacts.length; i++) {
        axios.post('/assignOrderToContact', {
          currentContextIndexOnArray: i,
          contactId: context.state.contacts[i].id,
        })
        .catch((error) => {
          console.log(error)
        })
      }
    }   
  }
})

const app = new Vue({
    el: '#app',
    router,
    store,
});




