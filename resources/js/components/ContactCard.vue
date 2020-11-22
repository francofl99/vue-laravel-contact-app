<template>

<div class="w-full" >
 <div  v-if="cardOnViewMode">
    <contact-card-on-view-mode
      :contactId="contactId"
      :contactName="contactName"
      :contactLastName="contactLastName"
      :contactAreaCode="contactAreaCode"
      :contactPhoneNumber="contactPhoneNumber"

      @change-to-edit-mode="cardOnViewMode = false"
    />
  </div>

  <div v-else >
    <contact-card-on-edit-mode
      :contactId="contactId"
      :contactName="contactName"
      :contactLastName="contactLastName"
      :contactAreaCode="contactAreaCode"
      :contactPhoneNumber="contactPhoneNumber"

      @change-to-view-mode="cardOnViewMode = true"/>
  </div>
</div>

</template>

<script>

import contactCardOnEditMode from './contactCardOnEditMode'
import contactCardOnViewMode from './contactCardOnViewMode'

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
    contactCardOnViewMode,
    contactCardOnEditMode
  }
}
</script>

<style>

</style>
