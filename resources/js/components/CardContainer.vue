<template>
  
    <draggable  filter=".button" ghost-class="moving-card" :animation="200" :list="contacts" class="h-full w-2/3 p-4 gap-4 auto-rows-min grid grid-cols-3 overflow-y-scroll bg-gray-400 rounded-md">
    <contact-card v-for="contact in contacts"
      :key="contact.id"
      :contactId="contact.id"
      :contactName="contact.nombre"
      :contactLastName="contact.apellido"
      :contactAreaCode="contact.codigo_area"
      :contactPhoneNumber="contact.numero"
      :contactColor="contact.color"
    />
    </draggable>
  
</template>

<script>
import ContactCard from './ContactCard.vue'
import axios from 'axios'
import Draggable from 'vuedraggable'

export default {
  name: 'CardContainer',

  data () {
    return {
      contacts: []
    }
  },

  components: {
    ContactCard,
    Draggable
  },

  methods: {
    getContacts () {
      axios.get('/api/getContacts')
        .then((response) => {
          this.contacts = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  created () {
    this.getContacts()
  },

  mounted () {
    this.$root.$on('data-base-modificated', (data) => {
      this.getContacts()
    })
  }
}
</script>

<style >
 .moving-card {
    @apply rounded-md opacity-50 bg-gray-100;
  }
</style>
