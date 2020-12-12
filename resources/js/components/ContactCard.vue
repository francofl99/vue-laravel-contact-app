<template>
<div >
 <div v-if="cardOnViewMode" >
    <contact-card-on-view-mode
      :contact="contact"

      v-on:editButtonClicked="cardOnViewMode = false"
    />
  </div>

  <div v-else >
    <contact-card-on-edit-mode
      :contact="contact"

      v-on:contactUpdated="cardOnViewMode = true"/>
  </div>
</div>
</template>

<script>
import contactCardOnEditMode from './contactCardOnEditMode'
import contactCardOnViewMode from './contactCardOnViewMode'

export default {
  name: 'ContactCard',

  props: {
    contact: {
      type: Object,
      required: true
    }
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
.contact-card-design {

  height: 16rem;
  width: 100%;

  border-radius: 0.375rem;

  --bg-opacity: 1;
    background-color: #f7fafc;
    background-color: rgba(247, 250, 252, var(--bg-opacity));

  display: grid;

  grid-template-rows: repeat(4, minmax(0, 1fr));
}

.button {
  transition-property: background-color, border-color, color, fill, stroke, opacity, box-shadow, transform;
  transition-duration: 150ms;

  border-bottom-width: 4px;
  border-radius: 0.375rem;
}

.card-header {
  @apply  rounded-t-md row-span-1 p-2  items-center flex;
}

.card-body-item {
  @apply p-2 text-gray-800 flex;
}
</style>
