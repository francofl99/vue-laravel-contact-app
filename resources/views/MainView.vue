<template>
    <view-container>
        <div class="bg-gray-500 w-full p-4 flex main-view justify-between">
            <input-contact/>
            <contact-card v-for="contact in contacts" 
                :key="contact.id"
                :contactName="contact.nombre"
                :contactLastName="contact.apellido"
                :contactAreaCode="contact.codigo_area"
                :contactPhoneNumeber="contact.numero" 
            />
        </div>
    </view-container>   
</template>

<script>
import ViewContainer from './ViewContainer.vue'
import InputContact from '../js/components/InputContact'
import ContactCard from '../js/components/ContactCard'
import axios from 'axios'

export default {
    name: 'MainView',

    components: { 
        ViewContainer,
        InputContact,
        ContactCard
    },

    data() {
        return {
            contacts: []
        }
        
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
.main-view {
    height: 88%;
}
</style>