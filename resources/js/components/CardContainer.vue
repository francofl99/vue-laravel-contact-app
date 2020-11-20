<template>
  <div class="cards-view grid-rows-2 grid grid-cols-3 py-4 px-2 items-center place-items-center bg-gray-400 rounded-md">
        <contact-card v-for="contact in contacts"
            :key="contact.id"
            :contactId="contact.id"
            :contactName="contact.nombre"
            :contactLastName="contact.apellido"
            :contactAreaCode="contact.codigo_area"
            :contactPhoneNumeber="contact.numero" 
        />
    </div>
</template>

<script>
import ContactCard from './ContactCard.vue'
import axios from 'axios'

export default {
name: 'CardContainer',

data() {
    return {
        contacts: []
    }
},

    components: {
        ContactCard
    },

    methods: {
          getContacts() {
            axios.get(`/api/getContacts`)
            .then((response) => {
                this.contacts = response.data;
            })
            .catch((error) => {
                console.log(error);
            });
          },
        },



      created() {
        this.getContacts();
      },

      mounted() {
          this.$root.$on('dataBaseModificated', (data) => {
              this.getContacts();
          })
      }
}
</script>

<style>
.cards-view {
    width: 58%;
    height: 100%;
}
</style>