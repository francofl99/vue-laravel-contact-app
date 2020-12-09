<template>
  <draggable filter=".button" ghost-class="moving-card" :animation="200" v-model="contacts" class="card-container">
    <contact-card  v-for="contact in contacts" :key="contact.id"
      :contact="contact"
    />    
   </draggable>
</template>

<script>
import ContactCard from './ContactCard.vue'
import Draggable from 'vuedraggable'

export default {
  name: 'CardContainer',

  components: {
    ContactCard,
    Draggable
  },

  computed: {
    contacts: {
      get() {
        return this.$store.getters.contactsGetter
      },
      set(newContactList) {
        this.$store.dispatch('updateContactListAfterMove', newContactList)
      }
    } 
      
  },

  methods: {
    getContacts() {
      this.$store.dispatch('getAllContacts');
    },
    
  },

  created() {
    this.getContacts();
  }
}
</script>

<style>
 .moving-card {
    @apply rounded-md opacity-50 bg-gray-100;
  }

  .card-container {
    @apply h-full w-2/3 p-4 gap-4 auto-rows-min grid grid-cols-3 overflow-y-scroll bg-gray-400 rounded-md;
  }
</style>
