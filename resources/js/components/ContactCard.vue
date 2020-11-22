<template>

<div class="w-full">
 <div  v-if="cardOnViewMode">
    <contact-card-on-view-mode
      :contactId="contactId"
      :contactName="contactName"
      :contactLastName="contactLastName"
      :contactAreaCode="contactAreaCode"
      :contactPhoneNumber="contactPhoneNumber"

      @edit-button-clicked="cardOnViewMode = false"
    />
  </div>

  <div v-else >
    <contact-card-on-edit-mode
      :contactId="contactId"
      :contactName="contactName"
      :contactLastName="contactLastName"
      :contactAreaCode="contactAreaCode"
      :contactPhoneNumber="contactPhoneNumber"

      @contact-updated="cardOnViewMode = true"/>
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
.card-design {
  height: 14rem;

  border-radius: 0.375rem;

  --bg-opacity: 1;
  background-color: #cbd5e0;
  background-color: rgba(203, 213, 224, var(--bg-opacity));

  --border-opacity: 1;
  border-color: #2d3748;
  border-color: rgba(45, 55, 72, var(--border-opacity));

  border-width: 2px;

  display: grid;

  grid-template-rows: repeat(4, minmax(0, 1fr));
}

.button {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 150ms;

  border-bottom-width: 4px;
  border-radius: 0.375rem;
}
</style>
