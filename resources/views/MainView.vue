<template>
    <view-container>
        <div class="bg-gray-500 w-full p-4 flex main-view justify-between">
            <input-contact/>
            <contact-card v-for="contact in contacts" 
                :key="contact.id"
                :contactName="contact.nombre"
                :contactLastName="contact.apellido"
                :contactAreaCode="contact.condigo_area"
                :contactPhoneNumeber="contact.numero" 
            />
        </div>
    </view-container>   
</template>

<script>
import ViewContainer from './ViewContainer.vue'
import InputContact from '../js/components/InputContact'
import ContactCard from '../js/components/ContactCard'

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

    //  methods: {
    //     getContacts() {
            
    //         axios.get('localhost:8000').then();
    
    //     },

    // created() {
    //     this.getContacts();
    // }

   
}
</script>

<style>
.main-view {
    height: 88%;
}
</style>