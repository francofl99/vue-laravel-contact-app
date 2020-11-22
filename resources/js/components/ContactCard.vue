<template>

<div class="w-full" >
 <div  v-if="cardOnViewMode" class="grid grid-rows-4 border-2 border-gray-800 rounded-md bg-gray-400 card ">

       <div class="row-span-1 bg-gray-800 p-2 text-gray-200 items-center flex">Nombre: {{ contactName }}</div>
      <div class="p-2 text-gray-800 items-center flex">Apellido: {{ contactLastName }}</div>
      <div class="p-2 text-gray-800 items-start flex" >Numero: ({{ contactAreaCode }}) - {{ contactPhoneNumber }}</div>

        <div class="px-2 flex justify-items-start">
            <button
                @click="cardOnViewMode = false"
                class="mr-2 button view-button border-blue-500 hover:border-blue-600 bg-blue-400 text-blue-900 hover:bg-blue-500"
            >
                <vue-hicons class="mx-auto" name="pencil_alt" is-filled :width-icon="5"/>
            </button>
            <button class="button view-button border-red-500 hover:border-red-600 bg-red-400 text-red-900 hover:bg-red-500" @click="removeContact">
                <vue-hicons class="mx-auto" :width-icon="5" name="trash" is-filled/>
            </button>
        </div>

  </div>

  <div  v-else >
    <contact-card-on-edit-mode
      :contactId="contactId"
      :contactName="contactName"
      :contactLastName="contactLastName"
      :contactAreaCode="contactAreaCode"
      :contactPhoneNumber="contactPhoneNumber"

      @return-view="cardOnViewMode = true"/>
  </div>
</div>

</template>

<script>
import VueHicons from 'vue-hicons'
import axios from 'axios'

import contactCardOnEditMode from './contactCardOnEditMode'

export default {
  name: 'ContactCard',

  props: {
    contactId: Number,
    contactName: String,
    contactLastName: String,
    contactAreaCode: String,
    contactPhoneNumber: String
  },

  data () {
    return {
      cardOnViewMode: true
    }
  },

  components: {
    VueHicons,
    contactCardOnEditMode
  },

  methods: {
    removeContact () {
      axios.post('/deleteContact', {
        id: this.contactId
      })
        .then((response) => {
          console.log('contact' + this.contactId + 'removed')
        })
        .catch((error) => {
          console.log(error)
        })

      this.$root.$emit('data-base-modificated')
    }
  }
}
</script>

<style>
.card {
    height: 14rem;
}

.button {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
    transition-duration: 150ms;

     border-bottom-width: 4px;

    border-radius: 0.375rem;

}

.view-button {
    height: 85%;
    width: 28%;

    padding: 0.5rem;

}

.save-button {
  height: 85%;
  width: 46%;

  place-items: start;

  align-items: center;

  font-weight: 700;

  margin-left: 0.5rem;
  margin-right: 0.5rem;

  padding-right: 0.5rem;

  justify-content: space-between;
}

</style>
