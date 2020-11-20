<template>
  <div class="cards-view grid grid-cols-3 gap-3 py-2 px-2 items-center place-items-center bg-gray-400 rounded-md">
        <contact-card v-for="contact in contacts" class="col-span-1"
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
        console.log(this.contacts);
    }

}
</script>

<style>
.cards-view {
    width: 58%;
    height: 100%;
}
</style>